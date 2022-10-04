import PrimaryLayout from "@/components/layouts/primary_layout/PrimaryLayout";
import { PrimaryLayoutMockProps } from "@/components/layouts/primary_layout/PrimaryLayout.mocks";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
	return <div>home</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<PrimaryLayout {...PrimaryLayoutMockProps.base}>{page}</PrimaryLayout>
	);
};

export default Home;
