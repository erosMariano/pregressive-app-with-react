import React, {memo} from 'react'
import PropTypes from "prop-types";
import {Card as CardUI} from "../../../components";

import {LabelStyled, ValueStyled, CardContentStyled} from "./style";


function Card({value, label, color}) {
    
    return (
        <div>
            <CardUI>
                <CardContentStyled color={color}>
                    <ValueStyled>{value}</ValueStyled>
                    <ValueStyled>{label}</ValueStyled>               
                </CardContentStyled>

            </CardUI>
        </div>
    )
}

export default memo(Card);
