import '../global.css'

interface ImageContentProps {
    srcPath: string,
    altText: string,
    StyleClass: string
}

export const ImageContent = ({srcPath, altText, StyleClass}: ImageContentProps) => {
    return (
        <img className={StyleClass} src={srcPath} alt={altText} />
    )
}