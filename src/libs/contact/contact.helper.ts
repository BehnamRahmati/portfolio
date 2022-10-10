import {IPortfolio} from "@/pages/page";
import axios from "axios";


export async function fetchContact() {
    try {
        const { data } : {data: IPortfolio[] } =  await axios(process.env.BASE_URL! , {params : {search : 'contact'}});
        const refinedData = data.map( (response)  => {
            const {mobile_number , email_address , home_address} = response.acf
            return {
                mobile_number , email_address , home_address
            }
        })
        return refinedData[0];
    }
    catch (err) {
        console.log(`fetchContact function err from contact` , err  );
        return [];
    }
}