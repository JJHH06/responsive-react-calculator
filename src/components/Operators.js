import React, {useEffect, useState} from 'react'

const Operators = ({simbolo, operador}) =>{
    return (
        <div className = "col calculator-operators">
            <p className = "operators-caption">{simbolo}</p>
        </div>
    )
}

export default Operators