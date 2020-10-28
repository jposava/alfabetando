import React, { useState } from 'react';
import * as S from './style';

//COMPONENTS
import RankingNames from '../RankingNames';

//ICONS
import add from '../../assets/add.png';
import cancel from '../../assets/cancel.png';

export default function Ranking(){

    let [Visible, setVisible] = useState(false);
    let [SameName, setSameName] = useState(false);

    (function(){
        if(Visible === false){
            SameName = false;
        }
    })();

    let [valueInputName, setValueInputName] = useState("");
    const ValueName = ev => {
        setValueInputName(ev.target.value);
    }

    let [alertName, setAlertName] = useState('');

    function NameValidation(){
        if(valueInputName === 'joao'){
            setSameName(SameName = true);
            setAlertName(alertName = 'Este nome já está em uso!');
        }else if(valueInputName === ''){
            setSameName(SameName = true);
            setAlertName(alertName = 'Digite o nome do Jogador!');
        }else{
            setVisible(Visible = false);
            setValueInputName(valueInputName = '');
            setAlertName(alertName = 'Digite o nome do Jogador!');
            setSameName(SameName = false);
        }
    }

    function Cancel(){
        setVisible(Visible = false);
        setSameName(SameName = false);
        setValueInputName(valueInputName = '');
    }

    return(
        <S.Container>
        <S.AddPlayerContainer actived={Visible}>
            <S.AddPlayer>
                <input type='text' id="name" maxLength="20" placeholder='Nome do Jogador' value={valueInputName} onChange={ValueName} />
                <button onClick={NameValidation}>
                    <img src={add} alt='Star'/>
                </button>
                <button onClick={Cancel} id="cancel">
                    <img src={cancel} alt='cancel'/>
                </button>
            <S.AddPlayerAlert sameName={SameName}>
                <p>{alertName}</p>
            </S.AddPlayerAlert>
            </S.AddPlayer>
        </S.AddPlayerContainer>
            <h3>RANKING</h3>
            <S.Scroll>
                <RankingNames Name='João Pedro' Position='1' Time='05.36' />
            </S.Scroll>
            <S.AddName>
                <button onClick={() => setVisible(Visible = true)}>
                    <img src={add} alt='add' />
                </button>
            </S.AddName>
        </S.Container>
    );
}