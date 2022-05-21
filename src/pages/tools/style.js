import styled from "styled-components";


export const Main = styled.main`
    
`
export const Header = styled.header`
    div{
        background-color: white;
        width: 100vw;
        height: 100px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        justify-content: center;
        align-items:center;
    }

    p{           
        font-family: 'Fredoka', sans-serif;
        font-size: 45px;
        font-weight: bold;                   
    }
`
export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    

    img{
        background-color: white;
        width: 12em;
        margin-left: 10px;
        margin-bottom: 5px;
        border-radius: 15px;
    }

    div{
        display: flex;
        align-items: center;

    }

    p{               
        font-family: 'Fredoka', sans-serif;
        font-size: 25px;
        font-weight: bold;                  
        color: white;
        margin-left: 20px;
    }
`

export const Description = styled.h1` 
    font-family: 'Fredoka', sans-serif;
    font-size: 30px;
    font-weight: bold;  
    color: white;    
    text-align: center;
    margin-bottom: 50px;
    padding: 5px;
`
export const Footer = styled.footer`
    display: flex;

    svg{        
        color:white;
        font-size: 3em;
    }
`
export const ButtonLeft = styled.div`
    position: absolute;
    bottom: 120px;
    left: 35px;
`

export const ButtonRight = styled.div`
    position: absolute;
    bottom: 120px;
    right: 35px;
`
export const Video = styled.div`
    margin: 0 auto;
    margin-top: 50px;

    iframe{
        width: 80vw;
        height: 60vh;
        border-radius: 10px;
    }
`