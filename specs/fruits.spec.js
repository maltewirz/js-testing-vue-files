import  FruitBasket from '@/fruit-basket'
import { mount } from '@vue/test-utils'

test('can add fruits to basket with DOM', async () => {
    const wrapper = mount(FruitBasket)

    const input = wrapper.find('input')
    const button = wrapper.find('button')
    expect(wrapper.findAll('li').length).toBe(0)

    input.element.value = 'banana'
    // in the browser the event would be sent automatically
    // in jest we need to trigger it manually
    input.trigger('input')
    expect(wrapper.vm.fruit).toBe('banana')

    await button.trigger('click')
    expect(wrapper.vm.fruit).toBe('')
    expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['banana']))
    
    expect(wrapper.findAll('li').length).toBe(1)
})