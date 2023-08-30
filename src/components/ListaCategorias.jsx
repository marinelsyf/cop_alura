
import VideoCard from "./VideoCard"

import datos from '../db.json'

const ListaCategorias = () => {


    return (
        <main className="categorias">
            <h1 className="sr-only">Lista Categorias videos</h1>
            <p className="sr-only">Plataforma para registrar y ver videos favoritos</p>
            <div className="categorias_Listas">
                {
                    datos.categorias.map((categoria) => {
                        const {id, nombre, descripcion, color} = categoria

                        let colorLista = {
                            backgroundColor: color
                        }

                        return (
                                <div className="categorias__contenido container" key={id}>
                                    <div className="categorias__titulo">
                                        <div className="categorias__nombre" style={ colorLista }>{ nombre }</div>
                                        <div className="categorias__descripcion">{ descripcion }</div>
                                    </div>
                                    <div className="categorias__listavideos">

                                        <VideoCard url='/videos' nombreCategoria={nombre} color={ color }/>
                                        
                                    </div>
                                </div>
                        );
                    })
                }
            </div>
        </main>
    )
}

export default ListaCategorias