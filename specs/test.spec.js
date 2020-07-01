import TestComponent from '@/test'
import List from '@/list'
import { mount, shallowMount } from '@vue/test-utils'

test('mount a vue component', () => {
    const wrapper = mount(TestComponent, {
        propsData: {
            value: 'VueSchool'
        }
    })
    expect(wrapper).toMatchSnapshot();
})

test('ListComponent Shallow', () => {
    // console.log(mount(List).html()); // li
    // console.log(shallowMount(List).html()); // listitem-stub
})

test('ListComponent', async () => {
    const wrapper = mount(List);
    const movies = wrapper.vm.marvelMovies    
    wrapper.setData({ marvelMovies: [ ...movies, 'Endgame' ]})
    await wrapper.vm.$nextTick();    
    expect(wrapper).toMatchSnapshot();
})