import readline from 'readline'

function input (texto) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout

    })
    return new Promise(resolve => {
        rl.question(texto, (res) => {
            resolve(res)
        })
    })
}


const res = await input('Escribe tu nombre:')


console.log(res)


