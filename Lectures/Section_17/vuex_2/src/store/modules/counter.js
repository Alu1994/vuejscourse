import * as types from '../types';

const state = {
    counter: 0
}

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    }
}

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    }
}

const actions = {
    /* if we need to pass arguments to our "Actions" we can pass a single parameter OR */
    /* we can pass an "Object" with as many as we need */
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    /* the "context" it's **almost** all the "store" object with its features */
    decrement: (context, payload) => {
        context.commit('decrement', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by);
        }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by);
        }, payload.duration);
    }
}

export default {
    //namespaced: true,
    // This will make the access be like
    // counter/increment

    state,
    getters,
    mutations,
    actions
}