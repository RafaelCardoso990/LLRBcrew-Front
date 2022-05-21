import { useContext } from 'react'
import { Main, Header, Section, Description } from './style'
import {Link} from 'react-router-dom'
import { ParamContext } from '../../assets/context/ParamContext'

import fruit from '../../images/fruit.png'
import ableton from '../../images/ableton.png'
import pro from '../../images/ProTools.png'

function Choice(){
    const {setParam} = useContext(ParamContext)

    return(        
        <Main>
            <Header>
                <div>
                    <p>Escolha</p>
                </div>
            </Header>
            <Section>
                <Description>Escolha sua ferramenta para aprender a fazer beats:</Description>
                <Link to="/tool"><div><img src={fruit} alt="fruit" onClick={()=>setParam("flStudio")}/><p>FLStudio</p></div></Link>
                <Link to="/tool"><div><img src={ableton} alt="fruit" onClick={()=>setParam("abletonLive")} /><p>Ableton</p></div></Link>
                <Link to="/tool"><div><img src={pro} alt="fruit" onClick={()=>setParam("proTools")} /><p>ProTools</p></div></Link>
            </Section>
        </Main>             
    )
}

export default Choice;