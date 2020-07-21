import Axios from "axios"

const state = {
    user: null,
}

const getters = {}

const mutations = {
    setUser(statu, user){
        state.user = user
    }
}

const actions = {
    async register(content, data){
        const response = await axios.post('/api/register', data)
        context.commit('setUser', response.data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}