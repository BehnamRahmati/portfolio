import styles from "./SectionTitle.module.css";
import {useEffect, useRef} from "react";

export interface ISectionTitle {
	title: string;
	subtitle: string;
	shortTitle: string;
}

const SectionTitle: React.FC<ISectionTitle> = ({
	title,
	shortTitle,
	subtitle,
}) => {

	return <div className={styles.titleContainer}>
		<h2>
			<span className={styles.titleShadow} >{shortTitle}</span>
			<span className='relative z-10'>{title}</span>
		</h2>
		<div className={styles.subtitle}>
			<p className='ltr'>{subtitle}</p>
			<div></div>
		</div>
	</div>;
};

export default SectionTitle;
