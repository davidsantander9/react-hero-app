import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';


export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();
    const hero = getHeroById( heroId );

    if( !hero ){
        return <Redirect to="/" />
    }
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero

    const path = `../assets/heroes/${id}.jpg`;

    const handleReturn = () => {
        if( history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
    }

    return (
        <div className='hero-screen'>
            <div className='img-hero'>
                <img src={path} className="img img-responsive" alt={superhero}/>
            </div>
            <div className='hero-data'>
                <h1>{superhero}</h1>
                <h2>{alter_ego}</h2>
                <p>{first_appearance}</p>
                <p>{characters}</p>
                <button 
                    className='btn btn-primary' 
                    onClick={ handleReturn }
                >
                    Regresar
                </button>
            </div>
        </div>
    )
};
