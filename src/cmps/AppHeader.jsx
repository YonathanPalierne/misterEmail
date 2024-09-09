import { NavLink } from "react-router-dom"

export function AppHeader() {
    return <header className="app-header">
        <h1>Emails</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/email?status=inbox" >Emails</NavLink>
            <NavLink to="/googlemap" >Google Map</NavLink>
            <NavLink to="/formik" >Formik</NavLink>
            <NavLink to="/chart" >Chart</NavLink>
            <NavLink to="/material" >Material</NavLink>
        </nav>
    </header>
}
