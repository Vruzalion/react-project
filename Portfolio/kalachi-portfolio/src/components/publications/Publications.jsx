import React from 'react';
import "./Publications.css";
import "./DataPub";
import DataPub from './DataPub';

const Publications = () => {
    return (
        <section className="publications section" id="publications">
            <h2 className="section__title">Publications</h2>
            <span className="section__subtitle">So, here are few of my publications</span>

            <div className="publications__container container grid">
                <DataPub />
            </div>
        </section>
    )
}

export default Publications