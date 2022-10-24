import {NextPageWithLayout} from "./page";
import {ReactElement} from "react";
import PrimaryLayout from "@/components/layouts/primary_layout/PrimaryLayout";
import PrimaryButton from "@/components/buttons/primary-button/PrimaryButton";
import Head from "next/head";

const NotFound: NextPageWithLayout = () => {
    return (
        <>
            <section className="h-screen bg-moon-gradient ">

                <div className="h-full grid place-items-center">
                    <div className='notFoundPage'>
                        <h2 className='font-righteous'>404</h2>
                        <h3 className="font-righteous">page not found</h3>
                        <p className="text-center mt-5 w-72 lg:w-96 uppercase text-base lg:text-lg ltr mb-8">page you are looking for does not exist or has been moved.</p>
                      <div className="grid place-items-center">
                          <PrimaryButton content={'back to home'} url={'/'} />
                      </div>
                    </div>
                </div>

            </section>
        </>
    )
}

NotFound.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrimaryLayout>{page}</PrimaryLayout>
    );
};

export default NotFound;
