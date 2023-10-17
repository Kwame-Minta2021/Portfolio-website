import React from "react"
import '../styles/style.css'
import { wreath } from "../../assets"
import { honors_and_awards } from "../../constants"
import { Tilt } from "react-tilt"

const defaultOptions = {
	reverse:        true,
	max:            35,
	perspective:    1000,
	scale:          1.1,
	speed:          1000,
	transition:     true,
	axis:           null,
	reset:          true,
	easing:         "cubic-bezier(.03,.98,.52,.99)",
}

const Achievements = () => {
    return (
        <section id="achievements">
            <h1 className="section-title">
                Achievements
            </h1>
            <div className="achieve-display">
                {
                    honors_and_awards.map((award, index) => (
                        <Tilt className={`award-cell award-${index}`}
                        options={defaultOptions}
                        key={index}>
                            <div>
                            <h1>
                                {award.position}
                                <span>{award.suffix}</span>
                            </h1>
                            <h2>{award.kind}</h2>
                            <h2>{award.date}</h2>
                            <h2>{award.venue}</h2>
                            </div>
                        </Tilt>
                    ))
                }
            </div>
        </section>
    )
}

export default Achievements
