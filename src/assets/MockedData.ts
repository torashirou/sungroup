import formentor from '../assets/img/formentor.png'
import formentorvz from '../assets/img/formentorvz.png'
import ateca from '../assets/img/ateca.png'
import born from '../assets/img/born.png'
import leon from '../assets/img/leon.png'
import sportstourer from '../assets/img/sportstourer.png'

const mockedData = [{
    name: 'Cupra Formentor',
    img: formentor,
    description: 'Maksymalna prędkość: 204 KM/H Moc silnika: 150 KM',
    leasing: 'Dostępny w leasingu z 0% opłaty własnej',
    installment: '1439 zł',
    brutto: '127 800 zł'
  },
  {
    name: 'Cupra Formentor VZ',
    img: formentorvz,
    description: 'Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM',
    leasing: 'Dostępny w leasingu z 0% opłaty własnej',
    installment: '1553 zł',
    brutto: '152 400 zł'
  },
  {
    name: 'CUPRA Ateca',
    img: ateca,
    description: 'Maksymalna prędkość: 247 KM/H Moc silnika: 300 KM',
    leasing: 'Dostępny w leasingu z 0% opłaty własnej',
    installment: '2334 zł',
    brutto: '220 700 zł'
  },
  {
    name: 'Nowa CUPRA Born',
    img: born,
    description: 'Akumulator 58 kWh moc do 204 KM²',
    leasing: 'Dostępny w leasingu z 0% opłaty własnej',
    installment: '1943 zł',
    brutto: '179 600 zł'
  },
  {
    name: 'Leon',
    img: leon,
    description: 'Maksymalna prędkość: 245 KM/H Moc silnika: 300 KM',
    leasing: 'Dostępny w leasingu z 0% opłaty własnej',
    installment: '1553 zł',
    brutto: '152 400 zł'
  },
  {
    name: 'Leon Sportstourer',
    img: sportstourer,
    description: 'Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM',
    leasing: 'Dostępny w leasingu z 0% opłaty własnej',
    installment: '1601 zł',
    brutto: '156 200 zł'
  }
];

export default mockedData;

export const mockedFilteredData = [{
  name: 'Cupra Formentor',
  img: formentor,
},
{
  name: 'CUPRA Ateca',
  img: ateca,
},
{
  name: 'Nowa CUPRA Born',
  img: born,
},
{
  name: 'Leon',
  img: leon,
},
{
  name: 'Leon Sportstourer',
  img: sportstourer,
}];