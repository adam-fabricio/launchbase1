const company = {
    name: 'Rocketseat',
    color: 'Roxo',
    focus: `Programação`,
    address : {
        street: `Rua Guilherme Gembala`,
        number: 260,
    },
}
console.log(`A empresa ${company.name} está localizada em ${company.address.street}, ${company.address.number}`)

const programmer = {
    name: `Carlos`,
    age: 32,
    tecnology:[
        {
            name: 'C++',
            specialty: `Desktop`,
        },
        {
            name:`Python` ,
            specialty:`Data Sciency` ,
        },
        {
            name: `JavaScript`,
            specialty:`Web/Mobile` ,
        },
    ]

}

console.log(`O usuário ${programmer.name} tem ${programmer.age} anos e usa a tecnologia ${programmer.tecnology[0].name} com especialidade em ${programmer.tecnology[0].specialty}`)