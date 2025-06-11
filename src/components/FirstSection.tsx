import '../global.css'
import './Button'
import { AccessButton } from './Button'
interface FirstSectionProps {
    imageSrc: string,
    altText: string
}


export const FirstSection = ({imageSrc, altText}: FirstSectionProps) => {
    return (
        <div className='FirstSectionContainer'>
            <div className='TemplateContentTitleContainer'>
                <h1>Não perca o fluxo da sua vida.</h1>
                <div className='TextContent'>
                <br />
                <p>
                    Organizar suas tarefas nunca
                    foi tão fácil. O template notion Flux 360 é 
                    intuitivo e dinâmico para otimizar sua <span className='styledText'>Auto Gestão.</span>
                </p>
                <br />
                <br />
                <AccessButton/>
                </div>
                <br />
            </div>
            <div className='TemplateContainer'>
                <div className='SeparateLine'></div>
                <div><img src={imageSrc} alt={altText} className='templateImage'/></div>
            </div>
           
        </div>
    )
}