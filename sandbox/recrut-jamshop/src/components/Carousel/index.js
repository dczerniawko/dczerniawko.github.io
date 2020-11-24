import React from "react"
import ElasticCarousel from "react-elastic-carousel"
import { Link } from "gatsby"

import capsheaf from "../../assets/products/dumy.svg"
import containerStyles from "./container.module.css"

export default function Carousel() {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1024, itemsToShow: 3 },
    { width: 1248, itemsToShow: 4 },
  ]
  return (
    <div className={containerStyles.main}>
      <ElasticCarousel breakPoints={breakPoints}>
        <Link to="/product">
          <div className={containerStyles.box}>
            <img
              className={containerStyles.img}
              src={capsheaf}
              alt="capsheaf "
            />
            <h1 className={containerStyles.title}>great dummy</h1>
            <p className={containerStyles.subtitle}>
              Something that you trully need, but haven't know about it yet
            </p>
            <button className={containerStyles.btn}>+</button>
          </div>
        </Link>
        <Link to="/product">
          <div className={containerStyles.box}>
            <img
              className={containerStyles.img}
              src={capsheaf}
              alt="capsheaf "
            />
            <h1 className={containerStyles.title}>basic dummy</h1>
            <p className={containerStyles.subtitle}>
              Something that you trully need, but haven't know about it yet
            </p>
            <button className={containerStyles.btn}>+</button>
          </div>
        </Link>
        <Link to="/product">
          <div className={containerStyles.box}>
            <img
              className={containerStyles.img}
              src={capsheaf}
              alt="capsheaf "
            />
            <h1 className={containerStyles.title}>dummy x pro</h1>
            <p className={containerStyles.subtitle}>
              Something that you trully need, but haven't know about it yet
            </p>
            <button className={containerStyles.btn}>+</button>
          </div>
        </Link>
        <Link to="/product">
          <div className={containerStyles.box}>
            <img
              className={containerStyles.img}
              src={capsheaf}
              alt="capsheaf "
            />
            <h1 className={containerStyles.title}>wooden dummy</h1>
            <p className={containerStyles.subtitle}>
              Something that you trully need, but haven't know about it yet
            </p>
            <button className={containerStyles.btn}>+</button>
          </div>
        </Link>
        <Link to="/product">
          <div className={containerStyles.box}>
            <img
              className={containerStyles.img}
              src={capsheaf}
              alt="capsheaf "
            />
            <h1 className={containerStyles.title}>daria dummy</h1>
            <p className={containerStyles.subtitle}>
              Someone, who didn't used Frigma
            </p>
            <button className={containerStyles.btn}>+</button>
          </div>
        </Link>
      </ElasticCarousel>
    </div>
  )
}
