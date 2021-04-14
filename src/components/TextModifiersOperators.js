import React, {useEffect, useState} from 'react'

const TextModifiersOperator = ({simbolo, modifyScreen}) =>{
    const clickOperatorListener = e =>{
        modifyScreen(simbolo);
    }
    return (
        <div className = "col modifier-operator-1" onClick = {clickOperatorListener}>
            <p className = "modifier-caption-1">{simbolo}</p>
        </div>
    )
}

export default TextModifiersOperator