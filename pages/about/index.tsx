import {IHome, IPortfolio, NextPageWithLayout} from "../page";
import {CSSProperties, ReactElement, useEffect, useState} from "react";
import PrimaryLayout from "@/components/layouts/primary_layout/PrimaryLayout";
import PageHeading from "@/components/headings/page_heading/PageHeading";
import axios from "axios";
import Image from "next/image";
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
            setThumbnailUrl(data.media_details.sizes.medium_large.source_url);
        })();

    } , [])


    return (
        <>
            <section className="min-h-screen bg-moon-gradient pt-14 lg:pt-44 ">
                <div className="px-4 py-24 lg:p-24 container mx-auto">
                    <PageHeading title={'brief about me'} subtitle={'bio'} shortTitle={'about'} />

                    <div className=" pt-32">
                        <div className="lg:grid lg:grid-cols-3 lg:gap-20 flex flex-col-reverse space-y-20 space-y-reverse lg:space-y-0">
                            <div className="lg:col-span-2 flex flex-col justify-center h-full">
                                <h3 className="mb-6 font-righteous font-bold text-3xl ltr first-letter:capitalize">{title}</h3>
                                <div dangerouslySetInnerHTML={{__html: content}}/>
                                 </div>
                            <div className="lg:col-span-1">
                                <div className="relative h-96 w-full lg:w-64 grid place-content-center">
                                    {thumbnailUrl ?  <Image loader={() => thumbnailUrl} src={thumbnailUrl} width={300} height={400} alt={'behnam-rahmati-project'} layout={'fill'} className='rounded-3xl' /> : <PropagateLoader color="rgb(124 58 237)" cssOverride={override} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



About.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrimaryLayout>{page}</PrimaryLayout>
    );
};

export default About;

export async function getStaticProps() {
    let props = { about: {}}
    try {
        const { data } : {data: IPortfolio[] } =  await axios(process.env.BASE_URL! , {params : {search : 'about'}});
        const about= data.map( (response)  => {
            const {content} = response.acf
            return {
                content
            }
        })
        props.about = about[0];
    }
    catch (err) {
        console.log('from home page :' , err  )
    }

    return {
        props,
        revalidate: 1
    }
}