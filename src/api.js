const path = "https://coronavirus-19-api.herokuapp.com/countries"
//Utilizando o fetch por ser mais simples entretando não usar, usar axios>>
const headers = {
    method: "get",
    mode: "cors",
    cache: "default"
}

function getCountry(country){
    return fetch(`${path}/${country}`, headers)
        .then((response) => response.json())
}

export default {getCountry};


