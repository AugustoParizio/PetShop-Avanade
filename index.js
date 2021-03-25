const NomePetshop = "Petshop Avanade";

let pets = [
    {
    nome: 'Apollo',
    tipo: 'Cachorro',
    idade: 3,
    raça:'Pitbull',
    peso: 35,
    tutor: 'Augusto',
    contato: '81979018092',
    vacinado: true,
    serviços: ['banho', 'tosa']

},

{
    nome: 'lesci',
    tipo: 'Cachorro',
    idade: 3,
    raça:'Poodle',
    peso: 25,
    tutor: 'Augusto',
    contato: '81979018092',
    vacinado: true,
    serviços: ['banho', 'tosa']

},

{
    nome: 'Poly',
    tipo: 'Gato',
    idade: 3,
    raça:'ViraLata',
    peso: 10,
    tutor: 'Augusto',
    contato: '81979018092',
    vacinado: true,
    serviços: ['banho', 'tosa'],

},
];

const listarPets = () => {
    for(let pet of pets){

        console.log($`{pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

listarpets();
   




