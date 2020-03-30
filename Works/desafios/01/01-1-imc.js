// Cálculo do IMC

// const name = 'Carlos'
// const gender = 'M'
// const weight = 150
// const height = 1.88
// const IMC = calcIMC(weight,height)

// function calcIMC(weight, height){
//     return weight/(height*height)
// }

// if (IMC>=30){
//     console.log(`${name} você está acima do peso. IMC = ${IMC}`)
// } else{
//     console.log(`${name} você não está acima do peso. IMC = ${IMC}`)
// }

const name = 'Carlos'
const gender = 'M'
const age = 60
const contribution = 35

// console.log(gender=='M')
// console.log(gender=='F')
// console.log(contribution >=30)
// console.log(contribution+age >=85)




if (gender==`M` && contribution >=35 && contribution+age >=95 || (gender==`F` && contribution >=30 && contribution+age >=85) ){
    console.log(`${name}, você pode se aposentar.`)
} else{
    console.log(`${name}, você não pode se aposentar.`)
}