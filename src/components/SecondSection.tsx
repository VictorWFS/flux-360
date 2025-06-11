import '../global.css'
import { ImageContent } from './ImageContent'
import chave from '../assets/chave.png'
import setacrescimento from '../assets/setacrescimento.png'
import sincronização from '../assets/sincronização.png'
import Ferramentas from '../assets/Ferramentas.png'
import SyncImage from '../assets/SyncImage.png'
import GestaoPessoal from '../assets/GestaoPessoal.png'

export const SecondSection = () => {
    return (    
        <div className='SecondSectionContainer'>
            <div className='SecondSectionTitleContainer'>
                <h2>O que a Flux-360 oferece?</h2>
            </div>
            <div className='SecondSectionContent'>
                <div className='TitleContentSecondSection'>
                    <div>
                        <ImageContent StyleClass='ImageContentStyle' srcPath={chave} altText='Representação da imagem'/>
                    </div>
                    <div>
                        <h3>Ferramentas intuitivas e dinâmicas</h3>
                        <br />
                        <p>Organize sua rotina com ferramentas interativas que se adaptam ao seu fluxo de vida. 
                            Controle tarefas, metas e hábitos diários de forma simples, sem complicações.</p>
                            <ImageContent StyleClass='ImageDescribeContentStyle' srcPath={Ferramentas} altText='Representação da imagem'/>
                    </div>
                </div>
                <div className='TitleContentSecondSection'>
                    <div>
                        <ImageContent StyleClass='ImageContentStyle' srcPath={sincronização} altText='Representação da imagem'/>
                    </div>
                    <div>
                        <h3>Praticidade e sincronização</h3>
                        <br />
                        <br />
                        <p>Mantenha suas informações sempre atualizadas em qualquer lugar. 
                            Acesse seus objetivos, notas e cronogramas com apenas alguns cliques, no celular ou computador.
                        </p>
                        <ImageContent StyleClass='ImageDescribeContentStyle' srcPath={SyncImage} altText='Representação da imagem'/>
                    </div>

                    </div>
                <div className='TitleContentSecondSection'>
                    <div>
                        <ImageContent StyleClass='ImageContentStyle' srcPath={setacrescimento} altText='Representação da imagem'/> 
                    </div>
                    <div>
                        <h3>Gestão pessoal otimizada</h3>
                        <br />
                        <br />
                        <p>Planeje, acompanhe e evolua todas as áreas da sua vida em um só lugar. 
                            Defina metas, gerencie suas finanças e crie hábitos para alcançar seus objetivos.</p>
                        <ImageContent StyleClass='ImageDescribeContentStyle' srcPath={GestaoPessoal} altText='Representação da imagem'/> 
                    </div>

                </div>
            </div>
        </div>
    )
}