import Vuex from 'vuex'
import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'

import SaladBowlComponent from '@/salad-bowl'
import saladStore from '@/store/salad-store'

// Local Vue avoids polluting the global Vue instance
const VueWithVuex = createLocalVue();
VueWithVuex.use(Vuex)

let store
let wrapper

beforeEach(() => {
    store = new Vuex.Store(saladStore)
    wrapper = mount(SaladBowlComponent, {
        localVue: VueWithVuex,
        store
    })
})

test('store is loaded', () => {
    store.state.salad.push('cucumber')
    expect(wrapper.vm.salad).toEqual(['cucumber'])
})

test('store works', () => {
    wrapper.vm.addIngredient('tomato')
    expect(wrapper.vm.salad).toEqual(['tomato'])
})