import styles from "./PrimaryLayout.module.css";
import React, {ReactNode} from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

export interface IPrimaryLayout {
	children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
	children,
}) => {
	return <>
		<Head>
			<title> بهنام رحمتی </title>
			<meta name="description" content="است نسحه اول وب سایت پورتفولیو بهنام رحمتی فرانت اند دولوپر ری اکت است." />
		</Head>
		<Header />
		<main className='flex-1'>{children}</main>
		<Footer />
	</>;
};

export default PrimaryLayout;
