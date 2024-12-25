import { Fragment, useEffect, useState } from "react"
import Home from "./pages/home"
import { Route, Router, Routes } from "react-router-dom"
import CompanyDetails from "./components/company-details"
import WelcomePage from "./components/welcome-page"


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path={"/"} element={<Home/>}>
          <Route path="company-details" element={<CompanyDetails />} />
          <Route path="welcome-page" element={<WelcomePage />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
