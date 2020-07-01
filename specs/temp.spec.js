import Temperature from '@/temperature'
import { mount } from '@vue/test-utils'


describe('computed', () => {
    test('celsius', () => {
        const { vm } = mount(Temperature)
        expect(vm.celsius).toBe(0)
        vm.degrees = 23
        expect(vm.celsius).toBe(23)
    })

    test('fahrenheit', () => {
        const { vm } = mount(Temperature)
        expect(vm.fahrenheit).toBe(32)
        vm.degrees = 16
        expect(vm.fahrenheit).toBe(60.8)
    })
});

test('temp watcher', async () => {
    const wrapper = mount(Temperature, {
        propsData: {
            temp: 40
        }
    })
    const { vm } = wrapper
    expect(vm.degrees).toBe(40)
    expect(vm.type).toBe('celsius')

    await wrapper.setProps({
        temp: '50f'
    })

    expect(vm.degrees).toBe(50)
    expect(vm.type).toBe('fahrenheit')
})