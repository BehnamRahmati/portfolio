import {IPortfolio} from "@/pages/page";

//external import
import axios from "axios";


export async function fetchHome() {
    try {
        const { data } : {data: IPortfolio[] } =  await axios(process.env.BASE_URL! , {params : {search : 'home'}});
        const refinedData = data.map( (response)  => {
            const {banner , skills , works, information} = response.acf
            return {
                banner,
                skills,
                works,
                information
            }
        })
        return refinedData[0] ;
    }
    catch (err) {
        console.log(`fetchData function err from home` , err  );
        return [];
    }
}