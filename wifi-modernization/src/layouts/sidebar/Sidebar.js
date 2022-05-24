import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


function Sidebar(props) {
  const { lang } = props;
  const navigate = useNavigate();

  const onLinkClick = (event) => {
    // navigate(event, { replace: true });
		console.log(event);
  };

	return (
		<Link to={`/${lang}/win8`}>Windows 8</Link>
		// <Nav defaultActiveKey="/home" className="flex-column">
		// 	<Nav.Item eventkey="home" onClick={onLinkClick}>Home</Nav.Item>
		// 	<Nav.Item eventkey="home">
		// 		<Link to={location => ({ ...location, pathname: "/win8" })}>Windows 8</Link>
		// 	</Nav.Item>
		// 	<Nav.Item eventkey="home">
		// 		<Link to={`/${lang}/Windows 7`}>Windows 7</Link>
		// 	</Nav.Item>
		// 	{/* <Nav.Link href='Windows 8' eventKey="link-1">Link</Nav.Link>
		// 	<Nav.Link eventKey="link-2">Link</Nav.Link>
		// 	<Nav.Link eventKey="disabled" disabled>
		// 		Disabled
		// 	</Nav.Link> */}
		// </Nav>
	);
}

export default Sidebar;