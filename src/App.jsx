import { HashRouter as Router, Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { EmailIndex } from "./pages/EmailIndex"
import { AboutTeam } from "./pages/AboutTeam"
import { AboutVision } from "./pages/AboutVision"
import { EmailDetails } from "./pages/EmailDetails"

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
          <Route path='/email' element={<EmailIndex />} />
          <Route path='/email/:id' element={<EmailDetails />} />
        </Routes>
      </main>
      <AppFooter />
    </Router>
  )
}
