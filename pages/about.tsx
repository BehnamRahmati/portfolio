import {NextPageWithLayout} from "./page";
import {ReactElement} from "react";
import PrimaryLayout from "@/components/layouts/primary_layout/PrimaryLayout";
import PageHeading from "@/components/headings/page_heading/PageHeading";

const About: NextPageWithLayout = () => {
    return (
        <>
            <section className="min-h-screen bg-moon-gradient pt-44 container mx-auto">
                <PageHeading title={'brief about me'} subtitle={'bio'} shortTitle={'about'} />

                <div className=" p-5 py-24 lg:p-32 lg:pb-10">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-20 flex flex-col-reverse space-y-20 space-y-reverse">
                        <div className="lg:col-span-2 flex flex-col justify-center">
                            <h3 className="mb-6 font-righteous font-bold text-3xl ltr first-letter:capitalize">brief about me</h3>
                            <p className='mb-4 ltr'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p className='ltr'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="relative h-96 w-full lg:w-64 rounded-md bg-violet-500"></div>
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