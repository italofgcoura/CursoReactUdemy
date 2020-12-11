import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
max-width: 600px;
margin: 15px auto;
padding: 25px;
background: #ffffff;
`;

export const Owner = styled.header`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #0D2636;
width: 100%;
img{
    width: 150px;
    margin: 15px 0px;
}
p{
    text-align: justify;
}
`;

export const Loading = styled.div`
display: flex;
justify-content: center;
align-itens: center;
color: #ffffff;
margin: auto;
`;

export const BackButton = styled(Link)`
border: 0;
background: transparent;

`;

export const IssuesList = styled.ul`
margin-top: 30px;
padding-top: 30p;
border-top: 1px solid #0D2636;

li{

   
        margin-top: 12px;
   

    list-style: none;
    display: flex;
    padding: 15px;
    img{
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #0D2636;
        margin-right: 15px;
    }

    div{
        flex: 1;

        p{
            margin-top: 10px;
            font-size: 12px;
            color: #000000;
        }
        }

        strong{
            font-size: 15px;
            
            a{
                text-decoration: none;
                color: #222222;
                transition: 0.3s;
                &:hover{
                    color: #0071db;
                }
            }

            span{
                background:  #222222;
                color: #ffffff;
                border-radius: 4px;
                font-size: 12px;
                padding: 2px 5px;
                margin: 0px 5px
            }
        }


}
`;

export const PageActions = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

button{
    border: 0;
    background: #222222;
    color: #ffffff;
    padding: 5px;

    &:disabled{
        cursor: not-allowed;
        opacity: 0.5;
    }
}
`;

export const IssuesType = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

button{
    border: 0;
    background: #222222;
    color: #ffffff;
    padding: 5px;
    margin: 5px 10px;

    &:nth-child(${props => props.active + 1}){
        background: #0071db;
        color: #fff;
    }

}
`;