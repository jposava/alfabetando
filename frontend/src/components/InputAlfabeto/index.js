import React, { useState } from 'react';
import * as S from './style';


let timeCronometro = null;

const InputAlfabeto = () => {
    let[valueInput, setValueInput] = useState('');
    const [alfabetoInput] = useState(['a',
                    'ab','abc','abcd','abcde','abcdef','abcdefg',
                    'abcdefgh','abcdefghi','abcdefghij','abcdefghijk',
                    'abcdefghijkl','abcdefghijklm','abcdefghijklmn',
                    'abcdefghijklmno','abcdefghijklmnop','abcdefghijklmnopq',
                    'abcdefghijklmnopqr','abcdefghijklmnopqrs','abcdefghijklmnopqrst',
                    'abcdefghijklmnopqrstu','abcdefghijklmnopqrstuv','abcdefghijklmnopqrstuvw',
                    'abcdefghijklmnopqrstuvwx','abcdefghijklmnopqrstuvwxy','abcdefghijklmnopqrstuvwxyz']);
    
    let [alfabetoFull, setAlfabetoFull] = useState([]);

    let [count, setCount] = useState(0);
    let [inputColor, setInputColor] = useState(true);

    const copyAlfabetoFull = [...alfabetoFull];

    const takeValueInput = ev => {
        (setValueInput(ev.target.value));
        if((ev.target.value === alfabetoInput[0]) && (!hasPlayCronometro)) {
            toggleCronomentro();
        }
        //ADICIONA VALOR AO VETOR alfabetoInput
        if(count === 0){
            if(ev.target.value === alfabetoInput[count]){
                copyAlfabetoFull[0] = ev.target.value;
                setCount(count + 1);
            }
        }else{
            if(ev.target.value === alfabetoInput[count]){
                copyAlfabetoFull[count] = ev.target.value;
                setCount(count + 1);
            }
        }
        setAlfabetoFull(copyAlfabetoFull);

        //VERIFICA SE UM INDICE DO VETOR JA FOI DIGITADO
        if(copyAlfabetoFull.indexOf(ev.target.value) === -1){
            setInputColor(false);
        }else{
            setInputColor(true);
        }

        //VERIFICA SE O ALFABETO FOI DIGITADO POR COMPLETO
        if(copyAlfabetoFull[25] === alfabetoInput[25]){
            pauseCronometro();
            setAlfabetoFull([]);
            setCount(0);
        }
    }

    const Desistir = () => {
        setValueInput('');
        setAlfabetoFull([]);
        setCount(0);
        zerarCronometro();
    }

    //CÓDIGO DO CRONOMETRO

    let [milliseconds, setMilliseconds] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);

    const cronometroInitial = [minutes,seconds,milliseconds];

    let [cronometro, setCronometro] = useState(cronometroInitial);
    let [hasPlayCronometro, setHasPlayCronometro] = useState(false);

    const startCronometro = () => {
        const interval = 10; //10ms
        timeCronometro = setInterval(() => {      
        setMilliseconds(milliseconds++);

        if(milliseconds === 100){
            setSeconds(seconds++);
            milliseconds = 0;
        }

        if(seconds === 60){
            setMinutes(minutes++);
            seconds = 0;
        }
        setCronometro([minutes, seconds, milliseconds]);
        }, interval);
    };

    const pauseCronometro = () => {
        clearInterval(timeCronometro);
        setMinutes(cronometro[0]);
        setSeconds(cronometro[1]);
        setMilliseconds(cronometro[2]);
        setHasPlayCronometro(false);
    };

    const toggleCronomentro = () => {
        if(!hasPlayCronometro) {
            startCronometro();
        }
    };

    const zerarCronometro = () => {
        clearInterval(timeCronometro);
        setMinutes(0);
        setSeconds(0);
        setMilliseconds(0);
        setCronometro([0,0,0]);
        setHasPlayCronometro(false);
    };

    const painelCronometro = time => {
        const minutes = time[0] > 9 ? time[0] : `0${time[0]}`;
        const seconds = time[1] > 9 ? time[1] : `0${time[1]}`;
        const milliseconds = time[2] > 9 ? time[2] : `0${time[2]}`;
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return(
        <S.Container>
        <S.Cronometro>
            <h1>{painelCronometro(cronometro)}</h1>
            <span></span>
            <h3>Comece a digitar para iniciar</h3>
        </S.Cronometro>
            <S.TopSide actived={inputColor}>
                <h2>{alfabetoInput[25]}</h2>
                <input type='text' id='input' maxLength='26' onChange={takeValueInput} value={valueInput} />
            </S.TopSide>
            <S.BottomSide>
                <button id='reset' onClick={Desistir}>Desistir</button>
            </S.BottomSide>
        </S.Container>
        
    );
}

export default InputAlfabeto;