import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
//import { heroes } from '../data/heros'
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location=useLocation();
    const {q = ''} = queryString.parse(location.search);
   

    
    const [{searchText},handleInputChange]=useForm({
        searchText:q
    });
    
    //const heroesFiltered=getHeroesByName(searchText); 
    const heroesFiltered=useMemo(() => getHeroesByName(q), [q])

    const handleSearch=(e)=>{
        e.preventDefault();

        
        
       history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>
            <div className="row">
                <div className="col-4">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="searchText"
                            placeholder="Find your hero"
                            className="form-control"
                            value={searchText}
                            autoComplete="off"
                            onChange={handleInputChange}

                        />
                        <button
                            type="submi"
                            className="btn m-1 btn-block btn-outline-primary"
                            
                        >
                            Search
                        </button>

                    </form>
                </div>
            </div>
            <div className="row ">
                <div className="col-12">
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        (heroesFiltered.length===0)
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }
                    <div className="card-columns">

                        {
                            heroesFiltered.map(hero=>(
                                <HeroCard
                                    key={hero.id}
                                    {...hero}
                                />
                            ))
                        }
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
