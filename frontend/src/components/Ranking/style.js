import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3{
        font-weight: bold;
        color: #D5D5D5;
    }
`

export const AddName = styled.div`
    button{
    width: 510px;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    padding: 5px;
    background-color: #96EE90;
    justify-content: space-between;
    margin-bottom: 50px;
    margin-top: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    outline: none;
    border: none;
    }

    &:hover{
        opacity: 0.7;
    }
`

export const Scroll = styled.div`
    width: 50%;
    height: 360px;
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar-track {
    background-color: #fff;
    }
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: #D5D5D5;
        border-radius: 20px;
    }
`

export const AddPlayerContainer = styled.div`
    visibility: ${props => props.actived ? 'visible' : 'hidden'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;

    &::after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #000;
        opacity: 0.9;
        z-index: -1;
    }

    
`

export const AddPlayer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 700px;
    height: 90px;

    input{
        width: 500px;
        height: 40px;
        border-radius: 10px;
        padding: 10px;
        border: none;
        outline: none;
        margin-right: 10px;
        font-weight: bold;
        font-size: 18px;
    }

    button{
        background-color: #96EE90;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        padding: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        margin-right: 10px;

        &:hover{
            opacity: 0.7;
        }
    }

    #cancel{
        background-color: #FF4141;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        padding: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        margin-right: 10px;

        &:hover{
            opacity: 0.7;
        }
    }
`

export const AddPlayerAlert = styled.div`
    position: absolute;
    bottom: -25px;
    left: 20px;

    p{
        visibility: ${props => props.sameName ? 'visible' : 'hidden'};
        color: #FF4141;
    }
`