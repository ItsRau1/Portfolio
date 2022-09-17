import { Container, DownloadSection, FormSection, TitleText } from "./style";
import axios from "axios";

import { useForm } from "react-hook-form"

interface dataType {
    object: {
        Name: string,
        Contact: string,
        Mesage?: string,
    }


}

export function Resume () {

    const { register, handleSubmit, reset } = useForm()
 
    async function Submit (data:any) {

        await axios.post('https://discordapp.com/api/webhooks/1020405321790918738/AAnHxnLIGxntJfKC3L-nyHajlUHyS_IeynO7HSj3Z7qSBfOPCpvri5NSnmtnm9-pEdtK', {
            content: `${data.Name} | ${data.Contact} | ${data.message}`
          })
          .then(function (response) {
            console.log(response);
            reset()
          })
          .catch(function (error) {
            console.log(error);
          });

            
    }
    return (
        <div>
            <Container>
                <DownloadSection>
                    <h1>Meu CV</h1>
                    <a href="">
                        Download
                    </a>
                </DownloadSection>
                <TitleText>
                    <h1>Entre em contato Comigo!</h1>
                </TitleText>
                <FormSection>
                    <form onSubmit={handleSubmit(Submit)}>
                        <input type="text" placeholder="Seu Nome" {...register("Name")} required/>
                        <input type="text" placeholder="Telefone | E-mail" {...register("Contact")} required/>
                        <input type="text" placeholder="Mensagem" {...register("message")}/>
                        <button type="submit">
                            Enviar
                        </button>
                    </form>
                </FormSection>
            </Container>
        </div>
    )
}