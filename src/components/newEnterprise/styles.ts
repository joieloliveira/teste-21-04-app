import styled from 'styled-components';

export const InformationBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem 0 1rem;
    flex-direction: column;

    span{
        font-size: 18px;
        font-family: Inter, sans-serif;
        font-weight: 700;
        color: #302E45;
    }

    .MuiFormControl-root css-1nrlq1o-MuiFormControl-root{
        height: 60px
    }

`
export const BoxInformation = styled.div`
    display: flex;
    width: 622px;
    background: #FFFFFF;
    border-radius: 8px;
    Padding: 32px;
    flex-direction: column;

    div{
        width: 100%;
        margin: 10px 0 0 0;
    }

    p{
        font-size: 14px;
        font-family: sans-serif;
        color: #302E45;
    }

    @media (max-width: 630px) {
        width: 98%;
    }
`