import React from 'react';
import * as S from './style';

//ICONS
import star from '../../assets/star.png';

export default function RankingNames({Name, Position, Time}){
    let FirstPlace = false;
    if(Position === '1'){
        FirstPlace = true;
    }
    return(
        <S.Content>
            <S.RankingName actived={FirstPlace}>
                <S.RankingLeft>
                    <h4>{Position}º</h4>  
                    <span></span>
                    <h3>{Name}</h3>
                </S.RankingLeft>
                <S.RankingRight>
                    <h4>{Time}</h4>
                    {FirstPlace && <img src={star} alt='Adicionar'/>}
                </S.RankingRight>
            </S.RankingName>
        </S.Content>
    );
}