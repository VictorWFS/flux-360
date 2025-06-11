import '../styles/headerstyles.css'
import React, { ReactNode } from "react";

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