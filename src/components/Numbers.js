import React, {useEffect, useState} from 'react'

const Numbers = ({numero, calculateNumbers}) =>{
    const clickNumberListener = e =>{
        calculateNumbers(numero);
    }
    return (
        <div className = "col calculator-numbers" onClick  = {clickNumberListener}>
            <p className = "calculator-appenders">{numero}</p>
        </div>
    )
}

export default Numbers