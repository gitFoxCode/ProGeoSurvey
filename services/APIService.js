import axios from 'axios';

export default class APIService {
    async getReferences(options) {
        if (options !== undefined) {
            // options.hasOwnProperty('count')
            return ((await axios.get('data/references.json')).data).length
        }
        let data = (await axios.get('data/references.json')).data
        return data
    }
    async getRealizations(options) {
        if (options !== undefined) {
            // options.hasOwnProperty('count')
            return ((await axios.get('data/realizations.json')).data).length
        }
            
        let data = (await axios.get('data/realizations.json')).data
        return data
    }
}