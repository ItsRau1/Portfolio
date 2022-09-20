import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
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
                <a href="https://wa.me/+5511999122243" target="_blank" title="WhatsApp">
                    <WhatsappLogo />
                </a>
            </div>
        </FooterBox>
    )
}