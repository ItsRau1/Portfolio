import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { FooterBox } from "./styles";

export function Footer () {
    return (
        <FooterBox>
            <p>Desenvolvido por Ruan Dias</p>
            <div>
                <a href="https://www.linkedin.com/in/ruan-dias-611887238/" target="_blank" title="Linkedin">
                    <LinkedinLogo />
                </a>
                <a href="https://github.com/ItsRau1" target="_blank" title="Github">
                    <GithubLogo />
                </a>
            </div>
        </FooterBox>
    )
}