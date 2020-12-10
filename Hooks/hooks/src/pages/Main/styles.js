import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
max-width: 700px;
background: #fff;
box-shadow: 0 0 20px rgba(0,0,0,0.2);
padding: 30px;
margin: 80px auto;

`;

export const Form = styled.form`
margin-top: 30px;
display: flex;
flex-direction: row;

    input{
    flex: 1;
    border: 1px solid ${props => (props.error ? '#FF0000' : '#ddd')};
    padding: 10px 15px;
    font-size: 17px;
    word-wrap: break-word;
    }

`
    ;

export const List = styled.ul`

    list-style: none;
    margin-top: 20px;

    li{
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & + li{
            border-top: 1px solid #0D2636;
        }

        a{
            color: #0D2636;
            text-decoration: none;
        }
    }

`;

// animação do botão

const animated = keyframes`

    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
background: #0D2636;
border: 0;
margin-left: 10px;
padding: 0 15px;
display: flex;
justify-content: center;
align-items: center;

&[disabled]{
    cursor: not-allowed;
    opacity: 0.5;
}

    ${props => props.loading &&
        css`
    svg{
        animation: ${animated} 2s linear infinite;
    }
    `}

`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`

margin-right: 10px;
background: transparent;
border: none;
color: #0D2636;
`;