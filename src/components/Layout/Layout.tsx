import * as React from "react"
import './Layout.sass'
import Background from './Background'


const Layout = ({ children } : any) => {

    return (
        <div className={"container"}>
            <Background />
                <div className="layout__content">
            {children}
            </div>
        </div>
    )
}

export default Layout