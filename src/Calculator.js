import React, {useEffect, useState} from 'react';
import './style.scss';
import Numbers from './components/Numbers';
import NumberAddons from './components/NumberAddons';
import Operators from './components/Operators';
import EqualOperator from './components/EqualOperator';
import TextModifiersOperator from './components/TextModifiersOperators';
//import { node } from 'webpack';

const numerosCalculadora = [
    [{numero : '1'},{numero: '2'},{numero: '3'},],
    [{numero : '4'},{numero: '5'},{numero: '6'},],
    [{numero : '7'},{numero: '8'},{numero: '9'},]];


function Calculator(){
    return (
        <div>
            <div className = "container-sm">
                {/* esto de aca sera la pantalla de la calculadora */}
                <div className = "row">
                    <div className = "col calc-screen">
                    <h1 className = 'calc-screen-caption'>0</h1>
                    </div>
                </div>
                {/* Primera fila de operaciones */}
                <div className = "row">
                    <TextModifiersOperator simbolo = "C"/>
                    <TextModifiersOperator simbolo = "CE"/>
                    <Operators simbolo='MOD' operador = 'Mod'/>
                    <Operators simbolo='÷' operador = '/'/>
                </div>
                {/* Segunda fila de numeros y operaciones*/}
                <div className = "row">
                {
                numerosCalculadora[2].map((no,index) => (
                    <Numbers numero = {no.numero}/>
                ))
            }
                    <Operators simbolo='x' operador = '*'/>
                </div>
                {/* Tercera fila de numeros y operaciones*/}
                <div className = "row">
                {
                numerosCalculadora[1].map((no,index) => (
                    <Numbers numero = {no.numero}/>
                ))
            }
                    <Operators simbolo='-' operador = '-'/>
                </div>
                {/* Cuarta fila de numeros y operaciones*/}
                <div className = "row">
                    {
                numerosCalculadora[0].map((no,index) => (
                    <Numbers numero = {no.numero}/>
                ))
            }
                    <Operators simbolo='+' operador = '+'/>
                </div>
                {/* Quinta fila de numeros y operaciones*/}
                <div className = "row">
                    <NumberAddons operacion = '+/-'/>
                    <Numbers numero = {"0"}/>
                    <NumberAddons operacion = '.'/>
                    <EqualOperator simbolo = '='/>
                </div>
            </div>
            
        </div>
    );
}

export default Calculator;