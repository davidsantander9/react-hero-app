import React, { useMemo } from 'react'

import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q=''} = queryString.parse(location.search);

    console.log(q);
    
    const [ { search }, handleInputChange, reset ] = useForm({
        search: '',
    });

    const handleSearch = (e) => {
        e.preventDefault();
        
        if (search.trim() <= 1) {
            return
        }
        history.push(`?q=${ search }`)
        reset();
    }
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);

    return (
        <div>
            <h1>Search Screen</h1>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            name="search"
                            autoComplete="off"
                            placeholder="Find your hero"
                            className="form-control"
                            value={search}
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search ...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr/>
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div> 
        </div>
    )
}
