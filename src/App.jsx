import { HashRouter as Router, Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { AboutTeam } from "./pages/AboutTeam"
import { AboutVision } from "./pages/AboutVision"
import { EmailIndex } from "./pages/EmailIndex"
import { EmailDetails } from "./cmps/EmailDetails"
import { EmailEdit } from "./cmps/EmailEdit"

import { AppFooter } from "./cmps/AppFooter"
import { AppHeader } from "./cmps/AppHeader"

import { UserMsg } from "./cmps/UserMsg"
// import GoogleMap from './tmp/GoogleMap'
// import { MyForm } from './tmp/MyForm'
// import { MyChart } from './tmp/MyChart'
// import { Material } from './tmp/Material'
import 'animate.css';



export function App() {
  return (
    <Router>
      <section className='main-app'>
        <AppHeader />
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/googlemap' element={<GoogleMap />} />
            <Route path='/formik' element={<MyForm />} />
            <Route path='/chart' element={<MyChart />} />
            <Route path='/material' element={<Material />} /> */}
            <Route path='/about' element={<About />}>
              <Route path='/about/team' element={<AboutTeam />} />
              <Route path='/about/vision' element={<AboutVision />} />
            </Route>
            <Route path='/email' element={<EmailIndex />}>
              <Route path='/email/edit/:emailIdEdit?' element={<EmailEdit />} />
              <Route path='/email/:emailIdDetails' element={<EmailDetails />} />
            </Route>
          </Routes>
        </main>
        <AppFooter />
        <UserMsg />
      </section>
    </Router>
  )
}
