import styles from "./Header.module.css";
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {Transition} from 'react-transition-group';
import {useState, useRef, useEffect} from 'react';
import {useRouter} from 'next/router';
import { CgClose } from 'react-icons/cg'
import Link from "next/link";

export interface IHeader {
	className?: string;
}

const Header: React.FC<IHeader> = ({
	className = "",
}) => {
	const [inProp, setInProp] = useState(false);
	const [pathname, setPathname] = useState('/');
	const [scrolled , setScrolled] = useState(false)
	const nodeRef = useRef(null);
	const router = useRouter();

	useEffect(() => {
		setPathname(router.pathname)
	}, [router.pathname]);

	const duration = 300;
	const defaultStyle = {
		transition: `all ${duration}ms ease-in-out`,
		opacity: 0,
		zIndex: 0,
	}

	const transitionStyles : { [id: string]: React.CSSProperties }=  {
		entering: { opacity: 1 , zIndex: 40 },
		entered:  { opacity: 1, zIndex: 40 },
		exiting:  { opacity: 0, zIndex: -10 , transition: `all ${duration}ms ease-in-out`},
		exited:  { opacity: 0 , zIndex: -10 ,transition: `all ${duration}ms ease-in-out`},
	};

	useEffect(() => {
		window.addEventListener('scroll' ,_ => {
			if(window.scrollY >= 60 ) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		})
	}, []);



	return <header >
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
					...transitionStyles[state]
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

	</header>;
};

export default Header;
