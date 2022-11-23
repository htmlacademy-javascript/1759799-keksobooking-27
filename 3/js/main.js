// Функция взята из Html Academy
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
// рандомное число с плавающей точкой
function getRandomPositiveFloat (a, b, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

// рандомное целое число
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// рандомное возвращение длины массива
function createRandomLengthArray (arr){
  const maxLength = arr.length - 1;
  const lengthOfArr = getRandomPositiveInteger(1, maxLength);
  const array = [];

  while (array.length < lengthOfArr) {
    const indexOfEl = getRandomPositiveInteger(0, maxLength - 1);
    const el = arr[indexOfEl];
    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}


const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png'
];
// Массивы для оффера
const TITLE = [
  'лучший номер',
  'комфорт',
  'удобство',
  'джакузи в номере',
  'удобная кровать',
  'красивый вид',
  'семейный'];

const LOCATION = {
  lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
  lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
};
const PRICE = getRandomPositiveInteger(3000, 20000);
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ROOMS = getRandomPositiveInteger(1, 10);
const GUEST = getRandomPositiveInteger(1, 7);
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['красивый', 'удобный', 'уютный','большой', 'светлый'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const createAuthor = () => ({avatar: AVATAR[getRandomPositiveInteger(0, AVATAR.length - 1)]});

const createOffer = () => ({
  title: TITLE[getRandomPositiveInteger(0, TITLE.length - 1)],

  address: `ШИРОТА ${LOCATION.lat} ДОЛГОТА ${LOCATION.lng}`,

  price: PRICE,

  type: TYPE[getRandomPositiveInteger(0, TYPE.length - 1)],

  rooms: ROOMS,

  guests: GUEST,

  checkin: CHECKIN[getRandomPositiveInteger(0, CHECKIN.length - 1)],

  checkout: CHECKOUT[getRandomPositiveInteger(0, CHECKOUT.length - 1)],

  features: createRandomLengthArray(FEATURES),

  description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],

  photo: createRandomLengthArray(PHOTOS)});

const author = Array.from({length: 10}, createAuthor );
const offer = Array.from({length: 10}, createOffer);
// eslint-disable-next-line no-console
console.log(author);
// eslint-disable-next-line no-console
console.log(offer);

