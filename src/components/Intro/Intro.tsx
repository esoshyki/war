import React from "react";
import './Intro.sass';
import { useSelector } from 'react-redux';
import { select } from "../../../store/select";
import { content } from "../../data/content";

const Intro = () => {

    const locale = useSelector(select.view.locale);

    const data = content.intro[locale];

    return (
        <section className="intro">
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </section>
    )
}

export default Intro