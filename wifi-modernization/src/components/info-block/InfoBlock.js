// import { Dropdown } from "bootstrap";
import { Card, DropdownButton, Dropdown } from "react-bootstrap";
import { LanguageService } from "../../services/LanguageService";


function InfoBlock(props) {
	const { lang } = props;
	const langService = new LanguageService(lang);

	return (
		<Card text='muted' className='info-block'>{
			langService.getLocalizedText({
				'en': 'Wireless communication services of the department "Computer systems and networks"',
				'ua': 'Послуги бездротового зв`язку кафедри "Комп`ютерні системи та мережі"',
				'ru': 'Услуги беспроводной связи кафедры "Компьютерные системы и сети"'
			})
		}
		</Card>
	)
}

export default InfoBlock;