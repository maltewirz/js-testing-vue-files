import ExerciseForm from '@/exercise-2';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';

test('follow the user through the form', async () => {
    const wrapper = mount(ExerciseForm)

    expect(wrapper).toMatchSnapshot()
    
    const form = wrapper.find('form')

    const input = form.find('input')
    const taskList = wrapper.find('ul')

    input.setValue('my todo')
    await form.trigger('submit')

    expect(wrapper).toMatchSnapshot()

    const button = taskList.find('li').find('button')
    
    await button.trigger('click')

    expect(wrapper).toMatchSnapshot()
})