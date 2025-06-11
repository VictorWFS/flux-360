import '../styles/headerstyles.css'

interface props {
    children: React.ReactNode
}

export const PageContainer = ({children}: props) => {
    return (
        <div className="pageContainer">
            {children}
        </div>
    )
}