import {NextPageWithLayout} from "../page";
import {ReactElement} from "react";
import PrimaryLayout from "@/components/layouts/primary_layout/PrimaryLayout";
import PageHeading from "@/components/headings/page_heading/PageHeading";
import {AiOutlinePhone , AiOutlineHome , AiOutlineMail} from "react-icons/all";
import ContactForm from "@/components/forms/contact_form/ContactForm";

const Contact: NextPageWithLayout = () => {
    return (
        <>
            <section className="min-h-screen bg-moon-gradient pt-44">

                <div className="container mx-auto px-4 py-24 lg:p-24">
                    <PageHeading title={'get in touch with me.'} subtitle={'contact me!'} shortTitle={'contact'}/>
                    <div className="py-24">
                        <div className="ltr grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div className="h-full">
                                <ContactForm />
                            </div>
                            <div className='bg-violet-500 rounded-lg p-5 lg:p-10'>
                                <h3 className="mb-10 text-4xl font-righteous font-black ltr">I&apos;d love to hear about your suggestions <span className="leading-6 text-6xl font-bold text-violet-800">.</span></h3>
                                <ul className="flex flex-col divide-y-2  ltr my-14">
                                    <li className="flex flex-row items-center ltr py-5">
                                        <AiOutlinePhone className='text-6xl text-violet-800 transform rotate-90 block' />
                                        <div className="ltr ml-4 space-y-2">
                                            <h4 className="text-xl font-righteous font-bold ltr capitalize">mobile number :</h4>
                                            <p className="text-lg ltr tracking-wider">+989025186640</p>
                                        </div>
                                    </li>

                                    <li className="flex flex-row items-center ltr py-5">
                                        <AiOutlineMail className='text-6xl text-violet-800 block' />
                                        <div className="ltr ml-4 space-y-2">
                                            <h4 className="text-xl font-righteous font-bold ltr capitalize">email address :</h4>
                                            <p className="text-lg ltr tracking-wider">behnam.main@gmail.com</p>
                                        </div>
                                    </li>

                                    <li className="flex flex-row items-center ltr py-5">
                                        <AiOutlineHome className='text-6xl text-violet-800 block' />
                                        <div className="ltr ml-4 space-y-2">
                                            <h4 className="text-xl font-righteous font-bold ltr capitalize">home address :</h4>
                                            <p className="text-lg ltr tracking-wider">markazi , arak , hepko</p>
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

Contact.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrimaryLayout>{page}</PrimaryLayout>
    );
};

export default Contact;