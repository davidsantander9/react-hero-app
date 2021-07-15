import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import Color, { Palette } from "color-thief-react";

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();

    const hero = useMemo(() => getHeroById( heroId ), heroId);


    if( !hero ){
        return <Redirect to="/" />
    }
    const {
        id,
        superhero,
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

        <Color src={path} crossOrigin="anonymous" format="hex">
                {({ data, loading }) => {
                if (loading) return (<p>No image</p>);
                return (

                    <div className='hero-screen animate__animated animate__flipInX' 
                        style={{
                            backgroundColor: data ,
                        }}
                    >
                        
                        <div className='img-hero'>
                            <img src={path} className="img img-responsive" alt={superhero}/>
                        </div>
                        <div className='hero-data'>
                            <h1>Superhero: {superhero}</h1>
                            <h2>Alter ego: {alter_ego}</h2>
                            <p>First appearance: {first_appearance}</p>
                            <p>Characters: {characters}</p>
                            <button 
                                className='btn btn-primary' 
                                onClick={ handleReturn }
                            >
                                Regresar
                            </button>
                        </div>
                    </div>
                );
                }}
        </Color>
        
    )
};
