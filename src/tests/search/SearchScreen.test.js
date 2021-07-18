import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../components/search/SearchScreen';

describe('Test on <SearchScreen/>', () => {

    test('should show with default values', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchScreen }/>
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        // expect( wrapper.find('.alert-info').text().trim() ).toBe();

    });

    test('should show batman and the query-string value', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=spider']}>
                <Route path="/search" component={ SearchScreen }/>
            </MemoryRouter>
        );

        // expect( wrapper.find('input').prop('value') ).toBe('spider');
        expect( wrapper ).toMatchSnapshot();

    });

    test('should show batman and the query-string value', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=spider']}>
                <Route path="/search" component={ SearchScreen }/>
            </MemoryRouter>
        );

        // expect( wrapper.find('input').prop('value') ).toBe('spider');
        expect( wrapper ).toMatchSnapshot();

    });

    // test('should call history push', () => {
        
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/search?q=spider']}>
    //             <Route path="/search" component={ SearchScreen }/>
    //         </MemoryRouter>
    //     );


    // })
    
    

    
})
