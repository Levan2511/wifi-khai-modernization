import { Badge, Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import khaiLogo from '../../assets/khai-logo.png';
import { LanguageService } from '../../services/LanguageService';
import './Header.scss';


function Header(props) {
  const { lang } = props;
  const langService = new LanguageService(lang);
  const navigate = useNavigate();

  const changeLang = (event) => {
    navigate('/' + event.target.value, { replace: true });
  };


  return (
    <Card>
      <Container className='d-flex justify-content-between align-items-center header'>
        <div className="header__image">
          <img src={khaiLogo} alt="khai-logo"/>
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