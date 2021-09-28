import APIService from '@/services/ApiService'

export const state = () => ({
    references: [],
    realizations:  []
})

export const getters = {
    getRealizations: (state) => () =>{
        return state.realization
    },
    getReferences: (state) => () =>{
        return state.references
    },
    getRealizationByLink: (state) => (link) => {
        return state.realizations.find(realization => realization.link == link)
    },
    getRealizationsCount: (state) => () => {
        return state.realizations.length
    },
    getReferencesCount: (state) => () => {
        return state.references.length
    },
    getOne: (state) => () => {
        return 1
    }
}

export const actions = {
    async getReferences({commit}) {
        let references = await new APIService().getReferences()
        commit('SET_REFERENCES', references)
    },
    async getRealizations({commit}) {
        let realizations = await new APIService().getRealizations()
        commit('SET_REALIZATIONS', realizations)
    }
}

export const mutations = {
    SET_REFERENCES(state, references) {
        state.references = references
    },
    SET_REALIZATIONS(state, realizations){
        state.realizations = realizations
    }
}