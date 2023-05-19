import NumerosMemDAO from './numerosMem.js'
import NumerosFileDAO from './numerosFile.js'
import config from '../../config.js'

class NumerosFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log('Persistiendo en Memoria')
                return new NumerosMemDAO

            case 'FILE': 
                console.log('Persistiendo en File System')
                return new NumerosFileDAO(config.FILE)

            default: 
            console.log('Persistiendo en Memoria (default)')
                return new NumerosMemDAO()
        }
    }
}

export default NumerosFactoryDAO