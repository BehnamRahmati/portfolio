import styles from "./PrimaryLayout.module.css";

export interface IPrimaryLayout {
	sampleTextProp: string;
	className?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
	sampleTextProp,
	className = "",
}) => {
	return <div className={`${className}`}>{sampleTextProp}</div>;
};

export default PrimaryLayout;
