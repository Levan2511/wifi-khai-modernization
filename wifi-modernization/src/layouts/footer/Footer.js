import { Card } from "react-bootstrap";
import { LanguageService } from "../../services/LanguageService";

import './Footer.scss';

function Footer(props) {
  const { lang } = props;
  const langService = new LanguageService(lang);
  const year = new Date().getFullYear();

  return (
    <Card.Footer>
      <footer className="d-flex justify-content-between align-items-center">
        <div>&copy; {year + ' ' + langService.getLocalizedText({
        'en': 'Computer Systems and Network Department. All rights reserved.',
        'ua': 'Кафедра комп`ютерних систем і мереж. Всі права захищені.',
        'ru': 'Кафедра компьютерных систем и сетей. Все права защищены.'
      })}</div>
      <div>{langService.getLocalizedText({
        'en': 'Developed by Levan Kurkhuli',
        'ua': 'Розробник Леван Курхулі',
        'ru': 'Разработчик Леван Курхули'
      })}</div>
      </footer>
    </Card.Footer>
  )
}

export default Footer;