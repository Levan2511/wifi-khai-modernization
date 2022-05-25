import { Badge, Card, Container, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import khaiLogo from '../../assets/khai-logo.png';
import { LanguageService } from '../../services/LanguageService';
import './Header.scss';


function Header(props) {
  const { lang } = props;
  const langService = new LanguageService(lang);
  const navigate = useNavigate();
	const location = useLocation();

  const changeLang = (event) => {
    const changedLangUrl = '/' + location.pathname.replace(/^\/\w{2}/, event.target.value);
    navigate(changedLangUrl, { replace: true });
  };


  return (
    <Card>
      <Container className='d-flex justify-content-between align-items-center header'>
        <div className="header__image">
          <a href="https://csn.khai.edu" target="blank">
            <img src={khaiLogo} alt="khai-logo"/>
          </a>
        </div>

        <div className='text-uppercase text-center px-3'>{
          langService.getLocalizedText({
            'en': 'Computer Systems and Network Department',
            'ua': 'Кафедра комп`ютерних систем і мереж',
            'ru': 'Кафедра компьютерных систем и сетей'
          })
        } <Badge>503</Badge></div>

        <Form.Select defaultValue={lang} onChange={changeLang} className='header__lang'>
          <option value="en">EN</option>
          <option value="ua">UA</option>
          <option value="ru">RU</option>
        </Form.Select>
      </Container>
      {/* <div className='d-flex justify-content-between align-items-center header'>
      </div> */}
    </Card>
  );
}

export default Header;