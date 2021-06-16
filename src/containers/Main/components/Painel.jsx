import React, {memo} from 'react';
import RefreshIcon from "../../../assets/images/refresh.svg";
import {Card, Typography, Button, Select, MenuItem} from "../../../components";
import CONTRIES from "../../../commons/constants/contries";
import {CardPanelContentStyled, ItemStyled} from "./style";



const navigationHasShare = navigator.share;


function Painel({updateAt, onChange, data, country, getCovidData}) {

    const {cases,recovered, deaths, todayCases, todayDeaths} = data;

    const renderCountries = (country, index) =>(
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`Pais-${country.label}`}/>
            </ItemStyled>
        </MenuItem>
    )


    
    const textCovid19 = `Pais: ${country} - recuperados: ${recovered}`

    const copyInfo = () =>{
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () =>{
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: "https://covid-dio.herokuapp.com/"
        })
    }


    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>Copiar</Button>
        </div>
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
                
                <div>
                    {renderShareButton}
                    <br/>
                    {renderCopyButton}
                </div>

                {/* {navigationHasShare ? renderShareButton : renderCopyButton} */}
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Painel)
