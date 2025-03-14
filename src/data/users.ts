import {User} from './types';

export const users: User[] = [
  {
    id: '1',
    fullName: 'Кун Александр Романович',
    name: 'Александр',
    surname: 'Кун',
    patronymic: 'Романович',
    username: 'kun',
    email: 'kun@example.com',
    accountNumber: 'KZ123456789012345678',
    balance: 500000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '1234 5678 9012 3456',
        expiry: '12/26',
        cvv: '123',
        type: 'debit',
        balance: 25000,
      },
      {
        cardNumber: '9876 5432 1098 7654',
        expiry: '08/25',
        cvv: '456',
        type: 'credit',
        balance: 15000,
      },
    ],
    login: 'kun',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '2',
    fullName: 'Петров Петр Петрович',
    name: 'Петр',
    surname: 'Петров',
    patronymic: 'Петрович',
    username: 'petrov',
    email: 'petrov@example.com',
    accountNumber: 'KZ987654321098765432',
    balance: 1500000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '4321 8765 2109 6543',
        expiry: '07/27',
        cvv: '789',
        type: 'debit',
        balance: 120000,
      },
      {
        cardNumber: '5678 1234 8765 4321',
        expiry: '05/26',
        cvv: '234',
        type: 'credit',
        balance: 540000,
      },
    ],
    login: 'petrov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '3',
    fullName: 'Сидоров Сидор Сидорович',
    name: 'Сидор',
    surname: 'Сидоров',
    patronymic: 'Сидорович',
    username: 'sidorov',
    email: 'sidorov@example.com',
    accountNumber: 'KZ192837465091827364',
    balance: 8250000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '3456 2109 8765 1234',
        expiry: '09/28',
        cvv: '567',
        type: 'debit',
        balance: 999999,
      },
      {
        cardNumber: '2109 6543 4321 9876',
        expiry: '03/27',
        cvv: '678',
        type: 'credit',
        balance: 245000,
      },
    ],
    login: 'sidorov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '4',
    fullName: 'Морозов Дмитрий Викторович',
    name: 'Дмитрий',
    surname: 'Морозов',
    patronymic: 'Викторович',
    username: 'morozov',
    email: 'morozov@example.com',
    accountNumber: 'KZ456789012345678901',
    balance: 3700000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '8765 4321 2109 5678',
        expiry: '03/29',
        cvv: '987',
        type: 'debit',
        balance: 900000,
      },
      {
        cardNumber: '3456 7890 1234 5678',
        expiry: '12/26',
        cvv: '432',
        type: 'credit',
        balance: 420000,
      },
    ],
    login: 'morozov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '5',
    fullName: 'Васильев Андрей Олегович',
    name: 'Андрей',
    surname: 'Васильев',
    patronymic: 'Олегович',
    username: 'vasiliev',
    email: 'vasiliev@example.com',
    accountNumber: 'KZ567890123456789012',
    balance: 8300000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '2109 8765 4321 5678',
        expiry: '07/30',
        cvv: '543',
        type: 'debit',
        balance: 1000000,
      },
      {
        cardNumber: '6543 5678 1234 2109',
        expiry: '09/28',
        cvv: '876',
        type: 'credit',
        balance: 350000,
      },
    ],
    login: 'vasiliev',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '6',
    fullName: 'Федоров Алексей Иванович',
    name: 'Алексей',
    surname: 'Федоров',
    patronymic: 'Иванович',
    username: 'fedorov',
    email: 'fedorov@example.com',
    accountNumber: 'KZ678901234567890123',
    balance: 1450000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '4321 8765 2109 6543',
        expiry: '04/27',
        cvv: '219',
        type: 'debit',
        balance: 600000,
      },
      {
        cardNumber: '5678 1234 4321 0987',
        expiry: '06/25',
        cvv: '357',
        type: 'credit',
        balance: 275000,
      },
    ],
    login: 'fedorov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '7',
    fullName: 'Григорьев Николай Сергеевич',
    name: 'Николай',
    surname: 'Григорьев',
    patronymic: 'Сергеевич',
    username: 'grigoriev',
    email: 'grigoriev@example.com',
    accountNumber: 'KZ789012345678901234',
    balance: 3200000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '1234 5678 4321 8765',
        expiry: '10/28',
        cvv: '147',
        type: 'debit',
        balance: 850000,
      },
      {
        cardNumber: '6543 2109 8765 4321',
        expiry: '07/27',
        cvv: '369',
        type: 'credit',
        balance: 300000,
      },
    ],
    login: 'grigoriev',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '8',
    fullName: 'Макаров Виктор Дмитриевич',
    name: 'Виктор',
    surname: 'Макаров',
    patronymic: 'Дмитриевич',
    username: 'makarov',
    email: 'makarov@example.com',
    accountNumber: 'KZ890123456789012345',
    balance: 5900000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '4321 8765 2109 5678',
        expiry: '09/29',
        cvv: '258',
        type: 'debit',
        balance: 700000,
      },
      {
        cardNumber: '3456 7890 1234 5678',
        expiry: '11/26',
        cvv: '753',
        type: 'credit',
        balance: 450000,
      },
    ],
    login: 'makarov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '9',
    fullName: 'Андреев Павел Викторович',
    name: 'Павел',
    surname: 'Андреев',
    patronymic: 'Викторович',
    username: 'andreev',
    email: 'andreev@example.com',
    accountNumber: 'KZ901234567890123456',
    balance: 4100000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '8765 4321 2109 5678',
        expiry: '05/30',
        cvv: '369',
        type: 'debit',
        balance: 500000,
      },
      {
        cardNumber: '6543 5678 1234 2109',
        expiry: '08/28',
        cvv: '951',
        type: 'credit',
        balance: 275000,
      },
    ],
    login: 'andreev',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '10',
    fullName: 'Семенов Алексей Петрович',
    name: 'Алексей',
    surname: 'Семенов',
    patronymic: 'Петрович',
    username: 'semenov',
    email: 'semenov@example.com',
    accountNumber: 'KZ012345678901234567',
    balance: 7300000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '2109 8765 4321 5678',
        expiry: '06/27',
        cvv: '123',
        type: 'debit',
        balance: 920000,
      },
      {
        cardNumber: '5678 1234 4321 0987',
        expiry: '10/25',
        cvv: '456',
        type: 'credit',
        balance: 350000,
      },
    ],
    login: 'semenov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '11',
    fullName: 'Козлов Дмитрий Алексеевич',
    name: 'Дмитрий',
    surname: 'Козлов',
    patronymic: 'Алексеевич',
    username: 'kozlov',
    email: 'kozlov@example.com',
    accountNumber: 'KZ234567890123456789',
    balance: 6800000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '6789 4321 2109 1234',
        expiry: '04/30',
        cvv: '852',
        type: 'debit',
        balance: 760000,
      },
      {
        cardNumber: '7890 1234 5678 9012',
        expiry: '12/27',
        cvv: '753',
        type: 'credit',
        balance: 400000,
      },
    ],
    login: 'kozlov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '12',
    fullName: 'Новиков Артем Сергеевич',
    name: 'Артем',
    surname: 'Новиков',
    patronymic: 'Сергеевич',
    username: 'novikov',
    email: 'novikov@example.com',
    accountNumber: 'KZ345678901234567890',
    balance: 4500000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '5678 1234 4321 0987',
        expiry: '11/27',
        cvv: '987',
        type: 'debit',
        balance: 630000,
      },
      {
        cardNumber: '1234 5678 8765 4321',
        expiry: '03/29',
        cvv: '654',
        type: 'credit',
        balance: 290000,
      },
    ],
    login: 'novikov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '13',
    fullName: 'Фролов Иван Анатольевич',
    name: 'Иван',
    surname: 'Фролов',
    patronymic: 'Анатольевич',
    username: 'frolov',
    email: 'frolov@example.com',
    accountNumber: 'KZ456789012345678901',
    balance: 5200000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '2109 8765 0987 1234',
        expiry: '07/26',
        cvv: '321',
        type: 'debit',
        balance: 820000,
      },
      {
        cardNumber: '4321 0987 5678 2109',
        expiry: '06/28',
        cvv: '147',
        type: 'credit',
        balance: 310000,
      },
    ],
    login: 'frolov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '14',
    fullName: 'Дьяков Алексей Владимирович',
    name: 'Алексей',
    surname: 'Петров',
    patronymic: 'Владимирович',
    username: 'dyakov',
    email: 'dyakov@example.com',
    accountNumber: 'KZ567890123456789012',
    balance: 3100000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '8765 4321 1234 5678',
        expiry: '09/28',
        cvv: '852',
        type: 'debit',
        balance: 710000,
      },
      {
        cardNumber: '2345 6789 4321 0987',
        expiry: '05/27',
        cvv: '369',
        type: 'credit',
        balance: 410000,
      },
    ],
    login: 'dyakov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '15',
    fullName: 'Примерович Дмитрий Олегович',
    name: 'Дмитрий',
    surname: 'Примерович',
    patronymic: 'Олегович',
    username: 'primerov',
    email: 'primerov@example.com',
    accountNumber: 'KZ678901234567890123',
    balance: 6200000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '9876 5432 2109 8765',
        expiry: '12/30',
        cvv: '753',
        type: 'debit',
        balance: 920000,
      },
      {
        cardNumber: '3456 7890 5678 1234',
        expiry: '02/28',
        cvv: '258',
        type: 'credit',
        balance: 380000,
      },
    ],
    login: 'primerov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '16',
    fullName: 'Лазарев Василий Петрович',
    name: 'Василий',
    surname: 'Лазарев',
    patronymic: 'Петрович',
    username: 'lazarev',
    email: 'lazarev@example.com',
    accountNumber: 'KZ789012345678901234',
    balance: 2800000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '5678 2345 7890 1234',
        expiry: '08/29',
        cvv: '159',
        type: 'debit',
        balance: 600000,
      },
      {
        cardNumber: '6789 3456 8901 2345',
        expiry: '04/26',
        cvv: '357',
        type: 'credit',
        balance: 200000,
      },
    ],
    login: 'lazarev',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '17',
    fullName: 'Котов Николай Сергеевич',
    name: 'Николай',
    surname: 'Котов',
    patronymic: 'Сергеевич',
    username: 'kotov',
    email: 'kotov@example.com',
    accountNumber: 'KZ890123456789012345',
    balance: 4500000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '3456 7890 1234 5678',
        expiry: '06/27',
        cvv: '123',
        type: 'debit',
        balance: 780000,
      },
      {
        cardNumber: '1234 5678 3456 7890',
        expiry: '11/29',
        cvv: '987',
        type: 'credit',
        balance: 320000,
      },
    ],
    login: 'kotov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '18',
    fullName: 'Орехов Артём Алексеевич',
    name: 'Артём',
    surname: 'Орехов',
    patronymic: 'Алексеевич',
    username: 'orehov',
    email: 'orehov@example.com',
    accountNumber: 'KZ901234567890123456',
    balance: 7200000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '5678 1234 7890 3456',
        expiry: '07/28',
        cvv: '321',
        type: 'debit',
        balance: 890000,
      },
      {
        cardNumber: '6789 3456 8901 2345',
        expiry: '10/30',
        cvv: '654',
        type: 'credit',
        balance: 250000,
      },
    ],
    login: 'orehov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '19',
    fullName: 'Романов Сергей Владимирович',
    name: 'Сергей',
    surname: 'Романов',
    patronymic: 'Владимирович',
    username: 'romanov',
    email: 'romanov@example.com',
    accountNumber: 'KZ012345678901234567',
    balance: 5300000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '7890 2345 1234 5678',
        expiry: '03/26',
        cvv: '852',
        type: 'debit',
        balance: 480000,
      },
      {
        cardNumber: '2345 6789 4567 8901',
        expiry: '09/27',
        cvv: '369',
        type: 'credit',
        balance: 150000,
      },
    ],
    login: 'romanov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '20',
    fullName: 'Воронов Иван Анатольевич',
    name: 'Иван',
    surname: 'Воронов',
    patronymic: 'Анатольевич',
    username: 'voronov',
    email: 'voronov@example.com',
    accountNumber: 'KZ123456789012345678',
    balance: 6100000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '3456 7890 5678 1234',
        expiry: '02/29',
        cvv: '147',
        type: 'debit',
        balance: 920000,
      },
      {
        cardNumber: '5678 1234 6789 9012',
        expiry: '06/28',
        cvv: '258',
        type: 'credit',
        balance: 330000,
      },
    ],
    login: 'voronov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '21',
    fullName: 'Алексеев Дмитрий Олегович',
    name: 'Дмитрий',
    surname: 'Алексеев',
    patronymic: 'Олегович',
    username: 'alekseev',
    email: 'alekseev@example.com',
    accountNumber: 'KZ234567890123456789',
    balance: 3200000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '6789 1234 5678 9012',
        expiry: '05/26',
        cvv: '789',
        type: 'debit',
        balance: 560000,
      },
      {
        cardNumber: '9012 3456 7890 1234',
        expiry: '12/30',
        cvv: '456',
        type: 'credit',
        balance: 220000,
      },
    ],
    login: 'alekseev',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '22',
    fullName: 'Марков Алексей Викторович',
    name: 'Алексей',
    surname: 'Марков',
    patronymic: 'Викторович',
    username: 'markov',
    email: 'markov@example.com',
    accountNumber: 'KZ345678901234567890',
    balance: 7100000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '1234 5678 9012 3456',
        expiry: '07/29',
        cvv: '321',
        type: 'debit',
        balance: 890000,
      },
      {
        cardNumber: '5678 9012 3456 7890',
        expiry: '09/27',
        cvv: '654',
        type: 'credit',
        balance: 310000,
      },
    ],
    login: 'markov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '23',
    fullName: 'Лукин Михаил Андреевич',
    name: 'Михаил',
    surname: 'Лукин',
    patronymic: 'Андреевич',
    username: 'lykin',
    email: 'lykin@example.com',
    accountNumber: 'KZ456789012345678901',
    balance: 5000000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '2345 6789 0123 4567',
        expiry: '11/28',
        cvv: '852',
        type: 'debit',
        balance: 430000,
      },
      {
        cardNumber: '6789 0123 4567 8901',
        expiry: '03/30',
        cvv: '369',
        type: 'credit',
        balance: 270000,
      },
    ],
    login: 'lykin',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '24',
    fullName: 'Крюков Евгений Павлович',
    name: 'Евгений',
    surname: 'Крюков',
    patronymic: 'Павлович',
    username: 'krykov',
    email: 'krykov@example.com',
    accountNumber: 'KZ567890123456789012',
    balance: 6300000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '7890 1234 5678 9012',
        expiry: '08/26',
        cvv: '147',
        type: 'debit',
        balance: 540000,
      },
      {
        cardNumber: '9012 3456 7890 1234',
        expiry: '06/29',
        cvv: '258',
        type: 'credit',
        balance: 290000,
      },
    ],
    login: 'krykov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '25',
    fullName: 'Тихонов Сергей Дмитриевич',
    name: 'Сергей',
    surname: 'Тихонов',
    patronymic: 'Дмитриевич',
    username: 'tikhonov',
    email: 'tikhonov@example.com',
    accountNumber: 'KZ678901234567890123',
    balance: 8200000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '3456 7890 1234 5678',
        expiry: '04/30',
        cvv: '789',
        type: 'debit',
        balance: 610000,
      },
      {
        cardNumber: '5678 9012 3456 7890',
        expiry: '10/27',
        cvv: '654',
        type: 'credit',
        balance: 380000,
      },
    ],
    login: 'tikhonov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '26',
    fullName: 'Осипов Иван Сергеевич',
    name: 'Иван',
    surname: 'Осипов',
    patronymic: 'Сергеевич',
    username: 'osipov',
    email: 'osipov@example.com',
    accountNumber: 'KZ123456789012345678',
    balance: 8500000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '1234 5678 9012 3456',
        expiry: '11/28',
        cvv: '321',
        type: 'debit',
        balance: 750000,
      },
      {
        cardNumber: '9876 5432 1098 7654',
        expiry: '06/27',
        cvv: '654',
        type: 'credit',
        balance: 470000,
      },
    ],
    login: 'osipov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '27',
    fullName: 'Данилов Андрей Николаевич',
    name: 'Андрей',
    surname: 'Данилов',
    patronymic: 'Николаевич',
    username: 'danilov',
    email: 'danilov@example.com',
    accountNumber: 'KZ234567890123456789',
    balance: 6300000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '2345 6789 0123 4567',
        expiry: '03/30',
        cvv: '987',
        type: 'debit',
        balance: 540000,
      },
      {
        cardNumber: '8765 4321 0987 6543',
        expiry: '08/29',
        cvv: '789',
        type: 'credit',
        balance: 350000,
      },
    ],
    login: 'danilov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '28',
    fullName: 'Лапин Олег Васильевич',
    name: 'Олег',
    surname: 'Лапин',
    patronymic: 'Васильевич',
    username: 'lapin',
    email: 'lapin@example.com',
    accountNumber: 'KZ345678901234567890',
    balance: 7200000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '3456 7890 1234 5678',
        expiry: '07/26',
        cvv: '654',
        type: 'debit',
        balance: 620000,
      },
      {
        cardNumber: '7654 3210 9876 5432',
        expiry: '02/28',
        cvv: '321',
        type: 'credit',
        balance: 390000,
      },
    ],
    login: 'lapin',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '29',
    fullName: 'Орлов Михаил Александрович',
    name: 'Михаил',
    surname: 'Орлов',
    patronymic: 'Александрович',
    username: 'orlov',
    email: 'orlov@example.com',
    accountNumber: 'KZ456789012345678901',
    balance: 9100000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '4567 8901 2345 6789',
        expiry: '09/27',
        cvv: '852',
        type: 'debit',
        balance: 580000,
      },
      {
        cardNumber: '6543 2109 8765 4321',
        expiry: '05/30',
        cvv: '963',
        type: 'credit',
        balance: 480000,
      },
    ],
    login: 'orlov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
  {
    id: '30',
    fullName: 'Рогов Алексей Дмитриевич',
    name: 'Алексей',
    surname: 'Рогов',
    patronymic: 'Дмитриевич',
    username: 'rogov',
    email: 'rogov@example.com',
    accountNumber: 'KZ567890123456789012',
    balance: 7800000,
    currency: 'KZT',
    cards: [
      {
        cardNumber: '5678 9012 3456 7890',
        expiry: '01/29',
        cvv: '741',
        type: 'debit',
        balance: 690000,
      },
      {
        cardNumber: '5432 1098 7654 3210',
        expiry: '11/31',
        cvv: '159',
        type: 'credit',
        balance: 500000,
      },
    ],
    login: 'rogov',
    password: '123456',
    pin: '1111',
    isAuthorized: false,
  },
];
