import PrimaryLayout from "@/components/layouts/primary_layout/PrimaryLayout";
import {ReactElement, useRef, useState} from "react";
import type { NextPageWithLayout, IPortfolio , IHome } from "./page";
import SectionTitle from "@/components/headings/section_title/SectionTitle";
import SecondaryCard from "@/components/cards/secondary_card/SecondaryCard";
import PrimaryList from "@/components/lists/primary_list/PrimaryList";
import ContactForm from "@/components/forms/contact_form/ContactForm";
import PrimaryButton from "@/components/buttons/primary-button/PrimaryButton";
import {renderPrimaryCards} from '@/components//utils/helpers'

// external dependencies
import {FiArrowUpRight} from 'react-icons/fi';
import styles from "@/components/header/Header.module.css";
import {CgClose} from "react-icons/cg";
import {Transition} from "react-transition-group";
import axios from "axios";



const Home: NextPageWithLayout<{ home : IHome}> = ({home}) => {
	const{ banner , skills , works ,information} = home;
	const {first_name, last_name, subtitle} = banner![0];
	const [inPropContact, setInPropContact] = useState(false);
	const elRef = useRef(null);


	const duration = 300;
	const defaultStyle = {
		transition: `all ${duration}ms ease-in-out`,
		opacity: 0,
		zIndex: 0,
	}

	const transitionStyles : { [id: string]: React.CSSProperties }=  {
		entering: { opacity: 1 , zIndex: 50 },
		entered:  { opacity: 1, zIndex: 50 },
		exiting:  { opacity: 0, zIndex: -10 , transition: `all ${duration}ms ease-in-out`},
		exited:  { opacity: 0 , zIndex: -10 ,transition: `all ${duration}ms ease-in-out`},
	};




	return <>

		<section className={'home-banner relative bg-moon-gradient'} >

			<div className="home-banner-introduction relative">
				<h1>
					<span>{first_name}</span>
					<span>{last_name}</span>
				</h1>

				<div className="home-banner-subtitle" dangerouslySetInnerHTML={{__html : subtitle}}></div>
			</div>

			<div className='absolute bottom-24 lg:bottom-44 left-24 text-7xl font-bold font-righteous banner-text-shadow ' >B</div>
			<div className='absolute top-20 lg:top-10 right-24 lg:right-56 text-7xl font-bold font-righteous banner-text-shadow' >R</div>
			<div className='absolute top-0 left-24 lg:left-56 '><div className='w-2 h-2 rounded-full bg-violet-400 banner-dot relative'></div></div>

		</section>


		<section className="container mx-auto py-20 px-5 lg:p-24">
			<SectionTitle shortTitle={'progress'} title={'Project Progress'} subtitle={'progress of creating content'}/>

			<div className="grid grid-cols-1 py-10">
				{skills!.map((skill,i) => {
					return(
						<SecondaryCard key={skill.title} title={skill.title} description={skill.content} count={i+1} />
					)
				})}
			</div>

		</section>


		<section className="container mx-auto py-20 px-5 lg:p-24">
			<SectionTitle shortTitle={'experience'} title={'information technology'} subtitle={'experience'}/>
			<div className="flex flex-col lg:flex-row space-y-24 lg:space-y-0 lg:justify-between py-24 ltr">
				{information!.map((info, i) => {
					return(
						<PrimaryList key={info.title} title={info.title} count={i + 1} list={info.info} />
					)
				})}
			</div>
		</section>


		<section className="container mx-auto py-20 px-5 lg:p-24">

			<SectionTitle shortTitle={'work'} title={'recent work'} subtitle={'works'}/>
			{renderPrimaryCards(works!.slice(0,5))}
			<div className="grid place-items-center my-20">
				<PrimaryButton content={'view more'} url={'/works'} />
			</div>
		</section>


		<section className="container mx-auto py-20 px-5 lg:p-24">

			<SectionTitle shortTitle={'contact'} title={'contact me'} subtitle={'go ahead!'}/>

			<div className="pt-32 grid place-items-center">

				<div className="bg-svg p-5 cursor-pointer cursor-pointer" onClick={() => setInPropContact(!inPropContact)}>
					<div className="cursor-pointer rounded-full border-2 border-dashed border-violet-700 ltr grid place-items-center w-56 h-56 lg:w-96 lg:h-96 p-5 lg:p-20">
						<p className='text-sm text-slate-200 ltr my-3 capitalize w-24 lg:w-44'>desire for a project that rocks ?</p>
						<h3 className="flex flex-col ">
							<span className="font-bold text-2xl lg:text-5xl font-righteous capitalize">contact</span>
							<span className="font-bold text-2xl lg:text-5xl font-righteous capitalize">behnam</span>
						</h3>
						<FiArrowUpRight className="text-4xl lg:text-8xl text-white mr-10 lg:mr-20" />
					</div>
				</div>

			</div>

			<Transition nodeRef={elRef} in={inPropContact} timeout={500}>
				{state => (
					<div className={styles.headerMenu} ref={elRef} style={{
						...defaultStyle,
						...transitionStyles[state]
					}}>
						<div className="flex flex-col w-full h-screen">
							<div className="flex flex-row items-center justify-between container mx-auto p-5 lg:py-5 lg:px-0">
								<div>
									<button type="button" onClick={() => setInPropContact(!inPropContact)}>
										<CgClose className='text-white text-2xl lg:text-5xl' />
									</button>
								</div>

								<div>
									<p className={styles.headerTitle}>BR<span>.</span></p>
								</div>
							</div>

							<div className='container mx-auto flex-1 px-5 lg:px-0 lg:w-1/2 mx-auto mb-20 py-14'>
								<h3 className='ltr capitalize text-5xl font-black font-righteous w-full text-center mb-10'>Contact me.</h3>
								<ContactForm />
							</div>
						</div>

					</div>
				)}
			</Transition>

		</section>

	</>;
};

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<PrimaryLayout>{page}</PrimaryLayout>
	);
};

export default Home;


export async function getStaticProps() {
	let props = { home: {}}
	try {
		const { data } : {data: IPortfolio[] } =  await axios(process.env.BASE_URL! , {params : {search : 'home'}});
		const home= data.map( (response)  => {
			const {banner , skills , works, information} = response.acf
			return {
				banner,
				skills,
				works,
				information
			}
		})
		props.home = home[0];
	}
	catch (err) {
		console.log('from home page :' , err  )
	}

	return {
		props,
		revalidate: 1
	}
}