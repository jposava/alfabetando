import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5px;
`

export const RankingName = styled.div`
    width: 500px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    padding: 5px;
    border: ${props => props.actived ? '2px solid #FFB941' : '1px solid #D5D5D5'};
    justify-content: space-between;
`

export const RankingLeft = styled.div`
    display: flex;
    font-weight: bold;
    color: #D5D5D5;
    align-items: center;
    margin-left: 10px;

    span{
        height: 45px;
        border: 1px solid #D5D5D5;
        margin: 0 20px;
    }

    h3{
        color: #000;
    }
`

export const RankingRight = styled.div`
    display: flex;
    align-items: center;
    
    h4{
        margin-right: 10px;
        color: #b3b3b3;
    }
`