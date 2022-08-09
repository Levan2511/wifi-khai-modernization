import { Outlet, useParams } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Menu from "./menu/Menu";

import './Layout.scss';


function Layout() {
	const { lang } = useParams();

	return (
		<div className="layout">
			<Header lang={lang}/>
			<Menu lang={lang}/>
			<Outlet/>
			<Footer lang={lang}/>
		</div>
	)
}

export default Layout;