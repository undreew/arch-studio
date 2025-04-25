import { Input } from "../../components/input";
import { Button } from "../../components/button";

const ContactForm = () => {
	return (
		<div>
			<form action="">
				<div>
					<Input name="name" placeholder="Name" />
					<Input name="email" type="email" placeholder="Email" />
					<Input name="email" placeholder="Message" />
				</div>

				<div className="flex justify-end">
					<Button className="py-5" iconRight />
				</div>
			</form>
		</div>
	);
};

const ContactWithUs = () => {
	return (
		<section className="my-30">
			<div className="max-container flex flex-col gap-10 lg:flex-row">
				<div className="flex-1/3">
					<div className="sm:max-w-xs md:max-w-full lg:max-w-sm">
						<h1 className="heading-md">Connect with us</h1>
					</div>
				</div>

				<div className="flex-2/3">
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactWithUs;
