import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from "../../components/login/LoginScreen";
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

describe('test on <LoginScreen/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: false
        }
    }

    
    const history = {
        replace: jest.fn(),
    }

    const wrapper = mount( 
        <AuthContext.Provider  value = { contextValue } >
            <LoginScreen history={ history }/>
        </AuthContext.Provider>
    );


    test('should show it correctly', () => {
       expect( wrapper ).toMatchSnapshot();
    });
    

    test('should did dispath and navegated', () => {
        
        wrapper.find('button').prop('onClick')();
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload:{
                name: 'David',
            }
        });

        expect( history.replace ).toHaveBeenCalled();

    });
    

});
