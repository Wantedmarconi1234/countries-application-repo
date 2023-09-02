import { useParams, Link, useOutletContext } from "react-router-dom";
import Data from "./data.json"
import { useState } from "react";

const CountryDetails = () => {
    const params = useParams();
    const [data, setData] = useState( Data );
    const { isDarkTheme } = useOutletContext()
    
   
    const filteredArr = data.filter( ele => ele.name === params.country)

    const detailsArr = filteredArr.map( (contryDetail) => {
        return (
            <div key={contryDetail.alpha2Code} className="country-details-comp">
                <div>
                    <img src={contryDetail.flag} alt="" className="detailed-pic"/>
                </div>
                <div>
                    <h3 className="country-detail-name">{contryDetail.name}</h3>
                    <div className="sub-content">
                        <div className="countryDetail-sub-1">
                            <p><span>Native Name:</span> {contryDetail.nativeName}</p>
                            <p><span>Population:</span> {contryDetail.population}</p>
                            <p><span>Region:</span> {contryDetail.region}</p>
                            <p><span>Sub Region:</span> {contryDetail.subregion}</p>
                            <p><span>Capital:</span> {contryDetail.capital}</p>
                        </div>
                        <div className="countryDetail-sub-2">
                            <p><span>Top Level Domain:</span> {contryDetail.topLevelDomain}</p>
                            <p><span>Currency:</span> {contryDetail.currencies[0].name }</p>
                            <p><span>Languages:</span> {contryDetail.languages.map( language => <div className="languages" key={contryDetail.alpha2Code}>{language.name}</div>)}</p>
                        </div>
                    </div>
                    <div className="border-section">
                        <h5>Border Countries:</h5>
                        <div>
                        { contryDetail.borders  ? 
                        contryDetail.borders.map( border => <p className="country-border">{border}</p>) : 
                        "No border"}
                        </div>
                </div>

                </div>
            </div>
        )
    })

    return ( 
        <div className="detail-comp">
           <Link className="countryDetail-button"
           to=".."
           style={{ color: isDarkTheme ? "#2b3945" : "#ffffff"}}
           >Back to Home</Link>
            {detailsArr}
        </div>
     );
}
 
export default CountryDetails;