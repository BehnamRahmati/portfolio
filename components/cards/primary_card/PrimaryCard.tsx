import styles from "./PrimaryCard.module.css";
import Link from "next/link";
import Image from "next/image";
import {FiGithub} from 'react-icons/fi'

export interface IPrimaryCard {
	title: string;
	description: string;
}

const PrimaryCard: React.FC<IPrimaryCard> = ({
	title,
	description
}) => {
	return <div className={styles.cardContainer}>
		<div className={styles.cardHeading}>
			<div>
				<a className={styles.btnGithub}> <FiGithub className={'text-2xl text-violet-700'} /> </a>
				<Link href={'/'}>
					<a className={styles.btnPreview}> live preview </a>
				</Link>
			</div>

			<h3 className='hidden lg:block'>{title}</h3>
		</div>

		<div className={styles.cardImage}>
			<Image src={'/placeholder-image.png'} blurDataURL={'/placeholder-image.png'}  placeholder={'blur'} alt={'behnam-rahmati-project'} layout={'fill'} className='rounded-3xl' />
		</div>

		<h3 className='flex lg:hidden flex-row items-center mt-2 lg:mt-0'>
			<span className='flex-1 border-b-2 border-b-white ml-2'></span>
			<span>{title}</span>
		</h3>
	</div>;
};

export default PrimaryCard;
