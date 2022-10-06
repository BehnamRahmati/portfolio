import styles from "./PrimaryButton.module.css";
import Link from "next/link";
import {FiArrowUpRight} from "react-icons/fi";

export interface IPrimaryButton {
	content: string;
	url:string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
	content,
	url
}) => {
	return <div className='border border-white rounded-lg p-2 w-fit flex flex-row items-center justify-center transition-all delay-75 ease-in-out transform hover:scale-105'>
		<Link href={url}>
			<a className="bg-violet-500 rounded-lg text-white px-4 pb-2 pt-3 capitalize flex flex-row items-center justify-center">
				<FiArrowUpRight className="text-xl text-white ml-2" />
				{content}
			</a>
		</Link>
	</div>;
};

export default PrimaryButton;
