import React from 'react';
import { Characters } from '../models/Charecters';
import Card from '../components/Card';

const WomenScreen = () => {

    const womans = Characters.filter(characters => characters.type === 'm');


    return (
        <div className='container mt-5 text-center'>
            <div className='row'>
           <h1>womanSecreen</h1>
            {
                womans.map(woman => <Card key={woman.id}{...woman}/>)
            }

        </div>
        </div>
    );
}

export default WomenScreen;
