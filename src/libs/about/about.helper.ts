import {IPortfolio} from "@/pages/page";
import axios from "axios";


export async function fetchAbout() {
    try {
        const { data } : {data: IPortfolio[] } =  await axios(process.env.BASE_URL! , {params : {search : 'about'}});
        const refinedData = data.map( (response)  => {
            const {content} = response.acf
            return {content}
        })
        return refinedData[0];
    }
    catch (err) {
        console.log(`fetchAbout function err from about` , err  );
        return [];
    }
}