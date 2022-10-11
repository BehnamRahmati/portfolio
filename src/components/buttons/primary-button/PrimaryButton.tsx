import styles from "./PrimaryButton.module.css";
import Link from "next/link";
import React from "react";

//external
import {FiArrowUpRight} from "react-icons/fi";

export interface IPrimaryButton {
	content: string;
	url:string;
	secondary? : boolean;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
	content,
	url,
	secondary = false
}) => {
	return (
		<div className={styles.outer}>
			<Link href={url}>
				<a className={secondary ? styles.secondary_inner : styles.inner}>
					<FiArrowUpRight />
					{content}
				</a>
			</Link>
		</div>
	);
};

export default PrimaryButton;
