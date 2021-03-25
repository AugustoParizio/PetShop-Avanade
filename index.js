let nomePetshop = "PETSHOP AVANADE";

let pets =[
    {
        nome: 'Apollo',
        tipo: 'cachorro',
        idade: 3,
        raca: 'pitbull',
        peso: 30,
        tutor: 'Augusto',
        vacinado: false,
        servicos: ['banho', 'vermifugação']
    },
    {
        nome: 'J',
        tipo: 'cachorro',
        idade: 2,
        raca: 'hotweiler',
        peso: 36,
        tutor: 'Pedro',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Jubileu',
        tipo: 'gato',
        idade: 3,
        raca: 'vira-lata',
        peso: 2,
        tutor: 'Alice',
        vacinado: false,
        servicos: ['banho', 'vacinação']
    },
];

// 

const listarPets = () => {

    for(let pet of pets){
        exibirPet(pet)
    }
}

const vacinarPet = (pet) => {

    if(pet.vacinado == false){
        pet.vacinado = true
    }

    exibirPet(pet)


  
}
const exibirPet = (pet) => {
    console.log( console.log(`Nome do Cachorro: ${pet.nome}
    Idade: ${pet.idade}
    Tipo: ${pet.tipo}
    Raca: ${pet.raca}
    Vacinado: ${pet.vacinado}`))
}





//listarPets();
vacinarPet(pets[1])
   




