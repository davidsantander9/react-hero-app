import React from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const heroesFiltered = heroes;

    const [ { search }, handleInputChange, reset ] = useForm({
        search: '',
    });

    const handleSearch = (e) => {
        e.preventDefault();

        if (search.trim() <= 1) {
            return
        }
        
        reset();
    }
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
                                key={ heroes.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div> 
        </div>
    )
}
