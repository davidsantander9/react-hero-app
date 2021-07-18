import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { MemoryRouter } from "react-router";

describe('Test on <DashboardRoutes/>', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: false
        }
    }

    test('should show correctly', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value = { contextValue }>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();

    });
    

})
