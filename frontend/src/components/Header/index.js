import React from 'react';
import * as S from './style';

//IMAGE
import logo from '../../assets/logo.png';

function Header(){
    return(
        <S.Container>
            <img src={logo} alt='Logo Alfabetando' />
        </S.Container>
    );
}

export default Header;