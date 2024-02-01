import React, { useState } from "react";
import { Link, useSearchParams, useOutletContext } from "react-router-dom";
import Data from "./data.json";


const Countries = () => {
    const { isDarkTheme } = useOutletContext()
    const [data, setData] = useState( Data );
    const [ searchParams, setSearchParams] = useSearchParams();


    const regionFilter = searchParams.get("region");
   
    const ThemeColor = {
        color: isDarkTheme ? "#111517" : "#ffffff"
    }


    const filteredRegionArr = regionFilter ? 
    data.filter( country => country.region === regionFilter):
    data
    
    const cardArr = filteredRegionArr.map( (country) => {
        return (
            <Link className="card" key={country.name} to={`/details/${country.name}` }>
                <img src={country.flag} alt=""className="flag"/>
                <div className="country-details"style={ThemeColor}>
                    <h3>{country.name}</h3>
                    <div className="sub-details" style={ThemeColor}>
                        <p><span>Population:</span> {country.population}</p>
                        <p><span>Region:</span> {country.region}</p>
                        <p><span>Capital:</span> {country.capital}</p>
                    </div>
                </div>
            </Link>
        )
    })

    function handleSearchCountry(event) {
       data.map( ele => {
        if(event.target.value === ele.name) {
            setData(prevState => prevState.filter( ele => ele.name === event.target.value))
        }
       })
    }

    return ( 
        <div className="countries-comp">
            <input type="text" placeholder="Search..." className="search-input" onChange={handleSearchCountry}/>
          <div className="buttons-container" >
            <button
            style={{
                backgroundColor: isDarkTheme ? "#ffffff" : "#2b3945",
                color: isDarkTheme ? "black" : "#ffffff",
                border: isDarkTheme ? "black" : "#2b3945",
                boxShadow: "2px 0px 5px 0px rgba(0,0,0,0.75)"
                }}
            
            onClick={() => setSearchParams({})}
            >All Countries</button>

            <button
            style={{
                backgroundColor: isDarkTheme ? "#ffffff" : "#2b3945",
                color: isDarkTheme ? "black" : "#ffffff",
                border: isDarkTheme ? "black" : "#2b3945",
                boxShadow: "2px 0px 5px 0px rgba(0,0,0,0.75)"
                }}
            onClick={() => setSearchParams({region: "Asia"})}
            >Asia</button>
            
            <button
            style={{
                backgroundColor: isDarkTheme ? "#ffffff" : "#2b3945",
                color: isDarkTheme ? "black" : "#ffffff",
                border: isDarkTheme ? "black" : "#2b3945",
                boxShadow: "2px 0px 5px 0px rgba(0,0,0,0.75)"
                }}
            onClick={() => setSearchParams({region: "Europe"})}
            >Europe</button>

            <button
            style={{
                backgroundColor: isDarkTheme ? "#ffffff" : "#2b3945",
                color: isDarkTheme ? "black" : "#ffffff",
                border: isDarkTheme ? "black" : "#2b3945",
                boxShadow: "2px 0px 5px 0px rgba(0,0,0,0.75)"
                }}
            onClick={() => setSearchParams({region: "Americas"})}
            className={`${regionFilter === "America"} ? .active-button : null`}
            >America</button>

            <button
            style={{
                backgroundColor: isDarkTheme ? "#ffffff" : "#2b3945",
                color: isDarkTheme ? "black" : "#ffffff",
                border: isDarkTheme ? "black" : "#2b3945",
                boxShadow: "2px 0px 5px 0px rgba(0,0,0,0.75)"
                }}
            onClick={() => setSearchParams({region: "Africa"})}
            >Africa</button>

            <button
            style={{
                backgroundColor: isDarkTheme ? "#ffffff" : "#2b3945",
                color: isDarkTheme ? "black" : "#ffffff",
                border: isDarkTheme ? "black" : "#2b3945",
                boxShadow: "2px 0px 5px 0px rgba(0,0,0,0.75)"
                }}
            onClick={() => setSearchParams({region: "Oceania"})}
            >Oceania</button>
          </div>
          <div className="card-render">
            {cardArr}
          </div>
            
        </div>
     );
}
 
export default Countries;