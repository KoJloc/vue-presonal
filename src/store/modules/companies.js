import axios from 'axios';
export const Companies={
    strict: true,
    namespace: true,
    modules: {

    },
    state: {
        companies: [],
        filters: [],
        popupProductA: null,
    },
    getters: {
        COMPANIES: state=>state.companies,

        FILTERS: state=>state.filters
    },
    mutations: {
        SET_COMPANY(state, data) {
            state.companies = data
        },

        SET_FILTER(state, data) {
            state.filters = data
        },
    },
    actions: {
        getProducts({commit}) {
            axios.get('https://personal.stepan.sms19.ru/api/companies')
                .then(res => {
                    commit('SET_COMPANY', res.data.data)
                })
                .finally(v => {
                    $(document).trigger('init');
                })
        },

        getFilterList({commit}) {
            axios.get('https://personal.stepan.sms19.ru/api/companies/filters')
                .then(res => {
                    commit('SET_FILTER', res.data)
                })
                .finally(v => {
                    $(document).trigger('init');
                })
        },

        getProductPopup(id) {
            axios.get(`https://personal.stepan.sms19.ru/api/companies/${id}`)
                .then(res => {
                    console.log(res)
                    this.popupProductA = res.data.data
                })
                .finally(v => {
                    $(document).trigger('init');
                })
        },
    }
}
