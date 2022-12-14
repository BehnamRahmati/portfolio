import {IHome,NextPageWithLayout} from "../page";
import {ReactElement} from "react";
import Head from "next/head";
import {fetchWorks} from "../../libs/works/works.helper";

//components
import {renderPrimaryCards} from '@/components//utils/helpers';
import {PrimaryLayout, PageHeading, PrimaryButton} from '@/components/imports';

//external
import {AiOutlineHome, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";




const Works: NextPageWithLayout<{ works : IHome[] , contact: IHome}>= ({works , contact}) => {
    const worksArr = works[0].works
    const {mobile_number , email_address , home_address} = contact;

    return (
        <>
            <section className="min-h-screen pt-14 lg:pt-36" >

                <div className="container mx-auto px-5 pt-24 lg:p-24 space-y-10 lg:space-y-20">
                    <PageHeading shortTitle={'work'} title={'recent work'} subtitle={'works'}/>
                    {renderPrimaryCards(worksArr!)}
                </div>
            </section>

            <section className="container mx-auto py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 ltr">
                    <div className="ltr col-span-1 bg-violet-700 grid place-content-center p-10 lg:p-20">
                        <h3 className="ltr w-96 text-center text-5xl font-righteous mb-10">what are you waiting for?</h3>
                        <div className={'grid place-items-center'}>
                            <PrimaryButton content={'get started'} url={'mailto: behnam.main@gmail.com'} secondary={true} />
                        </div>
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

Works.getLayout = (page: ReactElement) => <PrimaryLayout>{page}</PrimaryLayout>

export const getStaticProps = async () => ({props : await fetchWorks(),revalidate: 1})

export default Works;