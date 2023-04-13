import {createStore} from "vuex"
import {Companies} from './modules/companies'

export const store = createStore({
    strict: true,
    modules: {
        Companies,
    },
    // state: {
    //
    // },
    // getters: {
    //
    // },
    // mutations: {
    //
    // },
    // actions: {
    // }
})
