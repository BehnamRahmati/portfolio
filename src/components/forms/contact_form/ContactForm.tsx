import styles from "./ContactForm.module.css";
import React from "react";
import useContact from './useContect'
import {FaRegGrinBeamSweat} from "react-icons/fa";

const ContactForm: React.FC = () => {
	const {err , body , postData , setBody , loading} = useContact();

	if(loading) {
		return (
			<div className="h-full" >
				<form  className={styles.form}>
					<input onChange={(e) => setBody({...body , ['your-name'] : e.target.value})} type={'text'} placeholder={'enter your full name'} value={body['your-name']} className={styles.input}/>
					<input onChange={(e) => setBody({...body , ['your-subject'] : e.target.value})} type={'text'} placeholder={'enter your sunject'} value={body['your-subject']} className={styles.input}/>
					<input onChange={(e) => setBody({...body , ['your-email'] : e.target.value})} type={'email'}placeholder={'enter your email'} value={body['your-email']} className={styles.input} />
					<textarea onChange={(e) => setBody({...body , ['your-message'] : e.target.value})} value={body['your-message']} placeholder={'what is in your mind?'} className={styles.textarea} ></textarea>
					<button type={"button"} onClick={() => postData() } className={styles.submitBtn}>fucking loading</button>
				</form>
			</div>
		)
	}
	if(err) {
		console.log(err)
		return <div className={'flex flex-col items-center justify-center h-full w-full'}>
			<FaRegGrinBeamSweat className={'text-9xl'} />
			<h2 className={'text-2xl font-bold mt-5'}>OOPS</h2>
		</div>
	}
	return (
		<div className="h-full" >
			<form  className={styles.form}>
				<input onChange={(e) => setBody({...body , ['your-name'] : e.target.value})} type={'text'} placeholder={'enter your full name'} value={body['your-name']} className={styles.input}/>
				<input onChange={(e) => setBody({...body , ['your-subject'] : e.target.value})} type={'text'} placeholder={'enter your sunject'} value={body['your-subject']} className={styles.input}/>
				<input onChange={(e) => setBody({...body , ['your-email'] : e.target.value})} type={'email'}placeholder={'enter your email'} value={body['your-email']} className={styles.input} />
				<textarea onChange={(e) => setBody({...body , ['your-message'] : e.target.value})} value={body['your-message']} placeholder={'what is in your mind?'} className={styles.textarea} ></textarea>
				<button type={"button"} onClick={() => postData() } className={styles.submitBtn}>send</button>
			</form>
		</div>
	);
};

export default ContactForm;
