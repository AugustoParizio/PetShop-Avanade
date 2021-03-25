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
    for(let i = 0; i < pets.length; i++ ){
        console.log(pets[i].nome);
    }
}

listarPets();

//console.log(pets);

