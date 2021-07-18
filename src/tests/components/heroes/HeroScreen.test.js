import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router';

import { HeroScreen } from '../../../components/heroes/HeroScreen';


describe('test on <HeroScreen/>', () => {
    
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn() 
    }

    
    test('should show <redirect/> is there wasnt args in URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history = { historyMock }/>
            </MemoryRouter>
        );
        expect( wrapper ).toMatchSnapshot();
    });


    // test('should show a hero if param exist and found it', () => {
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/hero/marvel-spider']}>
    //             <Route path="/hero/:heroId" component={ HeroScreen }/>
    //         </MemoryRouter> 
    //     );

    //     console.log(wrapper);
    //     expect( wrapper.find('.row').exists()).toBe(true);
    // });


    // test('should return to previous page', () => {

    //     const history = {
    //         length: 1,
    //         push: jest.fn(),
    //         goBack: jest.fn() 
    //     }

    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/hero/dc-robin']}>
    //             <Route 
    //             path="/hero/:heroId" 
    //             component={ () =>  <HeroScreen history={ history }/> }
    //         />
    //         </MemoryRouter>
    //     );

    //     wrapper.find('button').prop('onClick')();

    //     expect( history.push ).toHaveBeenCalledWith('/');
    //     expect( history.goBack ).not.toHaveBeenCalled();
    // });
    

})
