import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/NavBar';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';
import '@testing-library/jest-dom';

describe('Test on <Navbar/>', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }
    
    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: true,
            name: 'Luis'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value = { contextValue }>
            <MemoryRouter>
                <Router history = { historyMock }>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(()=> {
        jest.clearAllMocks();
    });

    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Luis');
    });

    test('should call logout and use history', () => {
        
        wrapper.find('button').prop('onClick')();
        
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    })
    
    

})
