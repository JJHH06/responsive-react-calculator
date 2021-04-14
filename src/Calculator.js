import React from 'react';
import './style.scss';


function Calculator(){

    return (
        <div>
            <div className = "container-sm">
                {/* esto de aca sera la pantalla de la calculadora */}
                <div className = "row">
                    <div className = "col">
                    <h1>Lapan Talla</h1>
                    </div>
                </div>
                {/* Primera fila de operaciones */}
                <div className = "row">
                    <div className = "col">
                    <h1>C</h1>
                    </div>
                    <div className = "col">
                    <h1>CE</h1>
                    </div>
                    <div className = "col">
                    <h1>MOD</h1>
                    </div>
                    <div className = "col">
                    <h1>/</h1>
                    </div>
                </div>
                {/* Segunda fila de numeros y operaciones*/}
                <div className = "row">
                    <div className = "col">
                    <h1>7</h1>
                    </div>
                    <div className = "col">
                    <h1>8</h1>
                    </div>
                    <div className = "col">
                    <h1>9</h1>
                    </div>
                    <div className = "col">
                    <h1>X</h1>
                    </div>
                </div>
                {/* Tercera fila de numeros y operaciones*/}
                <div className = "row">
                    <div className = "col">
                    <h1>4</h1>
                    </div>
                    <div className = "col">
                    <h1>5</h1>
                    </div>
                    <div className = "col">
                    <h1>6</h1>
                    </div>
                    <div className = "col">
                    <h1>-</h1>
                    </div>
                </div>
                {/* Cuarta fila de numeros y operaciones*/}
                <div className = "row">
                    <div className = "col">
                    <h1>1</h1>
                    </div>
                    <div className = "col">
                    <h1>2</h1>
                    </div>
                    <div className = "col">
                    <h1>3</h1>
                    </div>
                    <div className = "col">
                    <h1>+</h1>
                    </div>
                </div>
                {/* Quinta fila de numeros y operaciones*/}
                <div className = "row">
                    <div className = "col">
                    <h1>+/-</h1>
                    </div>
                    <div className = "col">
                    <h1>0</h1>
                    </div>
                    <div className = "col">
                    <h1>.</h1>
                    </div>
                    <div className = "col">
                    <h1>=</h1>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Calculator;