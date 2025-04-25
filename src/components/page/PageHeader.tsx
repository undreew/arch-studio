import { NavLink } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";

const navItems = [
	{
		label: "Portfolio",
		link: "/portfolio",
	},
	{
		label: "About Us",
		link: "/about",
	},
	{
		label: "Contact",
		link: "/contact",
	},
];

const PageHeader = () => {
	return (
		<header>
			<nav className="max-container flex justify-between items-center py-5">
				<a href="/">
					<img
						src="/Arch 2.svg"
						alt="Arch Logo"
						className="w-1/2 sm:w-full h-1/2 sm:h-full"
					/>
				</a>

				<ul className="hidden sm:flex flex-1 items-center gap-10 ml-10 md:ml-20">
					{navItems.map((item, index) => {
						const { label, link } = item;
						return (
							<li key={index} className="body">
								<NavLink
									to={link}
									className={({ isActive }) =>
										`${isActive && "text-dark-blue font-bold after:content-[''] after:block after:w-6 after:h-[2px] after:bg-black after:mx-auto"}`
									}
								>
									{label}
								</NavLink>
							</li>
						);
					})}
				</ul>

				<div className="sm:hidden text-4xl">
					<RxHamburgerMenu />
				</div>
			</nav>
		</header>
	);
};

export default PageHeader;
