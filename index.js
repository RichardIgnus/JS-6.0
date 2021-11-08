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

const filteredArray = people.filter((person) => person.isMale !== true);
const mappedArray =  people.map(person => ({id: person.id, firstName: person.name, isFemale: person.isMale !== true}));
console.log('-- Sukurti masyvą (Array) --', '\n', people);
console.log('-- Išfiltruoti masyvą pagal parametra isMale --', '\n', filteredArray);
console.log(' -- Panaudoti map ir sukurti naują masyvą --', '\n', mappedArray);