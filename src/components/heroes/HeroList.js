import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';
import "./HeroCard.css";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className='card-box' >
            {
                heroes.map( hero => (
                    <HeroCard key={hero.id} {...hero}/>
                ))
            }
        </div>
    )
}
