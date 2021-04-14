import React, {useEffect, useState} from 'react'

const EqualOperator = ({simbolo,calcularResultado}) =>{
    const clickEqualOperator = e =>{
        calcularResultado();
    }
    return (
        <div className = "col modifier-operator" onClick = {clickEqualOperator}>
            <p className = "modifier-caption">{simbolo}</p>
        </div>
    )
}

export default EqualOperator