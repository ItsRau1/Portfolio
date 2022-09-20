import { ContactBox, Container,HeaderBox, LinkBox, MainBox, MainSectionImage, MainSectionText, SectionImage, SectionText, TextAutoWriting } from "./style";
import Typewriter from "react-typewriter-animate";

import logo from "../../assets/home-main.png"
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";


export function Home () {
    return (
        <div>
        <Container>
            <HeaderBox>
                <SectionText>
                    <div>
                        <p><strong>Ola</strong>, como vai?</p>
                        <p>Sou Ruan Dias</p>
                    </div>

                    <TextAutoWriting>
                        <Typewriter 
                        loop = {true}
                        dataToRotate={[
                            [{ type: "word", text: "Desenvolvedor Web" }],
                            [{ type: "word", text: "Front-end" }],
                        ]}
                        
                        />
                    </TextAutoWriting>
                </SectionText>

                <SectionImage>
                    <img src={logo} alt=""/>
                </SectionImage>
            </HeaderBox>
            <MainBox>
                <MainSectionText>
                    <h1>INTRODUÇÃO</h1>
                    <p><strong>Programação</strong> e algo que me instiga todo dia a aprender algo <strong>novo</strong> e sempre estar inovando.</p>
                    <p>Entendo muito bem a linguagem <strong>JavaScript</strong>, onde desde o início já consegui aprender de maneira fácil e <strong>orgânica</strong>.</p>
                    <p>Atualmente estou em busca de um <strong>primeiro</strong> emprego no ramo de desenvolvimento Web na parte de <strong>Front-End</strong>.</p>
                    <p>Sempre que posso me descrevo como um <strong>apaixonado</strong> por tecnologia e em especial pela parte de <strong>desenvolvimento</strong>, gosto muito da sensação de sempre estar <strong>aprendendo</strong> coisas novas, e esta área que escolhi me proporciona muito disso.</p>
                </MainSectionText>
            </MainBox>
            <ContactBox>
                <h1>MINHAS <strong>REDES</strong></h1>
                <p>Seja livre para se <strong>conectar</strong> comigo</p>
                <LinkBox>
                    <a href="https://github.com/ItsRau1" target="_blank" title="Github">
                        <GithubLogo size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ruan-dias-611887238/" target="_blank" title="Linkedin">
                        <LinkedinLogo size={24} />
                    </a>
                    <a href="mailto:ruan.dias77@outlook.com" target="_blank" title="E-mail">
                        <EnvelopeSimple size={24} />
                    </a>
                </LinkBox>
            </ContactBox>
        </Container>
            </div>
    )
}