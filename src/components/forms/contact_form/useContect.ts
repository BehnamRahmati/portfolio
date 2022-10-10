import {useEffect, useState} from "react";
import axios from "axios";


const useContact = () => {
    const [body, setBody] = useState({ 'your-name': '' , "your-email": '' , "your-subject": '',"your-message": '' });
    const [err , setErr] = useState(null);
    const [loading , setloading] = useState(false);
    const postData = async () => {
        console.log(body)
        setloading(true)
        try {
            const {data} = await axios.post('https://behnam-rahmati-samples.ir/wp-json/contact-form-7/v1/contact-forms/196/feedback' , body)
            setBody(data)
            setloading(false)
        }
        catch(error: any) {
            setErr(error);
            setloading(false)
        }
    }


    return {err , body , postData , setBody ,loading }

}


export default useContact;