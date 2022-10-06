import {NextPageWithLayout} from "../page";
import {ReactElement} from "react";
import PrimaryLayout from "@/components/layouts/primary_layout/PrimaryLayout";
import PrimaryCard from "@/components/cards/primary_card/PrimaryCard";
import {IPrimaryCardMockProps} from "@/components/cards/primary_card/PrimaryCard.mocks";
import PageHeading from "@/components/headings/page_heading/PageHeading";
import {AiOutlineHome, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";

const Works: NextPageWithLayout = () => {

    const renderPrimaryCards = () => {
        let evens: string[] = [];
        let odds: string[] = [];
        [...new Array(5)].forEach((_,i) => {

            if(i % 2 === 0) {
                evens = [...evens , '-'];
            } else {
                odds = [...odds , '-']
            }

        })

        return (
            <div className="grid grid-cols1 lg:grid-cols-2 gap-20 py-20 ">
                <div className={'flex flex-col space-y-20 pt-20'}>
                    {odds.map((_ , i) => <PrimaryCard key={i}  {...IPrimaryCardMockProps.base}  />)}
                </div>
                <div className={'flex flex-col space-y-20'}>
                    {evens.map((_ , i) => <PrimaryCard key={i}  {...IPrimaryCardMockProps.base}  />)}
                </div>
            </div>

        )
    }

    return (
        <>
            <section className="min-h-screen pt-44" >

                <div className="container mx-auto p-24 space-y-20">
                    <PageHeading shortTitle={'work'} title={'recent work'} subtitle={'works'}/>
                    {renderPrimaryCards()}
                </div>
            </section>

            <section className="container mx-auto py-24">
                <div className="grid grid-cols-2 ltr">
                    <div className="ltr col-span-1 bg-violet-700 grid place-content-center p-20">
                        <h3 className="ltr w-fit text-5xl font-righteous mb-10">what are you waiting for?</h3>

                    </div>
                    <div className="ltr col-span-1 border-b-2 border-violet-700 pl-10">

                        <h3 className="ltr text-5xl font-righteous mb-10">say hi <span className="ltr text-violet-700 font-bold text-7xl font-righteous leading-5">.</span></h3>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 ltr">
                            <li className="flex flex-row items-center ltr py-5 col-span-1">
                                <AiOutlinePhone className='text-6xl text-violet-800 transform rotate-90 block w-16 h-16' />
                                <div className="ltr ml-4 space-y-2">
                                    <h4 className="text-xl font-righteous font-bold ltr capitalize">mobile number :</h4>
                                    <p className="text-lg ltr tracking-wider">+989025186640</p>
                                </div>
                            </li>

                            <li className="flex flex-row items-center ltr py-5 col-span-1">
                                <AiOutlineHome className='text-6xl text-violet-800 block w-16 h-16' />
                                <div className="ltr ml-4 space-y-2">
                                    <h4 className="text-xl font-righteous font-bold ltr capitalize">home address :</h4>
                                    <p className="text-lg ltr tracking-wider">markazi , arak , hepko</p>
                                </div>
                            </li>

                            <li className="flex flex-row items-center ltr py-5 cols-span-1 lg:col-span-2">
                                <AiOutlineMail className='text-6xl text-violet-800 block w-16 h-16' />
                                <div className="ltr ml-4 space-y-2">
                                    <h4 className="text-xl font-righteous font-bold ltr capitalize">email address :</h4>
                                    <p className="text-lg ltr tracking-wider">behnam.main@gmail.com</p>
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
