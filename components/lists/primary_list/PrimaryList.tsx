import styles from "./PrimaryList.module.css";

export interface IPrimaryList {
	title: string;
	count:number;
	list: string[]
}

const PrimaryList: React.FC<IPrimaryList> = ({
	title,
	count,
	list
}) => {
	return <div className={styles.listContainer}>
		<div>
			<span>0{count}</span>
			<h3>{title}</h3>
		</div>

		<ul>
			{
				list.map((item , i) => {
					return(
						<li key={i}>{item}</li>
					)
				})
			}
		</ul>
	</div>;
};

export default PrimaryList;
