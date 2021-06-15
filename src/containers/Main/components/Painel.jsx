import React, {memo} from 'react';
import RefreshIcon from "../../../assets/images/refresh.svg";
import {Card, Typography, Button, Select, MenuItem} from "../../../components";
import CONTRIES from "../../../commons/constants/contries";
import {CardPanelContentStyled, itemStyled} from "./style";



const navigationHasShare = navigator.share
function Painel({updateAt, onChange, data, country, getCovidData}) {

    const {cases,recovered, deaths, todayCases, todayDeaths} = data;

    const renderCountries = (country, index) =>(
        <MenuItem key={`country-${index}`} value={country.value}>
            <itemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`Pais-${country.label}`}/>
            </itemStyled>
        </MenuItem>
    )



    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">COVID19</Typography>
                    <br/>

                    <Typography variant="h6" component="span" color="primary">COVID19</Typography>
                    <br/>
                    
                    <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
                
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {CONTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Painel)
