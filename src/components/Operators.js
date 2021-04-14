import React, {useEffect, useState} from 'react'

const Operators = ({simbolo, operador, pushOperation}) =>{

    const clickOperatorListener = e =>{
        pushOperation(operador);
    }

    return (
        <div className = "col calculator-operators" onClick = {clickOperatorListener}>
            <p className = "operators-caption">{simbolo}</p>
        </div>
    )
}

export default Operators