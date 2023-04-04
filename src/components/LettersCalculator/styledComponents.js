import styled from 'styled-components'

export const Maincontainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-size:cover;
    background-image:linear-gradient(to right,#1d976c,#93f9b9);
    min-height:100vh;
    @media screen and (max-width:768px){
        flex-direction:column;
    }
`

export const Con1=styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    margin-left:5%;
    @media screen and (max-width:768px){
        order:1;
        width:100%;
    }
`

export const Con2=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50%;
    @media screen and (max-width:768px){
        order:0;
        width:100%;
    }
`

export const Heading=styled.h1`
    color:white;
    font-weight:bold;
    @media screen and (max-width:768px){
        text-align:center;
    }
`

export const Label=styled.label`
    color:white;
    margin-bottom:10px;
    @media screen and (max-width:768px){
        margin-left:20%;
    }
`

export const Input=styled.input`
    outline:none;
    border:1px solid white;
    color:white;
    background-color:transparent;
    width:50%;
    padding:10px;
    border-radius:10px;
    @media screen and (max-width:768px){
        margin-left:20%;
    }
`

export const Para=styled.p`
    padding:10px;
    background-color:white;
    border-radius:10px;
    font-weight:bold;
    text-align:center;
    width:50%;
    color:#219a6f;
    @media screen and (max-width:768px){
        margin-left:20%;
    }
`

export const Img=styled.img`
    width:100%;
`