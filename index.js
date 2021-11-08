// 6.1
let people = [
    {
        id: 1,
        name: 'Jonas',
        isMale: true
    },
    {
        id: 2,
        name: 'Petras',
        isMale: true
    },
    {
        id: 3,
        name: 'Paulius',
        isMale: true
    },
    {
        id: 4,
        name: 'Ona',
        isMale: false
    },
];

// 6.2
const filteredArray = people.filter((person) => person.isMale !== true);
const mappedArray =  people.map(person => ({id: person.id, firstName: person.name, isFemale: person.isMale !== true}));
console.log('-- Sukurti masyvą (Array) --', '\n', people);
console.log('-- Išfiltruoti masyvą pagal parametra isMale --', '\n', filteredArray);
console.log(' -- Panaudoti map ir sukurti naują masyvą --', '\n', mappedArray);

//6.3
const numbers = [ 1, -2, 3, -4, 5];

const filteredArray2 = numbers.filter(number => number >= 0);

console.log('-- Sukurti masyvą --', '\n', numbers, '\n', '-- Išfiltruoti skaičius --', '\n', filteredArray2);

const mappedArray2 = numbers.map(number => ([number]));

console.log('-- Sukurti masyvą --', '\n', numbers, '\n', '-- Panaudoti map ir sukurti naują masyvą --', '\n', mappedArray2);