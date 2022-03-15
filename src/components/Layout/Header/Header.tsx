import React from "react";
import { useSelector } from "react-redux";
import { select } from '../../../../store/select';
import { content } from '../../../data/content'
import './Header.sass'

const Header = () => {

    const locale = useSelector(select.view.locale);

    const data = content.header[locale]

    return (
        <header className="header">
            <h1>{data.h1}</h1>
            <h3>{data.begin}</h3>
        </header>
    )
}

export default Header;