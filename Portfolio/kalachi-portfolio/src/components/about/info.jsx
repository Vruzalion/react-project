/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'

const info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="uil uil-user-circle about__icon"></i>
                <h3 className="about__title">My personal informations</h3>
                <span className="about__subtitle">
                    +237 6 95 38 17 50<br />
                    herve.tale@univ-yaounde1.cm
                </span>
            </div>
            <div className="about__box">
                <i class="uil uil-bag about__icon"></i>
                <h3 className="about__title">My office</h3>
                <span className="about__subtitle">
                    1st floor<br />
                    Department of Computer Engineering</span>
            </div>
            <div className="about__box">
                <i class="uil uil-location-pin-alt about__icon"></i>
                <h3 className="about__title">Mailing Address</h3>
                <span className="about__subtitle">
                    Hervé Talé Kalachi
                    BP 3614 Yaounde-Messa<br />
                    Yaounde, Cameroon
                </span>
            </div>
        </div>
    )
}

export default info