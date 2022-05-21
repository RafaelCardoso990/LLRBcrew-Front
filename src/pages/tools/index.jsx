
import axios from 'axios'
import {useEffect,useContext} from 'react'
import { ParamContext } from '../../assets/context/ParamContext'
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";

import { Main, Header, Section, Description, Footer, ButtonLeft, ButtonRight, Video } from './style'

function Tools(){
    const {param} = useContext(ParamContext);
    console.log(param)
    
    useEffect(() => {
        if (!param) {

        }   
        const promise = axios({
            method: "GET",
            url: `https://llrb-crew.herokuapp.com/content/${param}`,
            headers: {Authorization: `Bearer b751b4d4-bad8-432d-9e2d-220867bbdb4b`}
        });

        promise.then(({response}) => {
            console.log(response.data)
        });
        promise.catch((e)=>{
            console.log(e)
        })
    }, []);

    return(        
        <Main>
            <Header>
                <div>
                    <p>{param}</p>
                </div>
            </Header>
            <Section>
                <Video><iframe src="https://www.youtube.com/embed/Rq5SEhs9lws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Video>
            </Section>
            <Footer>
                <ButtonLeft><BsArrowLeftSquare/></ButtonLeft>    
                <ButtonRight><BsArrowRightSquare/></ButtonRight>
            </Footer>
        </Main>             
    )
}

export default Tools;

