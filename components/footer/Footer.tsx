import styles from "./Footer.module.css";

import {SiLinkedin} from 'react-icons/si';
import {FaBehanceSquare , FaGithubSquare , FaWhatsappSquare , FaEnvelope} from 'react-icons/fa';
import {useEffect, useRef} from "react";

export interface IFooter {
	className?: string;
}

const Footer: React.FC<IFooter> = ({
	className = "",
}) => {
	const cursorRef = useRef<HTMLDivElement>(null)

	useEffect(() => {

		if(cursorRef.current !== null){
			document.body.addEventListener("mousemove", function(e) {
				cursorRef.current!.style.left = e.clientX + "px",
					cursorRef.current!.style.top = e.clientY + "px";
			});
		}

	}, [cursorRef]);

	return <footer className={styles.footer}>

		<div className='px-5 lg:px-0 py-10 lg:py-24'>
			<div className="py-5 border-t-2 border-t-white flex flex-col-reverse space-y-10 space-y-reverse lg:space-y-0 lg:flex-row items-center justify-between container mx-auto">
				<div className="flex flex-row items-center space-x-4 ltr">
					<a> <SiLinkedin className=" text-white" style={{fontSize: '1.6rem'}} /> </a>
					<a> <FaBehanceSquare className="text-3xl text-white"  /> </a>
					<a> <FaGithubSquare className="text-3xl text-white"  /> </a>
					<a> <FaWhatsappSquare className="text-3xl text-white"  /> </a>
					<a> <FaEnvelope className="text-3xl text-white"  /> </a>
				</div>

				<div className='flex flex-row items-end ltr space-x-4'>
					<p className="capitalize font-bold leading-8 text-center">designed <span className=' text-4xl text-violet-700 '>.</span> by osama daimallah</p>
					<span className="text-xl text-violet-700 font-bold leading-8">&</span>
					<p className="capitalize font-bold leading-8 text-center">developed <span className='text-4xl text-violet-700'>.</span> by behnam rahmati</p>
				</div>

			</div>
		</div>

		<div className={styles.cursor} ref={cursorRef} id="cursor"></div>


	</footer>;
};

export default Footer;
