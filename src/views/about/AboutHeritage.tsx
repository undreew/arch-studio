const AboutHeritage = () => {
	return (
		<>
			<section className="mt-15 mb-25">
				<div className="max-container mb-10">
					<div className="border-t-2 border-light-gray w-25" />
				</div>

				<div className="max-container grid grid-cols-1 lg:grid-cols-2">
					<div className="w-full lg:max-w-md">
						<h1 className="heading-md w-full md:max-w-sm">Our Heritage</h1>

						<div className="flex flex-col mt-15 gap-10">
							<p className="line-clamp-3 overflow-hidden body">
								Founded in 2007, we started as a trio of architects. Our
								complimentary skills and relentless attention to detail turned
								Arch into one of the most sought after boutique firms in the
								country.
							</p>

							<p className="body">
								Speciliazing in Urban Design allowed us to focus on creating
								exceptional structures that live in harmony with their
								surroundings. We consider every detail from every surrounding
								element to inform our designs.
							</p>

							<p className="body">
								Our small team of world-class professionals provides input on
								every project.
							</p>
						</div>
					</div>

					<img
						src="/about_heritage.jpg"
						alt="About Heritage"
						className="w-full object-cover hidden lg:block"
					/>
				</div>
			</section>
		</>
	);
};

export default AboutHeritage;
