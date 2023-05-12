import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PokeImg from '../../imgs/pokmon.png'
import pokebola from '../../imgs/pokeball.png'
import axios from 'axios';
import Loading from '../Loading/Loading';
import Logo from '../logo/Logo';
import Pagination from '../pagination/Pagination';



export default function Home() {

    const [pokemon, setPokemon] = useState([])
    const [itensPerPage, setItensPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0);
    const pages = Math.ceil(pokemon.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = pokemon.slice(startIndex, endIndex)

    const [removeLoader, setRemoveLoader] = useState(false)

    useEffect(() => {
        getPokemons();

    }, []);


    const getPokemons = () => {
        var endpoints = [];

        for (var i = 1; i < 1000; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => {
                setPokemon(res)
                setRemoveLoader(true)
            })
            .catch(() => {
                console.log('Erro!')
            })
        return response;

    }

    return (
        <div className='home'>

            <Logo url={PokeImg} alt="Logo" className="logo" />

            <h1>Escolha o Pokemon!</h1>

            <table>
                {currentItens.map((poke) =>
                    <tr>
                        <Link to={`/InformationPokemon/${poke.data.name}`}>
                            <td>
                                <p>{poke.data.name}</p>

                                <img className="imgPokemon" src={poke.data.sprites.other.home.front_default ? poke.data.sprites.other.home.front_default : pokebola} alt="Imagem Pokemon" />
                            </td>
                        </Link>
                    </tr>
                )}
                {!removeLoader && <Loading />}
            </table>
            <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />

        </div >
    )
}
