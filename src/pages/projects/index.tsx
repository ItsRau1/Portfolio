import { GithubLogo } from "phosphor-react";
import { BoxToProjects, Container, SectionToProjects, TextHeader } from "./style";
import example from '../../assets/avatar.png'

export function Projects () {
    return ( 
        <div>
            <Container>
                <TextHeader>
                    <h1>Meus Principais <strong>Projetos</strong></h1>
                </TextHeader>
                <SectionToProjects>
                    <BoxToProjects>
                        <img src={example} alt="" />
                        <h5>Github Blog</h5>
                        <p>Desenvolvido inspirado em um projeto do curso Ignite da Rocketseat, integrado com a API publica do GITHUB, para mais detalhes do projeto vide o README do GitHub.</p>
                        <a href="https://github.com/ItsRau1/Git-Hub-Blog">
                            <GithubLogo size={20}/>
                            GitHub
                        </a>
                    </BoxToProjects>
                    <BoxToProjects>
                        <img src={example} alt="" />
                        <h5>Timer Ignite</h5>
                        <p>Desenvolvido acompanhando o curso Ignite da Rocketseat, projeto baseado no método de estudo pomodoro, com um cronometro centralizado, no projeto também foi trabalhado rotas com o React-router-Dom, para mais detalhes do projeto vide o README do GitHub.</p>
                        <a href="https://github.com/ItsRau1/Timer-Ignite">
                            <GithubLogo size={20}/>
                            GitHub
                        </a>
                    </BoxToProjects>
                    <BoxToProjects>
                        <img src={example} alt="" />
                        <h5>DT Money Ignite</h5>
                        <p>Desenvolvido acompanhando o curso Ignite da Rocketseat, projeto feito para controlar finanças diferenciando entradas e saídas, e possibilitando a adição de novas transações e a pesquisa, para mais detalhes do projeto vide o README do GitHub.</p>
                        <a href="https://github.com/ItsRau1/DT-Money-Ignite">
                            <GithubLogo size={20}/>
                            GitHub
                        </a>
                    </BoxToProjects>
                    <BoxToProjects>
                        <img src={example} alt="" />
                        <h5>Pokédex</h5>
                        <p>Desenvolvido inspirado em vídeos no youtube, com o intuito de aprender sobre API's criado consumindo a PokeAPI, para mais detalhes do projeto vide o README do GitHub.</p>
                        <a href="">
                            <GithubLogo size={20}/>
                            GitHub
                        </a>
                    </BoxToProjects>
                    <BoxToProjects>
                        <img src={example} alt="" />
                        <h5>GN International Business</h5>
                        <p>Desenvolvido do zero um site de apresentação da empresa com opções em Inglês e Espanhol, também fui responsável por hospedar no domínio solicitado e cuidar da segurança.</p>
                        <a href="">
                            <GithubLogo size={20}/>
                            GitHub
                        </a>
                    </BoxToProjects>
                </SectionToProjects>
            </Container>
        </div>
    )
}