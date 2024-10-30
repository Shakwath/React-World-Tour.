import { useState } from 'react';
import './Country.css';

const Country = ({country,handleVisitedCountry}) => {
   const {name,flags,population,area,cca3} = country
   
   const [visited ,setVisited]= useState(false)
   
   const handleVisited = () =>{
    setVisited(!visited);
   }
    
   console.log(handleVisitedCountry);

   return (
        <div className={`country ${visited && 'visited'}`}> 
            <h3> {name.common}</h3>
            <img src={flags.png} alt="" />
         <p>Population :{population}</p>
         <p>Area : {area}</p>
         <p><small>Code : {cca3}</small></p>
         <button>Mark Visited</button>
         <br />
         <button onClick={handleVisited}>Visited</button>
        {visited && 'I have Visited this place.'}
        </div>
    );
};

export default Country;

/**
 * 1 - perameter r moode prop use {}
 * 2 - erpor h3 te di dino dynamic krbo.
 * 3 - countries.jsx e jabo country er sob data er jnno component bnabo
 * 4 - 
 */