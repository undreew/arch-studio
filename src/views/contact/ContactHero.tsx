const ContactHero = () => {
	return (
		<section className="mb-25 mt-10 relative">
			<div className="max-container relative grid grid-cols-1 lg:grid-cols-2">
				<img
					src="/contact_hero.png"
					alt="Contact Hero Image"
					className="w-full object-cover -z-20 hidden md:block lg:block"
				/>

				<div className="hidden md:block">
					<div className="absolute right-0 top-57 lg:top-12 xl:top-40">
						<h1 className="heading-xl z-10 text-light-gray-2">Contact</h1>
					</div>

					<div className=" bg-white -z-15 absolute -bottom-1 -right-1 pb-0 md:pl-35 lg:pl-45 xl:pl-80 md:pt-42 lg:pt-40 xl:pt-50">
						<div className="max-w-md mx-auto">
							<h2 className="heading-md">Tell us about your project</h2>
							<p className="body mt-15">
								We'd love to hear more about your project. Please, leave a
								message below or give us a call. We have two offices, one in
								Texas and one in Tennessee. If you find yourself nearby, come
								say hello!
							</p>
						</div>
					</div>
				</div>
			</div>

			<img
				src="/contact_hero.png"
				alt="Contact Hero Image"
				className="w-full h-[400px] object-cover object-[0%_5%] pointer-events-none block md:hidden"
			/>

			<div className="bg-white absolute bottom-20 left-0 w-9/10 h-1/2 z-10 block md:hidden" />

			<div className="mt-10 relative z-20">
				<div className="max-w-sm sm:max-w-md mx-auto block md:hidden">
					<h2 className="heading-md">Tell us about your project</h2>
					<p className="body mt-4">
						We'd love to hear more about your project. Please, leave a message
						below or give us a call. We have two offices, one in Texas and one
						in Tennessee. If you find yourself nearby, come say hello!
					</p>
				</div>
			</div>
		</section>
	);
};

export default ContactHero;
