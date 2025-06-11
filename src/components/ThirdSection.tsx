import '../global.css'

interface ThirdSectionProps {
    srcPath: string,
    altText: string,
    classImage: string
}


export const ThirdSection = ({srcPath, altText, classImage}: ThirdSectionProps) => {
    return (
        <div className="ThirdSectionContainer">
            <div className='TitleContainerThirdSection'>
                <div><h1>Nunca utilizou o Notion?</h1></div>
                <div><h1>Não se preocupe!</h1></div>
            </div>
            <div className='SubtitleThirdSectionContainer'>
                <h3 className='SubtitleThirdSection'>Confira o que vai aprender nas aulas!</h3>
            </div>
            <div className='ContentThirdSectionContainer'>
                <div className='ContentThirdSection'>
                    <img src={srcPath} alt={altText} className={classImage} />
                </div>
                <div className='ContentThirdSection'>
                    <img src={srcPath} alt={altText} className={classImage} />
                </div>
                <div className='ContentThirdSection'>
                    <img src={srcPath} alt={altText} className={classImage} />
                </div>
            </div>
        </div>
    )
}