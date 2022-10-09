import {IHome, IPortfolio, NextPageWithLayout} from "../page";
import {ReactElement} from "react";
import PrimaryLayout from "@/components/layouts/primary_layout/PrimaryLayout";
import PageHeading from "@/components/headings/page_heading/PageHeading";
import {AiOutlineHome, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {renderPrimaryCards} from '@/components//utils/helpers'
import axios from "axios";
import Head from "next/head";

const Works: NextPageWithLayout<{ works : IHome[] , contact: IHome}>= ({works , contact}) => {
    const worksArr = works[0].works
    const {mobile_number , email_address , home_address} = contact;

    return (
        <>

            <Head>
                <title>Behnam&apos;s portfolio | works</title>
            </Head>
            <section className="min-h-screen pt-14 lg:pt-44" >

                <div className="container mx-auto px-5 pt-24 lg:p-24 space-y-10 lg:space-y-20">
                    <PageHeading shortTitle={'work'} title={'recent work'} subtitle={'works'}/>
                    {renderPrimaryCards(worksArr!)}
                </div>
            </section>

            <section className="container mx-auto py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 ltr">
                    <div className="ltr col-span-1 bg-violet-700 grid place-content-center p-10 lg:p-20">
                        <h3 className="ltr w-fit text-5xl font-righteous mb-10">what are you waiting for?</h3>

                    </div>
                    <div className="ltr col-span-1 border-b-2 border-violet-700 p-5 lg:pl-10">

                        <h3 className="ltr text-5xl font-righteous mb-10">say hi <span className="ltr text-violet-700 font-bold text-7xl font-righteous leading-5">.</span></h3>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 ltr">
                            <li className="flex flex-row items-center ltr py-5 col-span-1">
                                <AiOutlinePhone className='text-6xl text-violet-800 transform rotate-90 block w-16 h-16' />
                                <div className="ltr ml-4 space-y-2">
                                    <h4 className="text-xl font-righteous font-bold ltr capitalize">mobile number :</h4>
                                    <p className="text-sm lg:text-lg ltr tracking-wider">{mobile_number}</p>
                                </div>
                            </li>

                            <li className="flex flex-row items-center ltr py-5 col-span-1">
                                <AiOutlineHome className='text-6xl text-violet-800 block w-16 h-16' />
                                <div className="ltr ml-4 space-y-2">
                                    <h4 className="text-xl font-righteous font-bold ltr capitalize">home address :</h4>
                                    <p className="text-sm lg:text-lg ltr tracking-wider">{home_address}</p>
                                </div>
                            </li>

                            <li className="flex flex-row items-center ltr py-5 cols-span-1 lg:col-span-2">
                                <AiOutlineMail className='text-6xl text-violet-800 block w-16 h-16' />
                                <div className="ltr ml-4 space-y-2">
                                    <h4 className="text-xl font-righteous font-bold ltr capitalize">email address :</h4>
                                    <p className="text-sm lg:text-lg ltr tracking-wider">{email_address}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

Works.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrimaryLayout>{page}</PrimaryLayout>
    );
};

export default Works;


export async function getStaticProps() {
    let props = { works: {} , contact: {}}
    try {
        const { data: worksRes } : {data: IPortfolio[] } =  await axios(process.env.BASE_URL! , {params : {search : 'home'}});
        const worksArr = worksRes.map( (response)  => {
            return {works:response.acf.works}
        })
        props.works = worksArr;

        const { data:contactRes } : {data: IPortfolio[] } =  await axios(process.env.BASE_URL! , {params : {search : 'contact'}});
        const contact= contactRes.map( (response)  => {
            const {mobile_number , email_address , home_address} = response.acf
            return {
                mobile_number , email_address , home_address
            }
        })
        props.contact = contact[0];
    }
    catch (err) {
        console.log('from works page :' , err  )
    }

    return {
        props,
        revalidate: 1
    }
}