import React from "react"

import Header from "../components/Header"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer />
    </div>
  )
}
