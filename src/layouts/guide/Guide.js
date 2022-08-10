import { Accordion, Card } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import Step from "../../components/step/Step";
import GUIDE_CONFIG from "../../configs/instuction";

import './Guide.scss';

function Guide(props) {
	const location = useLocation();
	const { lang } = useParams();
	const guideUrl = location.pathname.replace(/^\/\w{2}\//, '');
	const guide = GUIDE_CONFIG.find(guide => guide.link === guideUrl);

	return (<>
		<Card.Title>
			{
				guide ? <h5 className="guide__title text-primary">{guide.label}</h5> : <h5 className="guide__title text-dark">No guide found</h5>
			}
		</Card.Title>
		
		{ guide ? <Step lang={lang} guide={guide}/> : <h6>Make sure route is correct</h6> }
	</>);
}

export default Guide;