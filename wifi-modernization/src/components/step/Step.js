import React from "react";
import { Accordion, Card, Container, Image, Row } from "react-bootstrap";
import { LanguageService } from "../../services/LanguageService";
import './Step.scss';

function Step(props) {
	const { lang } = props;
	const { guide } = props;
	const langService = new LanguageService(lang);

	return (<>
		<Container>
			<Accordion alwaysOpen={true}>
					{guide?.steps?.map((step, i) => {
						if (step.imgUrl) {
							return (<React.Fragment key={i}>
								<Accordion.Item eventKey={i}>
									<Accordion.Header as="div">{i + 1 + '. ' + langService.getLocalizedText(step.description)}</Accordion.Header>
									<Accordion.Body>
										<Row>
											<Image className="step__image" rounded={true} src={step.imgUrl}/>
										</Row>
									</Accordion.Body>
								</Accordion.Item>
							</React.Fragment>)
						}
						return (<React.Fragment key={i}>
							<Card>
								<Card.Body>{i + 1 + '. ' + langService.getLocalizedText(step.description)}</Card.Body>
							</Card>
						</React.Fragment>)
					})}
			</Accordion>
		</Container>
	</>);
}

export default Step;