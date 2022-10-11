import {IHome, NextPageWithLayout} from "../page";
import {ReactElement} from "react";
import Head from "next/head";
import {fetchContact} from "../../libs/contact/contact.helper";

//styles
import styles from './contact.module.css';

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
                            <div className='bg-violet-500 rounded-3xl px-5 py-10 md:p-10'>
                                <h3 className="mb-10 text-4xl font-righteous font-black ltr">I&apos;d love to hear about your suggestions <span className="leading-6 text-6xl font-bold text-violet-800">.</span></h3>
                                <ul className={styles.list}>
                                    <li className={styles.list_item}>
                                        <AiOutlinePhone className='text-6xl text-violet-800 transform rotate-90 block' />
                                        <div>
                                            <h4>mobile number :</h4>
                                            <p>{mobile_number}</p>
                                        </div>
                                    </li>

                                    <li className={styles.list_item}>
                                        <AiOutlineMail className='text-6xl text-violet-800 block' />
                                        <div>
                                            <h4>email address :</h4>
                                            <p>{email_address}</p>
                                        </div>
                                    </li>

                                    <li className={styles.list_item}>
                                        <AiOutlineHome className='text-6xl text-violet-800 block' />
                                        <div >
                                            <h4>home address :</h4>
                                            <p>{home_address}</p>
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