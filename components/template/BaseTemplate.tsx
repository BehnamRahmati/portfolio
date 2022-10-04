import styles from "./baseTemplate.module.css";

export interface IBaseTemplate {
	sampleTextProp: string;
	className?: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({
	sampleTextProp,
	className = "",
}) => {
	return <div className={`${className}`}>{sampleTextProp}</div>;
};

export default BaseTemplate;
