import styles from "./SecondaryCard.module.css";

export interface ISecondaryCard {
	title: string;
	description: string;
	count: number;
}

const SecondaryCard: React.FC<ISecondaryCard> = ({
	count,
	title,
	description,
}) => {
	return <div className={styles.secondaryCard}>

		<div>
			<p>
				<span>0{count}</span>
				<span className="relative z-10">0{count}</span>
			</p>
		</div>
		<div className="border-b border-b-white">
			<h3>{title}</h3>
			<p>{description}</p>
		</div>

	</div>;
};

export default SecondaryCard;
