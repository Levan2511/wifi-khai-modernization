import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import InfoBlock from "../components/info-block/InfoBlock";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Menu from "./menu/Menu";


function Layout() {
	const { lang } = useParams();

	return (
		<div className="layout">
			<Header lang={lang}/>
			{/* <InfoBlock lang={lang}/> */}
			<Menu lang={lang}/>
			<Footer lang={lang}/>
		</div>
	)
}

export default Layout;