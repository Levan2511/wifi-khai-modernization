const WIN_8_STEPS = [
	{	
		description: {
			'en': 'From the list of found Wi-Fi networks, select wifi.csn.khai.edu',
			'ua': 'Зі списку найденних Wi-Fi сетей необхідно вибрати wifi.csn.khai.edu',
			'ru': 'Из списка найденных Wi-Fi сетей необходимо выбрать wifi.csn.khai.edu',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/12Win8.png',
	},
	{	
		description: {
			'en': 'Enter the Login and password that are registered to you at the University.',
			'ua': 'Введіть логін та пароль, які зареєстровані на вас у університеті.',
			'ru': 'Введите Логин и пароль, которые зарегистрированы на вас в Университете.',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/13Win8.png',
	},
	{	
		description: {
			'en': 'The second way. Open the Network and Sharing Center (right-click on the "Network" icon)',
			'ua': 'Второй способ. Відкрити Центр управління сетями та загальним доступом (правою кнопкою миші на іконці "Сеть")',
			'ru': 'Второй способ. Открыть Центр управления сетями и общим доступом (правой кнопкой мыши на иконку "Сеть")',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/1Win8.png',
	},
	{	
		description: {
			'en': 'Click Create or configure a new connection or network',
			'ua': 'Нажать Создание або настройка нового підключення або мережі',
			'ru': 'Нажать Создание или настройка нового подключения или сети',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/2Win8.png',
	},
	{	
		description: {
			'en': 'Click Create network profile manually',
			'ua': 'Нажать Створити профіль мережі вручну',
			'ru': 'Нажать Создать профиль сети вручную',
		},
	},
	{	
		description: {
			'en': 'Click Next',
			'ua': 'Нажать Далее',
			'ru': 'Нажать Далее',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/3Win8.png',
	},
	{	
		description: {
			'en': 'Enter Network Name - wifi.csn.khai.edu',
			'ua': 'Ввести Імя мережі - wifi.csn.khai.edu',
			'ru': 'Ввести Имя сети - wifi.csn.khai.edu',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'The security type must be set to WPA-Enterprise',
			'ua': 'Тип безпеки повинен бути встановлений WPA-Enterprise',
			'ru': 'Тип безопасности должен быть установлен WPA-Enterprise',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'The encryption type must be TKIP',
			'ua': 'Тип шифрування має бути TKIP',
			'ru': 'Тип шифрования должен быть TKIP',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'Click Next',
			'ua': 'Нажать Далее',
			'ru': 'Нажать Далее',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/4Win8.png',
	},
	{	
		description: {
			'en': 'Click Change connection settings',
			'ua': 'Натиснути Редагувати параметри підключення',
			'ru': 'Нажать Изменить параметры подключения',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/5Win8.png',
	},
	{	
		description: {
			'en': 'Select Security tab',
			'ua': 'Вибрати вкладку Безопасность',
			'ru': 'Выбрать вкладку Безопасность',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'Set the network authentication method: Microsoft: Secure EAP (PEAP)',
			'ua': 'Установити метод перевірки довжини мережі: Microsoft: Захищені EAP (PEAP)',
			'ru': 'Установить метод проверки подлинности сети: Microsoft: Защищенные EAP (PEAP)',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'Click Options',
			'ua': 'Натиснути Параметри',
			'ru': 'Нажать Параметры',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/6Win8.png',
	},
	{	
		description: {
			'en': 'Uncheck Validate server certificate',
			'ua': 'Зняти прапорець Перевіряти сертифікат сервера',
			'ru': 'Снять флажок Проверять сертификат сервера',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'Make sure the Authentication Method is set to Secure Password (EAP-MSCHAPv2)',
			'ua': 'Переконайтеся, що Метод автентифікації встановлено в Захищений пароль (EAP-MSCHAPv2)',
			'ru': 'Убедится что Метод проверки подлинности установлен в Защищенный пароль (EAP-MSCHAPv2)',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'Click Customize',
			'ua': 'Натиснути Налаштувати',
			'ru': 'Нажать Настроить',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/7Win8.png',
	},
	{	
		description: {
			'en': 'Uncheck Use Windows login and password automatically',
			'ua': 'Зняти прапорець Використовувати автоматично ім`я входу, а пароль Windows',
			'ru': 'Снять флажок Использовать автоматически имя входа а пароль Windows',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'Press OK',
			'ua': 'Натиснути OK',
			'ru': 'Нажать ОК',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'Click OK to close the Secure EAP Properties window',
			'ua': 'Натиснути OK, щоб закрити вікно Властивості захищеного EAP',
			'ru': 'Нажать ОК чтобы закрыть окно Свойства защищенного EAP',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/8Win8.png',
	},
	{	
		description: {
			'en': 'Click Advanced Options in the Wireless Network Properties window',
			'ua': 'Натиснути Додаткові параметри у вікні Властивості бездротової мережі',
			'ru': 'Нажать Дополнительные параметры в окне Свойства беспроводной сети',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/9Win8.png',
	},
	{	
		description: {
			'en': 'Select the Specify the authentication mode check box',
			'ua': 'Встановити прапорець Вкажіть режим автентифікації',
			'ru': 'Установить флажок Укажите режим проверки подлинности',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/10Win8.png',
	},
	{	
		description: {
			'en': 'Click OK to close the Advanced Options window',
			'ua': 'Натиснути OK, щоб закрити вікно Додаткові параметри',
			'ru': 'Нажать OК чтобы закрыть окно Дополнительные параметры',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'Click OK to close the Wireless Properties window',
			'ua': 'Натисніть OK, щоб закрити вікно Властивості бездротової мережі',
			'ru': 'Нажать OК чтобы закрыть окно Свойства беспроводной сети',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'Click Close to close the Manual Wireless Network Connection window',
			'ua': 'Натиснути Закрити, щоб закрити вікно Підключення до бездротової мережі вручну',
			'ru': 'Нажать Закрыть чтобы закрыть окно Подключение к беспроводной сети вручную',
		},
		imgUrl: '',
	},
	{	
		description: {
			'en': 'From the list of found Wi-Fi networks, select wifi.csn.khai.edu',
			'ua': 'Зі списку знайдених Wi-Fi мереж необхідно вибрати wifi.csn.khai.edu',
			'ru': 'Из списка найденных Wi-Fi сетей необходимо выбрать wifi.csn.khai.edu',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/12Win8.png',
	},
	{	
		description: {
			'en': 'Enter the Login and password that are registered to you at the University.',
			'ua': 'Введіть Логін та пароль, які зареєстровані на вас в Університеті.',
			'ru': 'Введите Логин и пароль, которые зарегистрированы на вас в Университете.',
		},
		imgUrl: 'https://wifi.csn.khai.edu/RU/Windows_8/13Win8.png',
	},
];

export default WIN_8_STEPS;