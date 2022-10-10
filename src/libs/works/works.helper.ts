import {IPortfolio} from "@/pages/page";
import axios from "axios";


export async function fetchWorks() {
    try {
        const { data: worksRes } : {data: IPortfolio[] } =  await axios(process.env.BASE_URL! , {params : {search : 'home'}});
        const worksArr = worksRes.map( (response)  => {
            return {works:response.acf.works}
        })

        const { data:contactRes } : {data: IPortfolio[] } =  await axios(process.env.BASE_URL! , {params : {search : 'contact'}});
        const contact = contactRes.map( (response)  => {
            const {mobile_number , email_address , home_address} = response.acf
            return {
                mobile_number , email_address , home_address
            }
        })

        return {
            contact : contact[0],
            works : worksArr
        }
    }
    catch (err) {
        console.log(`fetchWorks function err from works` , err  );
        return [];
    }
}