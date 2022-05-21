
import axios from 'axios'
import {useEffect,useContext, useState} from 'react'
import { ParamContext } from '../../assets/context/ParamContext'
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";

import { Main, Header, Section, Description, Footer, ButtonLeft, ButtonRight, Video } from './style'

function Tools(){
    const {param,level,setLevel} = useContext(ParamContext);
    const token = localStorage.getItem("token").toString()
    console.log(token)
    console.log(param)
    
    
    const [data, setData] = useState({url: ""})
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        if (param) { 
        const promise = axios.get(`https://llrb-crew.herokuapp.com/content/${param}`,{
            headers: {Authorization: `Bearer ${token}`}
        })

        promise.then((response) => {
            console.log(response.data)
            setData(response.data)
            
        });
        promise.catch((e)=>{
            console.log(e)
        })}
    }, [level,loading]);

    async function mudaLevel (param) {
        setLoading(true);
        setLevel(param);
        await axios.post(`https://llrb-crew.herokuapp.com/level/${param}`,{level:param},{
            headers: {Authorization: `Bearer ${token}`}
        })
        setLoading(false);
    }
    

    return(        
        <Main>
            <Header>
                <div>
                    <p>{param}</p>
                </div>
            </Header>
            <Section>                
                <Description>{data.description}</Description>
                <Video><iframe src={data.url.replace("watch?v=","embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Video>
            </Section>
            <Footer>
                <ButtonLeft onClick={()=>mudaLevel("1")}><BsArrowLeftSquare/></ButtonLeft>    
                <ButtonRight onClick={()=>mudaLevel('2')}><BsArrowRightSquare/></ButtonRight>
            </Footer>
        </Main>             
    )
}

export default Tools;

