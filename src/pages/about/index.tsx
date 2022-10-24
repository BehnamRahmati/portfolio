import {IHome, NextPageWithLayout} from "../page";
import {CSSProperties, ReactElement, useEffect, useState} from "react";
import Image from "next/image";
import Head from "next/head";
import {fetchAbout} from "../../libs/about/about.helper";

//styles
import styles from './about.module.css'

//components
import {PrimaryLayout ,PageHeading} from '@/components/imports'

//external
import axios from "axios";
import {PropagateLoader} from "react-spinners";


const About: NextPageWithLayout<{ about : IHome}> = ({about}) => {

    const {image , title , content} = about.content![0]

    const [thumbnailUrl , setThumbnailUrl] = useState('')

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    useEffect(() => {

        (async() => {
            const {data} = await axios(`https://behnam-rahmati-samples.ir/wp-json/wp/v2/media/${image}` );
            setThumbnailUrl(data.media_details.sizes.medium.source_url);
        })();

    } , [])

    const myLoader = ({ src, width, quality } : {src : string; width : number; quality? : number}) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }


    return (
        <>
            <section className="min-h-screen bg-moon-gradient pt-14 lg:pt-36 ">
                <div className="px-4 py-24 lg:p-24 container mx-auto">
                    <PageHeading title={'brief about me'} subtitle={'bio'} shortTitle={'about'} />

                    <div className=" pt-32 md:px-24">
                        <div className="lg:grid lg:grid-cols-3 lg:gap-20 flex flex-col-reverse space-y-20 space-y-reverse lg:space-y-0">
                            <div className="lg:col-span-2 flex flex-col justify-center h-full">
                                <h3 className="mb-6 font-righteous font-bold text-3xl ltr first-letter:capitalize">{title}</h3>
                                <div className={styles.content} dangerouslySetInnerHTML={{__html: content}}/>
                                 </div>
                            <div className="lg:col-span-1">
                                <div className="relative h-96 w-full lg:w-96 grid place-content-center">
                                    {thumbnailUrl ?  <Image loader={() => myLoader({ src: thumbnailUrl ,width : 300 })} priority={true} src={thumbnailUrl} alt={'behnam-rahmati-project'} layout={'fill'} className='rounded-3xl' /> : <PropagateLoader color="rgb(124 58 237)" cssOverride={override} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

About.getLayout = (page: ReactElement) => <PrimaryLayout>{page}</PrimaryLayout>

export const  getStaticProps = async () => ({ props : {about : await fetchAbout()}, revalidate: 1 })

export default About;