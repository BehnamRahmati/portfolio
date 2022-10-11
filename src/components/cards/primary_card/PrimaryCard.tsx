import styles from "./PrimaryCard.module.css";
import Link from "next/link";
import Image from "next/image";
import {FiGithub} from 'react-icons/fi'
import React, {CSSProperties, useEffect, useState} from "react";
import axios from "axios";
import {PropagateLoader} from "react-spinners";

export interface IPrimaryCard {
	name: string;
	description: string;
	live_preview: string;
	github_url: string;
	thumbnail: number;
}

const PrimaryCard: React.FC<IPrimaryCard> = ({
	name,
	description,
	live_preview,
	github_url,
	thumbnail
}) => {

	const [thumbnailUrl , setThumbnailUrl] = useState('')

	const override: CSSProperties = {
		display: "block",
		margin: "0 auto",
		borderColor: "red",
	};

	useEffect(() => {

		(async() => {
			const {data} = await axios(`https://behnam-rahmati-samples.ir/wp-json/wp/v2/media/${thumbnail}` );
			setThumbnailUrl(data.media_details.sizes.medium_large.source_url);
		})();

	} , [])

	const myLoader = ({ src, width, quality } : {src : string; width : number; quality? : number}) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}


	return <div className={styles.cardContainer}>
		<div className={styles.cardHeading}>
			<div>
				{github_url === '' || !github_url ? '' :<a href={github_url} target={'_blank'} rel={'noreferrer'} className={styles.btnGithub}> <FiGithub className={'text-2xl text-violet-700'} /> </a>}
				<Link href={live_preview}>
					<a className={styles.btnPreview}> live preview </a>
				</Link>
			</div>

			<h3 className='hidden lg:block lg:text-xl capitalize'>{name}</h3>
		</div>

		<div className={styles.cardImage}>
			{thumbnailUrl ? <Image loader={() => myLoader({ src: thumbnailUrl ,width : 400 })} src={thumbnailUrl} priority={true} alt={'behnam-rahmati-project'} layout={'fill'} className='rounded-3xl' /> : <PropagateLoader color="rgb(124 58 237)" cssOverride={override} />}
		</div>

		<h3 className='flex lg:hidden flex-row items-center mt-2 lg:mt-0'>
			<span className='flex-1 border-b-2 border-b-white ml-2'></span>
			<span>{name}</span>
		</h3>
	</div>;
};




export default PrimaryCard;
