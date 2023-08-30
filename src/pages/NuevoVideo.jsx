import { useState } from "react"
import ButtonLink from "../components/ButtonLink"
import ButtonForm from "../components/ButtonForm"
import CampoTexto from "../components/CampoTexto"
import ListaOpciones from "../components/ListaOpciones"
import TextArea from "../components/TextArea"

const NuevoVideo = () =>{

    const[titulo,setTitulo] = useState('')
    const[linkVideo,setVideo] = useState('')
    const[linkImagen,setImagen] = useState('')
    const[categoria,setCategoria] = useState('')
    const[descripcion,setDescripcion] = useState('')
    const[codigoSeguridad,setCodigoSeguridad] = useState('')
    

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log('Manejar el envio')
        let datosAEnviar = {
            titulo,
            linkVideo,
            linkImagen,
            categoria,
            descripcion,
            codigoSeguridad
        }
        console.log(datosAEnviar)
    }

    const EstilosBtnNuevaCategoria = {
        color: '#ffffff',
        background: '#9e9e9e',
        fontSize: '21px',
        fontWeight: '600',
        width: '254px',
        height: '54px',
        borderRadius: '4px',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
        color: '#fff',
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
                    <h2 className="nuevovideo__titulo">Nuevo Video</h2>
                    
                    <form className='form' action="" onSubmit={manejarEnvio}>
                        
                        <CampoTexto 
                            titulo='Título'
                            mensaje="" 
                            required={true} 
                            valor={titulo} 
                            actualizarValor={setTitulo} 
                        />
                        
                        <CampoTexto 
                            titulo='Link del video' 
                            mensaje="" 
                            required={true} 
                            valor={linkVideo} 
                            actualizarValor={setVideo} 
                        />

                        <CampoTexto 
                            titulo='Link de la imagen del video' 
                            mensaje="" 
                            required={true} 
                            valor={linkImagen} 
                            actualizarValor={setImagen} 
                        />

                        <ListaOpciones 
                            titulo='Categoría' 
                            mensaje="" 
                            required={true} 
                            valor={categoria} 
                            actualizarValor={setCategoria} 
                        />

                        <TextArea 
                            titulo='Descripción de la categoría' 
                            mensaje='' 
                            required={true} 
                            valor={descripcion} 
                            actualizarValor={setDescripcion} 
                        />

                        <CampoTexto 
                            titulo='Código de seguridad' 
                            mensaje="" 
                            required valor={codigoSeguridad}
                            actualizarValor={ setCodigoSeguridad } 
                        />

                        <div className="barra__botones">
                            <div className="botones">
                                <ButtonForm titulo='Guardar' styles={EstilosBtnGuardar} />
                                <ButtonForm titulo='Limpiar' styles={EstilosBtnLimpiar} />
                            </div>
                            <ButtonLink to='/nuevacategoria' titulo='Nueva Categoría' styles={EstilosBtnNuevaCategoria}/>
                        </div>

                    </form>

                </div>
            </main>
        </>
        
        
        
    )
    
}

export default NuevoVideo