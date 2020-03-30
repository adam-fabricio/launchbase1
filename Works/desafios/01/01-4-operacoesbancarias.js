const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}
function createTransaction(transaction) {
    user.transactions.push({
        type: transaction.type,
        value: transaction.value
    })
    if (transaction.type == `credit`) {
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type) {
    a = user.transactions[0].value
    for (transaction of user.transactions) {
        if (type == transaction.type){
            if (type==`credit` && a < transaction.value){
                a=transaction.value
            }
            if (type==`debit` && a < transaction.value){
                a=transaction.value
            }
        }
    }
    return a
}

function getAverageTransactionValue(){
    accumulator =0
    for( transaction of user.transactions){
        accumulator += transaction.value
    }
    
    return accumulator/user.transactions.length
}

function getTransactionsCount(){
    value_credit = 0
    value_debit = 0
    for(transaction of user.transactions){
        if (transaction.type=='credit'){
            value_credit++
        } else{
            value_debit++
        }
    }
    return {credit: value_credit, debit: value_debit}
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }