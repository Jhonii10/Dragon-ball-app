import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { Characters } from '../models/Charecters';
import Card from '../components/Card';

const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q=''} = queryString.parse(location.search);

    const [inputValue, setinputValue] = useState(q);
    const [character, setcharacter] = useState([]);

    const handleChange = (e)=>{
        const value = e.target.value;
        setinputValue(value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`?q=${inputValue}`);
    }

    const getCharacters = ()=>{
        if(inputValue.trim() !== ''){
            const value = inputValue.toLocaleLowerCase()
            const characters = Characters.filter(character =>
                character.name.toLocaleLowerCase().includes(value))
                setcharacter(characters);
        }
        else{
            setcharacter([]);
        }
    }

    useEffect(() => {
        getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [q]);


    return (
        <div className="container">
        <h1>Search screen</h1>
        <hr/>
        <div className='row'>
        <div className='col-6'>
            <h2 className='my-3' >Search</h2>
            <form onSubmit={handleSubmit}>
                <label className='form-label w-100'>
                    Character: <input placeholder='Name character' type='text' 
                    className='form-control'
                    autoComplete='off'
                    value={inputValue}
                    onChange={handleChange}
                    />
                </label>
                <button type='submit' className='btn btn-outline-primary'>search</button>
            </form>
        </div>
        <div className='col-6'>
            <h2 className='my-3' >Results:{character.length}</h2>
            {
                character.length === 0 && (
                    <div className='alert alert-danger text-center'>
                        No Results
                    </div>
                )
            }
            {
                character.map(character => <Card key={character.id} {...character}/>)
            }
        </div>
        </div>
        </div>
    );
}

export default Search;
