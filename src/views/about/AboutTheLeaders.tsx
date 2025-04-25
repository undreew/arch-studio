import { LEADERS } from "../../contants/leaders";

type Leader = {
	id: number;
	name: string;
	role: string;
};

const AboutTheLeaders = () => {
	return (
		<section className="mt-25 mb-40">
			<div className="max-container flex flex-col lg:flex-row">
				<div className="flex-1/3">
					<div className=" max-w-xs">
						<h1 className="heading-md ">The Leaders</h1>
					</div>
				</div>

				<div className="flex-2/3 mt-15 lg:mt-0">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 gap-y-15">
						{LEADERS.map((leader: Leader) => {
							const { id, name, role } = leader;
							return (
								<div key={id} className="">
									<img src={`leader_${id}.png`} alt="" className="w-full" />

									<div className="mt-5">
										<h2 className="heading-sm">{name}</h2>
										<p className="body">{role}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutTheLeaders;
