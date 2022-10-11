import styles from "./PrimaryLayout.module.css";
import React, {ReactNode} from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export interface IPrimaryLayout {
	children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
	children,
}) => {
	return <>
		<Header />
		<main className='flex-1'>{children}</main>
		<Footer />
	</>;
};

export default PrimaryLayout;
