import fs from 'fs'

class NumerosFileDAO {

    constructor() {
        this.nombreArchivo = 'numeros.json'
    }

    guardarNumero = async numero => {
        try {
            let numeros = await this.obtenerNumeros()
            numeros.push(numero)
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(numeros), 'utf-8')
            return numero
        }
        catch(error) {
            console.log('error en guardarNumero:',error.message)
            return undefined
        }
    }

    obtenerNumeros = async () => {
        try {
            let numeros = JSON.parse(await fs.promises.readFile(this.nombreArchivo))
            return numeros
        }
        catch(error) {
            console.log('error en obtenerNumeros', error.message)
            return []
        }
    }
}

export default NumerosFileDAO