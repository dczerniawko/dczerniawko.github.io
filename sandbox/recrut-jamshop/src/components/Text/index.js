import React from "react"
import containerStyles from "./container.module.css"

function Text() {
  return (
    <>
      <div className={containerStyles.section}>
        <h2 className={containerStyles.title}>Explore community choices</h2>
        <p className={containerStyles.subtitle}>
          Updated daily based on most popular choices among dev community
        </p>
      </div>
    </>
  )
}

export default Text
