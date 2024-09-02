import { HashRouter as Router, Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { AboutTeam } from "./pages/AboutTeam"
import { AboutVision } from "./pages/AboutVision"
import { EmailIndex } from "./pages/EmailIndex"
import { EmailDetails } from "./cmps/EmailDetails"

import { AppFooter } from "./cmps/AppFooter"
import { AppHeader } from "./cmps/AppHeader"

export function App() {
  return (
    <Router>
      <AppHeader />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}>
            <Route path='/about/team' element={<AboutTeam />} />
            <Route path='/about/vision' element={<AboutVision />} />
          </Route>
          <Route path='/email' element={<EmailIndex />} >
            <Route path='/email/:emailId' element={<EmailDetails />} />
          </Route>
        </Routes>
      </main>
      <AppFooter />
    </Router>
  )
}
