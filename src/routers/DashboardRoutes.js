import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/NavBar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen }/>
                    <Route exact path="/marvel:heroId" component={ HeroScreen }/>
                    <Route exact path="/dc" component={ DcScreen }/>
                    <Route exact path="/dc:heroId" component={ HeroScreen }/>
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
