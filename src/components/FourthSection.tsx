import '../global.css'

export const FourthSection = () => {
    return (
        <div className="FourthSectionContainer">
            <div className='FourthSectionTitleContainer'>
                <h1 className='FourthSectionTitle'>Dores e Ganhos</h1>
                <h2 className='FourthSectionSecondTitle'>Veja as dores que o template resolverá:</h2>
            </div>
            <div className='FourthSectionContentContainer'>
                <div className='ContentListFourthSection'>
                    <div className='FirstContentFourthSection'>Falta de planejamento e organização</div>
                    <div className='FirstContentFourthSection'>Procrastinação e Improdutividade</div>
                    <div className='FirstContentFourthSection'>Estresse financeiro e Endividamento</div>
                    <div className='FirstContentFourthSection'>Falta de motivação e disciplina</div>
                </div>
                <div className='ContentListFourthSection'>
                    <div className='SecondContentFourthSection'>AutoGestão e Organização Inteligente</div>
                    <div className='SecondContentFourthSection'>Produtividade gerenciável e otimizada</div>
                    <div className='SecondContentFourthSection'>Gestão de Dívidas & Gastos</div>
                    <div className='SecondContentFourthSection'>Ferramentas para manter disciplina</div>
                </div>
            </div>
        </div>
    )
}