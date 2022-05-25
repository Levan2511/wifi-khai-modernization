import { Offcanvas } from "bootstrap";
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import GUIDE_CONFIG from "../../configs/instuction";
import { LanguageService } from "../../services/LanguageService";

import './Menu.scss'


function Menu(props) {
  const { lang } = props;
	const langService = new LanguageService(lang);
	// const menuItems = [
	// 	{ label: 'Windows 8', link: `/${lang}/win8` },
	// 	{ label: 'Windows Vista/7', link: `/${lang}/win7` },
	// 	{ label: 'Windows XP', link: `/${lang}/win_xp` },
	// 	{ label: 'Linux', link: `/${lang}/linux` },
	// 	{ label: 'Mac OS X', link: `/${lang}/mac_os` },
	// 	{ label: 'Amazon Kindle', link: `/${lang}/amaz_kindle` },
	// 	{ label: 'Android', link: `/${lang}/android` },
	// 	{ label: 'Blackberry', link: `/${lang}/blackberry` },
	// 	{ label: 'iPhone', link: `/${lang}/iphone` },
	// 	{ label: 'Symbian OS', link: `/${lang}/symbian_os` },
	// 	{ label: 'Windows Mobile', link: `/${lang}/win_mobile` },
	// 	{ label: 'Windows Phone', link: `/${lang}/win_phone` },
	// ];

	let isOpen = true;
	
  const [show, setShow] = useState(false);
	const closeSidebar = () => {isOpen = !isOpen};

	return (
		<>
			<Navbar key="menu" bg="light" expand={false} className="mb-3">
				<Container>
					<Navbar.Text href="#">{
								langService.getLocalizedText({
									'en': 'Wireless communication services of the department "Computer systems and networks"',
									'ua': 'Послуги бездротового зв`язку кафедри "Комп`ютерні системи та мережі"',
									'ru': 'Услуги беспроводной связи кафедры "Компьютерные системы и сети"'
								})
							}</Navbar.Text>
							<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-menu`}/>
							<Navbar.Offcanvas
								id={`offcanvasNavbar-expand-menu`}
								aria-labelledby={`offcanvasNavbarLabel-expand-menu`}
								placement="end"
							>
								<OffcanvasHeader closeButton title="Menu">
									<OffcanvasTitle id={`offcanvasNavbarLabel-expand-menu}`}>{
										langService.getLocalizedText({
											'en': 'Device setup',
											'ua': 'Налаштування пристроїв',
											'ru': 'Настройка устройств'
										})}
									</OffcanvasTitle>
								</OffcanvasHeader>
								<OffcanvasBody>
									<Nav className="justify-content-end flex-grow-1 pe-3">{
										GUIDE_CONFIG.map(item => <React.Fragment key={item.label}>
											<Navbar.Toggle className="text-left menu__link-btn">
												<Link onClick={closeSidebar} className="menu__link" to={`/${lang}/${item.link}`}>{item.label}</Link>
											</Navbar.Toggle>
											<NavDropdown.Divider/>
										</React.Fragment>)
									}</Nav>
								</OffcanvasBody>
							</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default Menu;