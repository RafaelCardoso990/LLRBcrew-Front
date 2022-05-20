
import { Main, Header, Section } from './style'

import fruit from '../../images/fruit.png'

function Choice(){
    return(
        
        <Main>
            <Header>
                <div>
                    <p>Escolha</p>
                </div>
            </Header>
            <Section>
                <p>Escolha sua ferramenta para aprender a fazer beats:</p>
                <img src={fruit} alt="fruit" />
                <img src={fruit} alt="fruit" />
                <img src={fruit} alt="fruit" />
            </Section>
        </Main>    
         
    )
}

export default Choice;