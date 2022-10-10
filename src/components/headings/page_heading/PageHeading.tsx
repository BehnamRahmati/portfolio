import styles from "./PageHeading.module.css";
import React, {useEffect, useRef} from "react";

export interface IPageHeading {
	title: string;
	subtitle: string;
	shortTitle: string;
}

const PageHeading: React.FC<IPageHeading> = ({
	title,
	shortTitle,
	subtitle,
}) => {

	return <div className={styles.titleContainer}>
		<div className='flex flex-col w-fit'>
			<h2>
				<span className={styles.titleShadow} >{shortTitle}</span>
				<span className='relative z-10 ltr'>{title}</span>
			</h2>
			<div className={styles.subtitle}>
				<p className='ltr'>{subtitle}</p>
				<div></div>
			</div>
		</div>
	</div>;
};

export default PageHeading;
