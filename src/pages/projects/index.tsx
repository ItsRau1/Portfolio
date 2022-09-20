import { GithubLogo } from "phosphor-react";
import { BoxToProjects, Container, SectionToProjects, TextHeader } from "./style";

import DtMoneyIgnite from '../../assets/dt-money-ignite.png'
import GitHubBlog from '../../assets/git-hub-blog.png'
import TimerIgnite from '../../assets/timer-ignite.png'
import Pokedex from '../../assets/pokedex.png'
import ReduxTasks from '../../assets/to-do-list.png'


export function Projects () {
    return ( 
        <div>
            <Container>
                <TextHeader>
                    <h1>Meus Principais <strong>Projetos</strong></h1>
                </TextHeader>
                <SectionToProjects>
                    <BoxToProjects>
                        <div>
                        <img src={GitHubBlog} alt="" />
                        <h5>Github Blog</h5>
                        <p>Desenvolvido inspirado em um projeto do curso Ignite da Rocketseat, integrado com a API publica do GITHUB, mostrando os primeiros perfis criados na rede social, e tambem possibilitando a pesquisa de qualquer usuario cadastrado, para mais detalhes do projeto vide o README do GitHub.</p>
                        </div>
                        <a href="https://github.com/ItsRau1/Git-Hub-Blog">
                            <GithubLogo size={20}/>
                            GitHub
                        </a>
                    </BoxToProjects>
                    <BoxToProjects>
                        <img src={TimerIgnite} alt="" />
                        <h5>Timer Ignite</h5>
                        <p>Desenvolvido acompanhando o curso Ignite da Rocketseat, projeto baseado no método de estudo pomodoro, com um cronometro centralizado, no projeto também foi trabalhado rotas com o React-router-Dom, para mais detalhes do projeto vide o README do GitHub.</p>
                        <a href="https://github.com/ItsRau1/Timer-Ignite">
                            <GithubLogo size={20}/>
                            GitHub
                        </a>
                    </BoxToProjects>
                    <BoxToProjects>
                        <img src={DtMoneyIgnite} alt="" />
                        <h5>DT Money Ignite</h5>
                        <p>Desenvolvido acompanhando o curso Ignite da Rocketseat, projeto feito para controlar finanças diferenciando entradas e saídas, e possibilitando a adição de novas transações e a pesquisa, para mais detalhes do projeto vide o README do GitHub.</p>
                        <a href="https://github.com/ItsRau1/DT-Money-Ignite">
                            <GithubLogo size={20}/>
                            GitHub
                        </a>
                    </BoxToProjects>
                    <BoxToProjects>
                        <img src={Pokedex} alt="" />
                        <h5>Pokédex</h5>
                        <p>Desenvolvido inspirado em vídeos no youtube, com o intuito de aprender sobre API's criado consumindo a PokeAPI, para mais detalhes do projeto vide o README do GitHub.</p>
                        <a href="">
                            <GithubLogo size={20}/>
                            GitHub
                        </a>
                    </BoxToProjects>
                    <BoxToProjects>
                        <img src={ReduxTasks} alt="" />
                        <h5>Lista de tarefas</h5>
                        <p>Desenvolvido para a equipe Redux Studio, onde fui encarregado de fazer um sistema de lista de tarefas em JavaScript, seguindo uma UI, para mais detalhes do projeto vide o README do GitHub.</p>
                        <a href="https://github.com/ItsRau1/Redux-Tasks">
                            <GithubLogo size={20}/>
                            GitHub
                        </a>
                    </BoxToProjects>
                </SectionToProjects>
            </Container>
        </div>
    )
}