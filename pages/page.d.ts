import type { NextPage } from "next";
import type { ReactElement, ReactNode, ComponentType } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
	layout?: ComponentType;
};


export interface IHome {
	content: {image: number; title: string; content: string;}[] | null;
	banner:  {first_name: string; last_name: string; subtitle: string;}[] | null;
	information: {title: string; info: {info_item: string;}[]}[] | null;
	works: {name: string; description: string;live_preview: string; github_url: string; thumbnail: number;}[] | null;
	skills: {title: string; content: string;}[] | null;
	mobile_number: string;
	email_address: string;
	home_address: string;
}


export interface IPortfolio {
	acf : IHome
}