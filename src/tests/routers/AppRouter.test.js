import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Test on <AppRouter/>', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: false
        }
    }

    test('should show <login/> if no is authenticated', () => {

        const wrapper = mount(
            <AuthContext.Provider value = { contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should show <MarvelScreen/> if is authenticated', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user:{
                logged: true,
                name: 'Luis'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value = { contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists()).toBe(true);


    });
    

});
