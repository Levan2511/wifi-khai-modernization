import { Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import khaiLogo from '../../assets/khai-logo.png';
import './Header.scss';


function Header(props) {
	const { lang } = props;
	let cathedraName;
  const navigate = useNavigate();

	switch(lang) {
		case 'en':
			cathedraName = 'Computer Systems and Network Department';
			break;
		case 'ua':
			cathedraName = 'Кафедра комп`ютерних систем і мереж';
			break;
		case 'ru':
			cathedraName = 'Кафедра компьютерных систем и сетей';
			break;
		default:
			cathedraName = 'Computer Systems and Network Department';
	}

	const changeLang = (event) => {
		navigate('/' + event.target.value, { replace: true });
	};


	return (
		<Card>
			<div className='d-flex justify-content-between align-items-center header'>
				<div className="header__image">
					<img src={khaiLogo} alt="khai-logo"/>
				</div>

				<div className='text-uppercase'>{cathedraName} (503)</div>

				<Form.Select defaultValue={lang} onChange={changeLang} className='header__lang'>
					<option value="en">EN</option>
					<option value="ua">UA</option>
					<option value="ru">RU</option>
				</Form.Select>
			</div>
		</Card>
	);
}

export default Header;