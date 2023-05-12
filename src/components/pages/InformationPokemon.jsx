import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import pokebola from '../../imgs/pokeball.png'
import { Link } from 'react-router-dom';
import { AiOutlineCaretLeft } from "react-icons/ai";
import Loading from '../Loading/Loading';

export default function InformationPokemon() {

    const { name } = useParams();

    const [img, setImg] = useState(false)
    const [pokemon, setPokemon] = useState([])
    const [removeLoader, setRemoveLoader] = useState(false)
    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then((response) => {
                setPokemon(response.data);
                setRemoveLoader(true)
            })
            .catch(() => {
                console.log('Erro!')
            })
    }

    const changePoke = () => {
        setImg(!img)
    }

    const imgBack = pokemon.sprites?.back_default ? pokemon.sprites?.back_default : pokebola;

    setInterval(changePoke, 4000);

    return (
        <>

            <div className='cointainer'>

                <Link to="/"><button className='voltar'><AiOutlineCaretLeft /></button></Link>
                <div className='pokemon'>
                    <img className="ImgPokemon" src={img ? imgBack : pokemon.sprites?.front_default} alt="Pokemon" />

                    {!removeLoader && <Loading />}

                    <h1>{pokemon.name}</h1>

                    <h3>Tamanho:</h3>
                    <p>{pokemon.height}</p>
                    <h3>Peso:</h3>
                    <p>{pokemon.weight} Kg</p>
                    <h3>Status:</h3>
                    {pokemon.stats?.map((poke) =>
                        <p>{poke.stat.name} cm</p>
                    )}
                    <h3>Habilidades</h3>
                    {pokemon.abilities?.map((poke) =>
                        <p>{poke.ability.name}</p>
                    )}
                    <h3>Tipos:</h3>
                    {pokemon.types?.map((poke) =>
                        <p>{poke.type.name}<br /></p>
                    )}

                </div >
            </div>
        </>
    )
}
