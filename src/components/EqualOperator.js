import React, {useEffect, useState} from 'react'

const EqualOperator = ({simbolo}) =>{
    return (
        <div className = "col modifier-operator">
            <p className = "modifier-caption">{simbolo}</p>
        </div>
    )
}

export default EqualOperator