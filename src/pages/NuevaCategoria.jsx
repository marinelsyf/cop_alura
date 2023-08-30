import { useState } from 'react'
import ButtonForm from '../components/ButtonForm'
import CampoTexto from '../components/CampoTexto'
import '../css/estilos.css'
import datos  from '../db.json'
import TextArea from '../components/TextArea'
import CampoColor from '../components/CampoColor'


const NuevaCategoria = () =>{
    const [categorias,setCategorias] = useState([])
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [color, setColor] = useState('')
    const [codigo, setCodigo] = useState('')
 

    const manejarEnvio = (e) => {
        e.preventDefault()
        const datosAEnviar = {
            nombre,
            descripcion,
            color
        }
        localStorage.setItem('categorias', JSON.stringify(datosAEnviar))
        
    }



    const EstilosBtnGuardar = {
        display: 'inline-block',
        color: '#ffffff',
        background: '#ffffff',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    const EstilosBtnLimpiar = {
        display: 'inline-block',
        color: '#000000',
        background: '#9E9E9E',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    return (
        <>
            <main className="nuevovideo">
                <div className="container">
                    <h2 className="nuevovideo__titulo">Nueva Categoría</h2>
                    <form className='form' action="" onSubmit={manejarEnvio}>
                        
                        <CampoTexto 
                            titulo='Nombre' 
                            error='' 
                            required 
                            valor={nombre}
                            actualizarValor={setNombre}    
                        />

                        <TextArea 
                            titulo='Descripción' 
                            error='' 
                            required
                            valor={descripcion}
                            actualizarValor={setDescripcion} 
                        />

                        <CampoColor 
                            titulo='Color' 
                            error='' 
                            required
                            valor={color}
                            actualizarValor={setColor}
                        />

                        <CampoTexto 
                            titulo='Código de seguridad' 
                            error='' 
                            required
                            valor={codigo}
                            actualizarValor={setCodigo}
                        />

                        <div className="botones">
                            <ButtonForm titulo='Guardar' styles={EstilosBtnGuardar} />
                            <ButtonForm titulo='Limpiar' styles={EstilosBtnLimpiar} />
                        </div>

                    </form>

                    <table>
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Descripción</td>
                                <td>Editar</td>
                                <td>Remover</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datos.categorias.map((categorias, i) => {
                                    const { id, categoria,  nombre, descripcion } = categorias
                                    return (
                                        <tr key={id}>
                                            <td>{nombre}</td>
                                            <td>{descripcion}</td>
                                            <td className="table__editar">Editar</td>
                                            <td className="table__remover">Remover</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </main>
        </>
        
        
        
    )
    
}

export default NuevaCategoria