import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Test on authReducer', () => {

    test('should return default state', () => {
        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });


    });

    test('should authenticate and set user name', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'David'
            }
        }
        const state = authReducer({ logged: false }, action ); 
        expect( state ).toEqual({ 
            logged: true,
            name: 'David'
        });
    });

    test('should delete username and return logged false', () => {
        const action = {
            type: types.logout
        }
        
        const state = authReducer({ 
            logged: true,
            name: 'David'
        }, action ); 
        
        expect( state ).toEqual({ 
            logged: false,
        });
    });
    
    
    
});
