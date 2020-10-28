import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TopSide = styled.div`
    width: 50%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #input{
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 10px;
        outline: none;

        font-size: 23px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 20px;
        color: ${props => props.actived ? 'green' : 'red'};

        -webkit-box-shadow: 0px 5px 6px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 5px 6px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 5px 6px -4px rgba(0,0,0,0.75);

        @media only screen and (max-width : 400px)
        { 
            font-size: 18px;
            letter-spacing: 10px;
         }
    }

    h2{
        width: 100%;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 21px;
        color: #E5E5E5;
        margin-top: -10px;

        @media only screen and (max-width : 1100px)
        { 
            font-size: 16px;
            letter-spacing: 7px;
         }

         @media only screen and (max-width : 600px)
        { 
            font-size: 10px;
            letter-spacing: 5px;
         }
    }
`

export const BottomSide = styled.div`
    width: 50%;
    min-width: 300px;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    #reset{
        width: 80px;
        height: 30px;
        border: none;
        border-radius: 10px;
        outline: none;
        cursor: pointer;
        background-color: #FF4141;
        
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;

        &:hover{
            opacity: 70%;
        }
    }
`

export const Cronometro = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    h1{
        color: #D5D5D5;
        font-weight: bold;
        font-size: 50px;
    }

    h3{
        color: #E5E5E5;
        font-size: 14px;
        background-color: #fff;
        padding: 10px 30px;
        position: relative;
        bottom: 33px;
    }

    span{
        border: 1px solid #E5E5E5;
        width: 100%;
    }
`