import React from "react"
import '../styles/style.css'
import { wreath } from "../../assets"
import { honors_and_awards } from "../../constants"
import { Tilt } from "react-tilt"

const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
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
                            <h1>
                                {award.position}
                                <span>{award.suffix}</span>
                            </h1>
                            <h2>{award.kind}</h2>
                            <h2>{award.date}</h2>
                            <h2>{award.venue}</h2>
                        </Tilt>
                    ))
                }
            </div>
        </section>
    )
}

export default Achievements
