import Image from "../../assets/imageToAboutPage.png"
import { BoxToSkills, Container, MainHeader, SkillSection, TextToHeader, TittleSkill } from "./style"
import { DiCss3, DiGit, DiGithubFull, DiHtml5, DiJqueryLogo, DiJsBadge, DiReact } from "react-icons/di"
export function About () {
    return (
        <div>
            <Container>
                <MainHeader>
                    <TextToHeader>
                        <h1><strong>Sobre</strong> Mim</h1>
                        <p>
                        Olá meu caro, me chamo <strong>Ruan Dias</strong> moro em Biritiba-Mirim-<strong>SP</strong>.
                        Atualmente estou estudando desenvolvimento web na parte de <strong>front-end</strong>
                        com o auxílio de alguns cursos como por exemplo, <strong>"Ignite"</strong> da Rocketseat e <strong>"Discover"</strong>
                        Também da Rocketseat, onde consegui me <strong>aprofundar</strong> em conteúdos mais específicos
                        como o Framework de JavaScript em que esse site foi desenvolvido, o <strong>React</strong>.
                        </p>
                    </TextToHeader>
                </MainHeader>
                <TittleSkill>
                    <p>Minhas <strong>Habilidades</strong></p>
                </TittleSkill>
                <SkillSection>
                    <BoxToSkills title="JavaScript">
                        <DiJsBadge />
                    </BoxToSkills>
                    <BoxToSkills title="React">
                        <DiReact />
                    </BoxToSkills>
                    <BoxToSkills title="JQuery">
                        <DiJqueryLogo />
                    </BoxToSkills>
                    <BoxToSkills title="Git">
                        <DiGit />
                    </BoxToSkills>
                </SkillSection>
            </Container>
        </div>
    )
}