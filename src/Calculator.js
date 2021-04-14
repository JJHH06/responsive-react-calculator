import React, {useEffect, useState} from 'react';
import './style.scss';
import Numbers from './components/Numbers';
import NumberAddons from './components/NumberAddons';
import Operators from './components/Operators';
import EqualOperator from './components/EqualOperator';
import TextModifiersOperator from './components/TextModifiersOperators';
import Mexp from 'math-expression-evaluator';
//import { node } from 'webpack';

const numerosCalculadora = [
    [{numero : '1'},{numero: '2'},{numero: '3'},],
    [{numero : '4'},{numero: '5'},{numero: '6'},],
    [{numero : '7'},{numero: '8'},{numero: '9'},]];


function Calculator(){
    const [pantalla, setPantalla] = useState("0");
    const [stackOperaciones, setStackOperaciones] = useState("");

    //funcion que cambia la pantalla
    const numberPressed = (numero) =>{
        let textoPantalla = pantalla;
        if(textoPantalla === "ERROR"){
            textoPantalla = "0";
        }
        if (textoPantalla.length < 9) {
            let resultadoPantalla = textoPantalla + numero;
            if (resultadoPantalla[0] === "0" && !(resultadoPantalla.includes("."))) {
                resultadoPantalla = resultadoPantalla.substring(1)
            }
            setPantalla(resultadoPantalla);
        }
    }

    const handleCOpertor =()=>{
        setStackOperaciones("")
        setPantalla("0");
    }
    const handleCeOpertor =()=>{
        if(pantalla.length ===1|| pantalla ==="ERROR"){
            setPantalla("0");
        } else{
            setPantalla(pantalla.slice(0, -1));
        }

        
    }
    
    const handleModificationOperator = (operatorName) => {
        if (operatorName === "CE"){
            handleCeOpertor();
        } else{
            handleCOpertor();
        }
    }


    const calcularResultado = () =>{
        const resultado = Mexp.eval(stackOperaciones+pantalla);
        if(!Number.isFinite(resultado) || Number.isNaN(resultado) || resultado.toString().length >9){
            setPantalla("ERROR")
        } else{
            setPantalla(resultado.toString()); 
        }
        setStackOperaciones("")
    }

    const operatorPressed = (operator) =>{
        if(!(pantalla === "ERROR")){
            let lineaOperaciones = stackOperaciones;
            lineaOperaciones += pantalla + operator;
            setStackOperaciones(lineaOperaciones);
        } 
        setPantalla("0");
    }

    const pointOperator = () =>{
        if(pantalla === "ERROR"){
            setPantalla('0');
        }
        else if(pantalla.length <8 && !pantalla.includes(".")){
            setPantalla(pantalla+".")
        }
    }

    const plusMinusOperator = () =>{
        if(pantalla === "ERROR"){
            setPantalla('0');
        }
        else if(pantalla.includes('-')){
            setPantalla(pantalla.substring(1));
        }
        else if(pantalla.length <9){
            setPantalla("-"+pantalla)
        }
    }


    const handleAppendersOperator = (operatorName) => {
        if (operatorName === "."){
            pointOperator();
        } else{
            plusMinusOperator();
        }
    }



    return (
        <div>
            <div className = "container-sm">
                {/* esto de aca sera la pantalla de la calculadora */}
                <div className = "row">
                    <div className = "col calc-screen">
                    <h1 className = 'calc-screen-caption'>{pantalla}</h1>
                    </div>
                </div>
                {/* Primera fila de operaciones */}
                <div className = "row">
                    <TextModifiersOperator simbolo = "C" modifyScreen = {handleModificationOperator}/>
                    <TextModifiersOperator simbolo = "CE" modifyScreen = {handleModificationOperator}/>
                    <Operators simbolo='MOD' operador = ' Mod ' pushOperation = {operatorPressed}/>
                    <Operators simbolo='÷' operador = '/' pushOperation = {operatorPressed}/>
                </div>
                {/* Segunda fila de numeros y operaciones*/}
                <div className = "row">
                {
                numerosCalculadora[2].map((no,index) => (
                    <Numbers numero = {no.numero} calculateNumbers = {numberPressed}/>
                ))
            }
                    <Operators simbolo='x' operador = '*' pushOperation = {operatorPressed}/>
                </div>
                {/* Tercera fila de numeros y operaciones*/}
                <div className = "row">
                {
                numerosCalculadora[1].map((no,index) => (
                    <Numbers numero = {no.numero} calculateNumbers = {numberPressed}/>
                ))
            }
                    <Operators simbolo='-' operador = '-' pushOperation = {operatorPressed}/>
                </div>
                {/* Cuarta fila de numeros y operaciones*/}
                <div className = "row">
                    {
                numerosCalculadora[0].map((no,index) => (
                    <Numbers numero = {no.numero} calculateNumbers = {numberPressed}/>
                ))
            }
                    <Operators simbolo='+' operador = '+' pushOperation = {operatorPressed}/>
                </div>
                {/* Quinta fila de numeros y operaciones*/}
                <div className = "row">
                    <NumberAddons operacion = '+/-' addonOperator = {handleAppendersOperator}/>
                    <Numbers numero = {"0"} calculateNumbers = {numberPressed}/>
                    <NumberAddons operacion = '.' addonOperator = {handleAppendersOperator}/>
                    <EqualOperator simbolo = '=' calcularResultado = {calcularResultado}/>
                </div>
            </div>
            
        </div>
    );
}

export default Calculator;