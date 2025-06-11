import { Header } from "./header";
import '../global.css'
import { FirstSection } from "./FirstSection";
import templateFlux from "../assets/templateFlux.png"
import LogoFlux from "../assets/LogoFlux.png"
import { SecondSection } from "./SecondSection";
import { ThirdSection } from "./ThirdSection";
import AulaUm from "../assets/AulaUm.png"
import { FourthSection } from "./FourthSection";
export const Container = () => {
    return (
        <div className="container">
            <Header imageSrc={LogoFlux} altText="Imagem da logo" />
            <FirstSection imageSrc={templateFlux} altText="Imagem de exemplo"/>
            <SecondSection/>
            <ThirdSection srcPath={AulaUm} altText="Imagem que representa" classImage="ThirdSectionContentImage"/>
            <FourthSection/>
        </div>
    )
}