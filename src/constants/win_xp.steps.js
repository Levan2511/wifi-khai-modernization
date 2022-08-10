const WIN_XP_STEPS = [
  {	
    description: {
      'en': 'From the Start menu select Control Panel',
      'ua': 'З меню Пуск вибрати Панель керування',
      'ru': 'Из меню Пуск выбрать Панель управления',
    },
    imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_XP/1WinXp.png',
  },
  {	
    description: {
      'en': 'Select Network and Internet Connections',
      'ua': 'Вибрати Мережа та підключення до інтернету',
      'ru': 'Выбрать Сеть и подключения к интернету',
    },
    imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_XP/2WinXp.png',
  },
  {	
    description: {
      'en': 'Select Wireless Network Connection',
      'ua': 'Вибрати Бездротове з\'єднання з мережею',
      'ru': 'Выбрать Беспроводное сетевое соединение',
    },
    imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_XP/3WinXp.png',
  },
  {	
    description: {
      'en': 'Right click on Wireless Network Connection and click Properties',
      'ua': 'Правою кнопкою на Бездротове з\'єднання та натиснути Властивості',
      'ru': 'Правой кнопкой на Беспроводное сетевое соединение и нажать Свойства',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'On the Network tab, select Internet Protocol (TCP/IP)',
      'ua': 'На вкладці Мережа виберіть Протокол Інтернету (TCP/IP)',
      'ru': 'На вкладке Сеть выбрать Протокол Интернета (TCP/IP)',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'Click the Properties button',
      'ua': 'Натиснути кнопку Властивості',
      'ru': 'Нажать кнопку Свойства',
    },
    imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_XP/4WinXp.png',
  },
  {	
    description: {
      'en': 'Select Obtain an IP address automatically',
      'ua': 'Вибрати Отримати IP-адресу автоматично',
      'ru': 'Выбрать Получить IP-адрес автоматически',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'Select Obtain DNS server address automatically',
      'ua': 'Вибрати Отримати адресу DNS сервера автоматично',
      'ru': 'Выбрать Получить адрес DNS сервера автоматически',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'Click OK to close the Internet Protocol (TCP/IP) window',
      'ua': 'Натисніть OK, щоб закрити вікно Протокол Інтернету (TCP/IP)',
      'ru': 'Нажать OК, чтобы закрыть окно Протокол Интернета (TCP/IP)',
    },
    imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_XP/5WinXp.png',
  },
  {	
    description: {
      'en': 'Select the Wireless tab',
      'ua': 'Вибрати вкладку Бездротові з\'єднання',
      'ru': 'Выбрать вкладку Беспроводные соеденения',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'Click the Add...',
      'ua': 'Натиснути кнопку Додати...',
      'ru': 'Нажать кнопку Добавить...',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'Enter wifi.csn.khai.edu in the Network Name (SSID) field',
      'ua': 'Введіть wifi.csn.khai.edu у поле Мережеве ім\'я (SSID)',
      'ru': 'Ввести wifi.csn.khai.edu в поле Сетевое имя (SSID)',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': '(On the Association tab) Set Security Type to WPA',
      'ua': '(На вкладці Асоціація) Установити Тип безпеки у WPA',
      'ru': '(На вкладке Ассоциация) Установить Тип безопасности в WPA',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'Set Encryption Type to TKIP',
      'ua': 'Установити Тип шифрування в TKIP',
      'ru': 'Установить Тип шифрования в TKIP',
    },
    imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_XP/7WinXp.png',
  },
  {	
    description: {
      'en': '(On the Authentication tab) Set the EAP Type to Protected EAP (PEAP)',
      'ua': '(На вкладці Аутентифікація) Встановити тип EAP у Protected EAP (PEAP)',
      'ru': '(На вкладке Аутентификация) Установить тип EAP в Protected EAP (PEAP)',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'Click Properties',
      'ua': 'Натиснути Властивості',
      'ru': 'Нажать Свойства',
    },
    imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_XP/8WinXp.png',
  },
  {	
    description: {
      'en': 'Make sure the checkbox Verify server certificate is not checked',
      'ua': 'Переконайтеся, що прапорець Перевірити сертифікат сервера Не встановлено',
      'ru': 'Убедится, что флажок Проверять сертификат сервера Не установлен',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'Set Authentication Method to Password Protected (EAP-MSCHAPv2)',
      'ua': 'Встановити Метод автентифікації в Захищений пароль (EAP-MSCHAPv2)',
      'ru': 'Установить Метод проверки подлинности в Защищенный пароль (EAP-MSCHAPv2)',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'Click Customize...',
      'ua': 'Натиснути Налаштувати...',
      'ru': 'Нажать Настроить...',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'Make sure that the Use automatically Windows login and password check box is not checked.',
      'ua': 'Переконайтеся, що прапорець Використовувати автоматично ім\'я входу та пароль Windows Не встановлено',
      'ru': 'Убедится, что флажок Использовать автоматически имя входа и пароль Windows Не установлен',
    },
    imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_XP/9WinXp.png',
  },
  {	
    description: {
      'en': 'Press OK 4 times',
      'ua': 'Натиснути OK 4 рази',
      'ru': 'Нажать OК 4 раза',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'Click on the pop-up notification to open a window for entering credentials:',
      'ua': 'Натиснути на спливаючі повідомлення, щоб відкрити вікно для введення облікових даних:',
      'ru': 'Нажать на всплывающие уведомление чтобы открыть окно для ввода учетных данных:',
    },
    imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_XP/11WinXp.png',
  },
  {	
    description: {
      'en': 'Enter the Username and password that are registered to you at the University.',
      'ua': 'Введіть Ім\'я користувача та пароль, які зареєстровані на вас в Університеті.',
      'ru': 'Введите Имя пользователя и пароль, которые зарегистрированы на вас в Университете.',
    },
    imgUrl: '',
  },
  {	
    description: {
      'en': 'The Domain field must be left blank.',
      'ua': 'Поле Домен має залишитися порожнім.',
      'ru': 'Поле Домен должно остатся пустым.',
    },
    imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_XP/12WinXp.png',
  },
];

export default WIN_XP_STEPS;