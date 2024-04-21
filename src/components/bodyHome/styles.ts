import styled from 'styled-components';

export const ContainerHome = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem 0 1rem;
`

export const ContentHome = styled.div`
    width: var(--ContenWdt);
    height: 8rem;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3.4rem;
    box-shadow: 0px 2px 4px 2px rgba(48, 46, 69, 0.06);

    @media (max-width: 768px) {
        padding: 2rem 2rem;
    }
`

export const BoxNameEnterprise = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;

    span {
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 1.3rem;
        color: #302E45;
        margin-right: 1.2rem;
    }

    img {
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }

        & + img {
            margin-left: 0.75rem;
        }
    }

    `
export const ContentLupa = styled.div`
    width: var(--ContenWdt);
    height: 2.5rem;
    border-bottom: 2px solid #BBB8D9;

    input {
        border: none;
        width: 90%;
        height: 100%;
        margin-left: 5px;
        right: 0;
    }

    div {
        height: 100%;
        display: flex;
        align-items: flex-end;
        cursor: pointer;

        img {
            margin-right: 1.4rem;
        }

        p {
            font-family: Inter, sans-serif;
            font-weight: 400;
            font-size: 1rem;
            color: #302E45;
        }
    }
`

export const ContentStatus = styled.div<{ openModalDelete: boolean }>`
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: fit-content;

    div {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    img {
        margin-left: 15px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        flex-direction: row;
        height: fit-content;

        div {
            flex-direction: column;
        }

        img {
            margin: 4.5px 0 4.5px 10px;
        }
    }

    @media (max-width: 450px) {
        display: ${props => (props.openModalDelete ? `none` : `flex`)};
    }

`

export const Status = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: fit-content;
    padding: 5px 15px;
    border: 1px solid #BBB8D9;
    border-radius: 25px;

    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    color: #302E45;

    & + div {
        margin-left: 15px;
    }

    @media (max-width: 768px) {
        & + div {
            margin-left: 0px;
            margin: 5px 0;
        }
    }
    
`

export const ContainertLupa = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

`