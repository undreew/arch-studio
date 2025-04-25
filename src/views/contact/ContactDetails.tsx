import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

interface ContactOfficeProps {
	mail: string;
	title: string;
	phone: string;
	address: string;
}

const ContactOffice: React.FC<ContactOfficeProps> = (props) => {
	const { mail, title, phone, address } = props;
	return (
		<div className="h-full lg:h-50 flex flex-row lg:flex-col max-lg:items-center justify-between">
			<div>
				<h2 className="body font-bold">{title}</h2>

				<div className="mt-5">
					<p className="body">Mail : {mail}</p>
					<p className="body">Address : {address}</p>
					<p className="body">Phone : {phone}</p>
				</div>
			</div>

			<Link
				to="/map"
				className="flex items-center gap-2 hover:underline underline-offset-2"
			>
				View on Map <FiArrowRight />
			</Link>
		</div>
	);
};

const ContactDetails = () => {
	return (
		<section className="mt-15 mb-25">
			<div className="max-container mb-10">
				<div className="border-t-2 border-light-gray w-25" />
			</div>

			<div className="max-container">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					<div className="w-full md:max-w-md">
						<h1 className="heading-md">Contact Details</h1>
					</div>

					<ContactOffice
						title="Main Office"
						phone="123-456-3451"
						mail="archone@mail.com"
						address="1892 Chenoweth Drive TN"
					/>

					<ContactOffice
						title="Office II"
						phone="832-123-4321"
						mail="archtwo@mail.com"
						address="3399 Wines Lane TX"
					/>
				</div>
			</div>
		</section>
	);
};

export default ContactDetails;
