import type { NextPage } from "next";
import type { ReactElement, ReactNode, ComponentType } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
	layout?: ComponentType;
};
