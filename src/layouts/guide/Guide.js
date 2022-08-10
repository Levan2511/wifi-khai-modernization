import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Step from "../../components/step/Step";
import GUIDE_CONFIG from "../../configs/instuction";

import './Guide.scss';

function Guide() {
	const { lang, guide: guideKey } = useParams();
	const guide = GUIDE_CONFIG.find(guide => guide.link === guideKey);

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