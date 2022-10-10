import Link from "next/link";
import React, {useState, useRef} from 'react';
import {headerTransitionStyles ,defaultStyle} from '../../libs/constants/transition'
import useScroll from "@/components/header/useScroll";
import usePath from "@/components/header/usePath";


//styles
import styles from "./Header.module.css";

//external
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import {Transition} from 'react-transition-group';




const Header: React.FC = () => {
	const [inProp, setInProp] = useState(false);
	const nodeRef = useRef(null);
	const [scrolled] = useScroll(false);
	const [pathname] = usePath('/');



	return (

		<header >
			<div className={ scrolled ? `${styles.header} ${styles.headerScrolled}` : styles.header }>
				<div>
					<div>
						<button className='p-1 pt-2' type="button" onClick={() => setInProp(!inProp)}>
							<HiOutlineMenuAlt4 className='text-white text-2xl lg:text-5xl' />
						</button>
					</div>


					<div>
						<p className={styles.headerTitle}>BR<span>.</span></p>
					</div>
				</div>
			</div>

			<Transition nodeRef={nodeRef} in={inProp}  timeout={500} >
				{state => (
					<div className={styles.headerMenu} ref={nodeRef} style={{
						...defaultStyle,
						...headerTransitionStyles[state]
					}}>
						<div className="menu-container">
							<div className="flex flex-row items-center justify-between container mx-auto p-5 lg:py-5 lg:px-0">
								<div>
									<button type="button" onClick={() => setInProp(!inProp)}>
										<CgClose className='text-white text-2xl lg:text-5xl' />
									</button>
								</div>

								<div>
									<p className={styles.headerTitle}>BR<span>.</span></p>
								</div>
							</div>

							<div className="grid place-items-center w-full h-full flex-1">

								<nav className='grid place-items-center space-y-20'>
									<Link href={'/'}>
										<a className={pathname === '/' ? styles.activeNavLinks : styles.navLinks} onClick={() => setInProp(!inProp)}>
											<span>Home</span>
											<span className='relative z-10'>Home</span>
										</a>
									</Link>

									<Link href={'/works'}>
										<a className={pathname === '/works' ? styles.activeNavLinks : styles.navLinks} onClick={() => setInProp(!inProp)}>
											<span>works</span>
											<span className='relative z-10'>works</span>
										</a>
									</Link>

									<Link href={'/about'}>
										<a className={pathname === '/about' ? styles.activeNavLinks : styles.navLinks} onClick={() => setInProp(!inProp)}>
											<span>About</span>
											<span className='relative z-10'>About</span>
										</a>
									</Link>
									<Link href={'/contact'}>
										<a className={pathname === '/contact' ? styles.activeNavLinks : styles.navLinks} onClick={() => setInProp(!inProp)}>
											<span>Contact</span>
											<span className='relative z-10'>Contact</span>
										</a>
									</Link>

								</nav>

							</div>
						</div>

					</div>
				)}
			</Transition>

		</header>
	);
};

export default Header;
