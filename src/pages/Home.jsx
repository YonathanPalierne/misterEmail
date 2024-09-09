import { useRef } from 'react'
import imgUrl from '../assets/imgs/react.png'
import { animateCSS } from '../services/util.service'

export function Home() {

    const h1Ref = useRef()
    const imgRef = useRef()

    async function onActivate() {
        await animateCSS(h1Ref.current, 'rubberBand')
        animateCSS(imgRef.current, 'hinge', false)
    }

    return (
        <section className="home">
            <h1 ref={h1Ref}>Welcome to our Robots App</h1>
            <img ref={imgRef} src={imgUrl} alt="" />
            <section className='fade-out'>
                <button onClick={onActivate}>Activate</button>
            </section>
        </section>
    )
}
