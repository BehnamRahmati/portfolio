import {IHome, NextPageWithLayout} from "../page";
import {ReactElement} from "react";
import Head from "next/head";
import {fetchContact} from "../../libs/contact/contact.helper";

//components
import {PrimaryLayout, PageHeading, ContactForm} from '@/components/imports';

//external
import {AiOutlinePhone , AiOutlineHome , AiOutlineMail} from "react-icons/ai";



const Contact: NextPageWithLayout<{ contact : IHome}> = ({contact}) => {

    const {mobile_number , email_address , home_address} = contact;

    return (
        <>
            <Head>
                <title> تماس با | بهنام رحمتی</title>
            </Head>
            <section className="min-h-screen bg-moon-gradient pt-14 lg:pt-44">

                <div className="container mx-auto px-5 py-24 lg:p-24">
                    <PageHeading title={'get in touch with me.'} subtitle={'contact me!'} shortTitle={'contact'}/>
                    <div className="pt-24 lg:py-24">
                        <div className="ltr grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div className="h-full">
                                <ContactForm />
                            </div>
                            <div className='bg-violet-500 rounded-lg px-5 py-10 lg:p-10'>
                                <h3 className="mb-10 text-4xl font-righteous font-black ltr">I&apos;d love to hear about your suggestions <span className="leading-6 text-6xl font-bold text-violet-800">.</span></h3>
                                <ul className="flex flex-col divide-y-2 ltr lg:my-14">
                                    <li className="flex flex-row items-center ltr py-5">
                                        <AiOutlinePhone className='text-6xl text-violet-800 transform rotate-90 block' />
                                        <div className="ltr ml-4 space-y-2">
                                            <h4 className="text-xl font-righteous font-bold ltr capitalize">mobile number :</h4>
                                            <p className="text-sm lg:text-lg ltr tracking-wider">{mobile_number}</p>
                                        </div>
                                    </li>

                                    <li className="flex flex-row items-center ltr py-5">
                                        <AiOutlineMail className='text-6xl text-violet-800 block' />
                                        <div className="ltr ml-4 space-y-2">
                                            <h4 className="text-xl font-righteous font-bold ltr capitalize">email address :</h4>
                                            <p className="text-sm lg:text-lg ltr tracking-wider">{email_address}</p>
                                        </div>
                                    </li>

                                    <li className="flex flex-row items-center ltr py-5">
                                        <AiOutlineHome className='text-6xl text-violet-800 block' />
                                        <div className="ltr ml-4 space-y-2">
                                            <h4 className="text-xl font-righteous font-bold ltr capitalize">home address :</h4>
                                            <p className="text-sm lg:text-lg ltr tracking-wider">{home_address}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Contact.getLayout = (page: ReactElement) => <PrimaryLayout>{page}</PrimaryLayout>

export const getStaticProps = async () => ({ props : {contact : await fetchContact()} , revalidate: 1})

export default Contact;