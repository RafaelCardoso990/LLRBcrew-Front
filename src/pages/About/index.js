import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function About() {

    return (
        <AboutBody>
            <AboutHeader>
                <h1>Sobre o Beatmaking</h1>
            </AboutHeader>
            <AboutMain>
                <h1>O que é Beatmaking?</h1>
                <h2>Beatmaking é o processo de construção de instrumentais com elementos percussivos a partir de uma melodia. Ele sequencia loops compostos com instrumentação ao vivo e/ou virtual, sampleando outros artistas ou misturando essas duas formas.</h2>
                <h1>História do Beatmaking</h1>
                <h2>Antes de falarmos sobre o Beatmaking em si, é essencial falar sobre seus principais precursores. Nos anos 70, juntamente com o Hip Hop, surgiram os DJs de Hip Hop e estes eram basicmente DJs que tocavam músicas de outros gêneros músicais já existentes e evoluíram para produtores a partir do momento que começaram a remixar essas músicas. Essa remixagem se dava principalmente a partir de técnicas como o Break e os Loops, nas quais eles isolavam a “melhor parte”, o clímax (Break) de uma determinada música que eram apenas instrumentais (de onde surgiu também a chamada Breakdance), e repetia-os várias vezes (Loops), juntamente com o Scratch, que se tratava de uma técnica na qual em certos momentos da música eles giravam os discos de vinil ao contrário gerando um som característico das músicas de Hip Hop dos anos 70.</h2>
                <h2>Estas técnicas não eram músicas em sentido estrito, mas ritmos “improvisados” em festas nichadas dos anos 70, festas com 12 horas de duração muitas vezes. Percebendo o sucesso desses ritmos, surgiram gravadoras interessadas em transformar esses ritmos em músicas comerciais, mas havia um problema... Como transformar todos aqueles sons que eram tocados durante horas de forma totalmente não coesa em uma música de poucos minutos com um formato comercial? Houveram algumas tentativas nas quais eles começaram a gravar os sons daquelas festas e depois os cortavam e compactavam de forma a transformá-los em músicas comerciais, mas estavam enfrentando muitas dificuldades no processo, tanto no sentido artístico de adequação quanto no jurídico, pois começaram a enfrentar problemas relacionados a direitos autorais, já que os Breaks eram partes de músicas já existentes.</h2>
                <h2>Mas em meados da década de 1980, surgiu uma nova tecnologia que permitiria que o Hip Hop amadurecesse como gênero musical: samplers digitais. Essa tecnologia também solucionou o problema das gravadoras, pois permitia que os produtores criassem sons de instrumentos músicais de forma digital, tendo uma capacidade de manipulação e transformação destes muito maior.</h2>
                <h2>Com a criação destes samplers surgiram os famosos beatmakers, os produtores das beats. E assim se estabeleceu o processo de evolução do Beatmaking até como o conhecemos hoje, com instrumentos muito mais complexos e tecnológicos.</h2>
            </AboutMain>
            <Button>
                <Link to="/choice" style={{ textDecoration: 'none' }}>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>
            </Button>
        </AboutBody>
    );
}

const AboutBody = styled.div`
    width: 100vw;
    height: 100%;
    background: #180B40;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const AboutHeader = styled.header`
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;

    h1 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 30px;
        line-height: 32px;
        color: #000000;
    }
`;
