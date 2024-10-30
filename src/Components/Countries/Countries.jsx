import { useEffect, useState } from "react";
import Country from "./Country/Country";
import './Countries.css'
const countries = () => {
    //5 ta kaj
    //1 - Data rakbo - useState use krbo
        //[2 ta perameter dewa lagbe]
        //import krbo useeffect ke  jeikane 2 ta perameter takbe ( ()=>{ fetch .then eigula krbo api anar jnno}callback func,[])  -- ata korar por console.log krle 250 ta desh er data asbe.

    const [countries ,setCountries] = useState([]); //eiakne 250 ta ache
    const [visitedCountries,setVisitedCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedCountry = country =>{
        console.log(country);
    }

    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            <div>
            <h4>Visited countries:</h4>
            <ul>

            </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} 
                    handleVisitedCountry = {handleVisitedCountry}
                    country ={country}></Country>)
            }
            </div>

            {/*besi component ni kaj krtesi tai eror tai key={} us ekrte hbe unique kicu dite hbe cc3 country code
             data gula patabo props er props er name country ={country} - inspect kre dekle hbe
             */}

        </div>
    );
};

export default countries;

/**
 * 1 - Country ere info dekaite gele map krbo tar jonno component banabno country te country.jsx --> rsc enter clcik
 */