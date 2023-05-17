import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Characters } from '../models/Charecters';

const CharacterScreen = () => {

    const {characterId} = useParams()
    const {type,name,description} = Characters.find((e)=> e.id === characterId)
    const path = `/assets/${type}-${characterId}.png`
    const navigate = useNavigate()

    const handleBack = ()=>{
        navigate(-1)
    }


    return (
        <div className='container row mt-5'>
             
            <div className='col-8'>
            <img className='img-thumbnail' src={path} alt={characterId} style={{width:"400px",height:"500px",objectFit:"contain"}}/> 
            </div>
            <div className='col-4'>
                <h1>Nombre: {name}</h1>
                <p>Descripcion: {description}</p>
                <button onClick={handleBack} className='btn btn-outline-primary'>Go back</button>
            </div>
            

            
        </div>
    );
}

export default CharacterScreen;
