import styles from "./ContactForm.module.css";

export interface IContactForm {
}

const ContactForm: React.FC<IContactForm> = ({
}) => {
	return <div className="h-full" >
		<form  className="flex flex-col h-full">
			<input type={'text'} name={'fullname'} placeholder={'enter your full name'} id="fullname" className="mb-6 h-10 ltr bg-transparent border border-violet-700 rounded-lg p-5 outline-0"/>
			<input type={'email'} name={'email'} placeholder={'enter your email'} id="email" className="mb-6 h-10 ltr bg-transparent border border-violet-700 rounded-lg p-5 outline-0"/>
			<textarea name={'content'} id="content" placeholder={'what is in your mind?'} className="h-32 ltr bg-transparent border border-violet-700 p-5 rounded-lg outline-0"></textarea>
			<button type={"button"} className="w-full bg-violet-500 p-4 text-lg capitalize text-center mt-24 lg:mt-auto lg:mb-0 rounded-lg transition-all delay-75 ease-in-out transform hover:scale-105">send</button>
		</form>
	</div>;
};

export default ContactForm;
