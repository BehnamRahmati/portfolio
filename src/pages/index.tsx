import {ReactElement, useRef, useState} from "react";
import type { NextPageWithLayout, IHome } from "./page";
import {renderPrimaryCards} from '@/components/utils/helpers'
import {fetchHome} from "../libs/home.helper";
import { transitionStyles , defaultStyle} from '../libs/constants/transition';

//styles
import styles from './home.module.css';

//components
import {SectionHeading ,SecondaryCard ,PrimaryList , ContactForm, PrimaryButton ,PrimaryLayout} from '@/components/imports';

//external imports
import {FiArrowUpRight} from 'react-icons/fi';
import {CgClose} from "react-icons/cg";
import {Transition} from "react-transition-group";



const Home: NextPageWithLayout<{ home : IHome}> = ({home}) => {
	const{ banner , skills , works ,information} = home;
	const {first_name, last_name, subtitle} = banner![0];
	const [inPropContact, setInPropContact] = useState(false);
	const elRef = useRef(null);



	return <>
		<section className={styles.home_banner} >

			<div className={styles.home_banner_introduction}>
				<h1>
					<span>{first_name}</span>
					<span>{last_name}</span>
				</h1>
				<div className={styles.home_banner_subtitle} dangerouslySetInnerHTML={{__html : subtitle}}></div>
			</div>

			<div className={styles.bottomLetter} >B</div>
			<div className={styles.topLetter} >R</div>
			<div className={styles.bannerDot_container}>
				<div className={styles.bannerDot}></div>
			</div>

		</section>


		<section className={styles.section}>
			<SectionHeading shortTitle={'experience'} title={'job experiences'} subtitle={'jobs i had so far.'}/>

			<div className={styles.progress}>
				{skills!.map((skill,i) => <SecondaryCard key={skill.title} title={skill.title} description={skill.content} count={i+1}/>)}
			</div>

		</section>


		<section className={styles.section}>
			<SectionHeading shortTitle={'Skill'} title={'technology skills'} subtitle={'skills i learned so far.'}/>

			<div className={styles.technologies}>
				{information!.map((info, i) => <PrimaryList key={info.title} title={info.title} count={i + 1} list={info.info} />)}
			</div>
		</section>


		<section className={styles.section}>
			<SectionHeading shortTitle={'work'} title={'recent work'} subtitle={'works so far.'}/>

			{renderPrimaryCards(works!.slice(0,5))}

			<div className={styles.btn_container}>
				<PrimaryButton content={'view more'} url={'/works'} />
			</div>
		</section>


		<section className={styles.section}>

			<SectionHeading shortTitle={'contact'} title={'contact me'} subtitle={'go ahead!'}/>

			<div className={styles.contact_container}>

				<div className={styles.contact + " bg-svg"} onClick={() => setInPropContact(!inPropContact)}>
					<div>
						<p>desire for a project that rocks ?</p>
						<h3>
							<span>contact</span>
							<span>behnam</span>
						</h3>
						<FiArrowUpRight className={styles.arrowTopRight} />
					</div>
				</div>

			</div>

			<Transition nodeRef={elRef} in={inPropContact} timeout={500}>
				{state => (
					<div className={styles.contactForm} ref={elRef} style={{
						...defaultStyle,
						...transitionStyles[state]
					}}>
						<div className="flex flex-col w-full h-screen">
							<div className="flex flex-row items-center justify-between container mx-auto p-5 2xl:py-5 2xl:px-0">
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


Home.getLayout = (page: ReactElement) => <PrimaryLayout>{page}</PrimaryLayout>

export const getStaticProps = async () => ({props :{ home : await fetchHome() },revalidate: 1})

export default Home;