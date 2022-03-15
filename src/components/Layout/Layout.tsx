import * as React from "react"
import './Layout.sass'
import Background from './Background'
import Header from "./Header"

const Layout = ({ children } : any) => {

    return (
        <div className={"container"}>
            <Background />
                <div className="layout__content">
            <Header />
            <main>
                {children}
            </main>
            </div>
        </div>
    )
}

export default Layout