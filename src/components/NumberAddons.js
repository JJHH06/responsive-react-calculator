import React, {useEffect, useState} from 'react'

const NumberAddons = ({operacion,addonOperator}) =>{
    const clickOperatorListener = e =>{
        addonOperator(operacion);
    }
    return (
        <div className = "col calculator-numbers" onClick = {clickOperatorListener}>
            <p className = "calculator-appenders">{operacion}</p>
        </div>
    )
}

export default NumberAddons