import React, {useEffect, useState} from 'react'

const NumberAddons = ({operacion}) =>{
    return (
        <div className = "col calculator-numbers">
            <p className = "calculator-appenders">{operacion}</p>
        </div>
    )
}

export default NumberAddons