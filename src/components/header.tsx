import '../global.css'


interface HeaderProps {
    imageSrc: string,
    altText: string
}

export const Header = ({imageSrc, altText}: HeaderProps) => {
    return (
                <ul className='navbar'>
                    <li> <img src={imageSrc} alt={altText} className='FluxLogoImage' /> F L U X  - 3 6 0</li>
                </ul>
    )
}