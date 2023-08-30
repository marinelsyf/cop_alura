import { Link } from 'react-router-dom'
import '../css/estilos.css'
import Player from '../img/player.png'

const Hero = ()=>{
    return (
        <section className='hero'>
            <div className='hero__contenido container'>
                <div className='hero__texto'>
                    <div className='hero__categoria'>Front End</div>
                    <h2 className='hero__titulo'>Challenge React</h2>
                    <p className='hero__descripcion'>"RitmoInmersivo: Experiencia Musical en React".</p>
                </div>
                <Link to='https://youtu.be/v4uO_YVBhu0?si=LZIZIsoNaUTyoZ5C' target='_blank' rel="noopener noreferrer">
                    <div className='hero__player' >
                        <img src={ Player } alt="Imagen Player" />
                    </div>
                </Link>
                
            </div>
        </section>
    )
}

export default Hero