import React from 'react';
import DataTalks from './DataTalks';
import "./Talks.css"

const Talks = () => {
  return (
    <section className="talks section" id="talks">
    <h2 className="section__title">Talks</h2>
    <span className="section__subtitle">And here are some of my talks</span>

    <div className="talks__container container grid">
        <DataTalks />
    </div>
</section>
  )
}

export default Talks