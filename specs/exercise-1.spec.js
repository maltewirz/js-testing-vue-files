import UserList from '@/exercise-1';
import { mount } from '@vue/test-utils';
import { name } from 'faker';

test('component renders the users', async () => {
    const wrapper = mount(UserList, {
        propsData: {
            users: [name.findName(), name.findName(),
                name.findName()]
        }
    })
    // console.log(wrapper.props('users'));
    
    const li = wrapper.findAll('li')
    const person = li.at(1).text();
    
    expect(li.length).toBe(3)
    
    await wrapper.find('input').setValue(person)

    const finalLi = wrapper.find('li')
    expect(finalLi.text()).toBe(person)

    
})