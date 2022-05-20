
import { Main, Header, Section, Description } from './style'
import {Link} from 'react-router-dom'

import fruit from '../../images/fruit.png'
import ableton from '../../images/ableton.png'
import pro from '../../images/ProTools.png'
function Choice(){
    return(        
        <Main>
            <Header>
                <div>
                    <p>Escolha</p>
                </div>
            </Header>
            <Section>
                <Description>Escolha sua ferramenta para aprender a fazer beats:</Description>
                <Link to="/tool"><div><img src={fruit} alt="fruit" /><p>FLStudio</p></div></Link>
                <Link to="/tool"><div><img src={ableton} alt="fruit" /><p>Ableton</p></div></Link>
                <Link to="/tool"><div><img src={pro} alt="fruit" /><p>ProTools</p></div></Link>
            </Section>
        </Main>             
    )
}

export default Choice;