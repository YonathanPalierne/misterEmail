import { NavLink, Outlet } from "react-router-dom";
import { Accordion } from "../cmps/Accordion";

export function About() {
    return <div className="about">
        <h1>We are all about emails</h1>
        <section style={{ marginBlock: '40px' }}>
            <Accordion title="Introduction to Quantum Computing">
                Quantum computing is an area of computing focused on developing computer
                technology based on the principles of quantum theory. Quantum computers use
                qubits, which can represent and store data in multiple states simultaneously.
            </Accordion>
            <Accordion title="Understanding Machine Learning">
                Machine learning is a subset of artificial
                intelligence that focuses on building systems that learn from data,
                improve their performance over time without being explicitly programmed,
                and make decisions based on data patterns.
            </Accordion>
            <Accordion title="The Future of Renewable Energy">
                Renewable energy sources, such as solar, wind, and hydroelectric power,
                are becoming increasingly important as the world seeks to reduce its reliance on
                fossil fuels. Innovations in energy storage, smart grids, and sustainable practices
                are driving the transition towards a greener future. The integration of renewable energy
                into existing infrastructure poses challenges, but it also offers opportunities for reducing
                carbon emissions and fostering energy independence.
            </Accordion>
            <Accordion title="Exploring the Human Genome">
                <span>👻</span> <span>😈</span>
                <br />
                The Human Genome Project, completed in 2003, mapped the entire
                human genetic code. This landmark achievement has paved the way for advances in genetics,
                personalized medicine, and understanding genetic diseases. By analyzing the human genome,
                scientists can identify genetic markers for diseases, develop targeted treatments, and explore the
                complexities of human evolution. Ongoing research continues to unlock the secrets of our DNA,
                offering insights into health, ancestry, and the potential for future medical breakthroughs.
            </Accordion>

        </section>


        <nav>
            <NavLink to="/about/team">Team</NavLink>
            <NavLink to="/about/vision">Vision</NavLink>
        </nav>

        <Outlet />   
    </div>
}
