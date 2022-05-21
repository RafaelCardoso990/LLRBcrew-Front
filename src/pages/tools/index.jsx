
import axios from 'axios'
import {useEffect,useContext} from 'react'
import { ParamContext } from '../../assets/context/ParamContext'

import { Main, Header, Section, Description } from './style'

function Tools(){
    const {param} = useContext(ParamContext);
    console.log(param)
    
    useEffect(() => {
        if (param) {
        const promise = axios({
            method: "GET",
            url: `https://llrb-crew.herokuapp.com/content/${param}`,
            headers: {Authorization: `Bearer 5b9317e4-6674-458f-95ed-68ba35de3e69`}
        });

        promise.then(({data}) => {
            console.log(data)
        });
        promise.catch((e)=>{
            console.log(e)
        })}
    }, [param]);

    return(        
        <Main>
            <Header>
                <div>
                    <p>Escolha</p>
                </div>
            </Header>
            <Section>
                <Description>

                </Description>                
            </Section>
        </Main>             
    )
}

export default Tools;

