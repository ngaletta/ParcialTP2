import ApiNumeros from '../api/numeros.js'

class ControladorNumeros {

    constructor() {
        this.apiNumeros = new ApiNumeros()
    }

    guardarNumero = async (req,res) => {
        try {
            let { numero } = req.body
            numero = parseFloat(numero)
            await this.apiNumeros.guardarNumero(numero)
            res.redirect('/')
        }
        catch(error) {
            console.log('error guardarNumero', error)
        }
    }

    obtenerNumeros = async (req,res) => {
        try {
            let numeros = await this.apiNumeros.obtenerNumeros()
            res.json({numeros})
        }
        catch(error) {
            console.log('error obtenerNumeros', error)
        }
    }

    obtenerPromedio = async (req,res) => {
        try {
            let promedio = await this.apiNumeros.obtenerPromedio()
            res.json({promedio})
        }
        catch(error) {
            console.log('error obtenerPromedio', error)
        }
    }

    obtenerMinMax = async (req,res) => {
        try {
            let { min, max } = await this.apiNumeros.obtenerMinMax()
            res.json({ min, max })
        }
        catch(error) {
            console.log('error obtenerMinMax', error)
        }
    }

    obtenerCantidad = async (req,res) => {
        try {
            let cantidad = await this.apiNumeros.obtenerCantidad()
            res.json({cantidad})
        }
        catch(error) {
            console.log('error obtenerCantidad', error)
        }
    }
}

export default ControladorNumeros
