import React, {useEffect, useState} from 'react'

const Numbers = ({numero}) =>{
    return (
        <div className = "col calculator-numbers">
            <p className = "calculator-appenders">{numero}</p>
        </div>
    )
}

export default Numbers