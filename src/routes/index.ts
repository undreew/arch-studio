import { createBrowserRouter } from "react-router";

import Layout from "../Layout";

import About from "../views/about/About";
import Contact from "../views/contact/Contact";
import Landing from "../views/landing/Landing";
import Portfolio from "../views/portfolio/Portfolio";

const routes = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		children: [
			{
				index: true,
				Component: Landing,
			},
			{
				path: "/portfolio",
				Component: Portfolio,
			},
			{
				path: "/about",
				Component: About,
			},
			{
				path: "/contact",
				Component: Contact,
			},
		],
	},
]);

export default routes;
