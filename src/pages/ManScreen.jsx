import React from 'react';
import { Characters } from '../models/Charecters';
import Card from '../components/Card';

const ManScreen = () => {

    const mans = Characters.filter(characters => characters.type === 'h');

    return (
        <div className='container mt-5'>
        <div className='row'>
        <h1>ManSecreen</h1>
            {
                mans.map(man => <Card key={man.id}{...man}/>)
            }

        </div>
            
        </div>
    );
}

export default ManScreen;