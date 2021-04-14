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
        if (pantalla.length < 9) {
            let resultadoPantalla = pantalla + numero;
            if (resultadoPantalla[0] === "0" && !(resultadoPantalla.includes("."))) {
                resultadoPantalla = resultadoPantalla.substring(1)
            }
            setPantalla(resultadoPantalla);
        }
    }
    const calcularResultado = () =>{
        const resultado = Mexp.eval(stackOperaciones+pantalla);
        setPantalla(resultado.toString());
        setStackOperaciones("")
    }

    const operatorPressed = (operator) =>{
        let lineaOperaciones = stackOperaciones
        // if(lineaOperaciones.length > 1){
        //     if("+- Mod \\/".includes[operator]){
        //         lineaOperaciones = lineaOperaciones.substring(0, lineaOperaciones.lastIndexOf(operator))
        //     }
        // }
        lineaOperaciones += pantalla + operator;
        setStackOperaciones(lineaOperaciones);
        setPantalla("0");



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
                    <TextModifiersOperator simbolo = "C"/>
                    <TextModifiersOperator simbolo = "CE"/>
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
                    <NumberAddons operacion = '+/-'/>
                    <Numbers numero = {"0"} calculateNumbers = {numberPressed}/>
                    <NumberAddons operacion = '.'/>
                    <EqualOperator simbolo = '=' calcularResultado = {calcularResultado}/>
                </div>
            </div>
            
        </div>
    );
}

export default Calculator;