import React from "react"
import containerStyles from "./container.module.css"

import HeroImage from "../../assets/elements/monitor.svg"
import HeroDecor from "../../assets/elements/hero_decor.svg"

function HomepageHero() {
  return (
    <>
      <section className={containerStyles.section}>
        <img
          className={containerStyles.img}
          src={HeroImage}
          alt="Vector Monitor"
        />
        <div>
          <h1 className={containerStyles.title}>
            Don't waste time
            <br />
            on boring things
            <img
              className={containerStyles.decor}
              src={HeroDecor}
              alt="Decor icon"
            />
          </h1>
          <button className={containerStyles.btn}>GO EXPLORE</button>
        </div>
      </section>
    </>
  )
}

export default HomepageHero
