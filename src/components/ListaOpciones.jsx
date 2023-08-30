import datos from '../db.json'

const ListaOpciones = ({titulo, error}) => {
    return (
        <div className="form__input ">
            <div className="form__input inputbackground">
                <label className='form__label' htmlFor="categoria">{titulo}</label>
                <select name="categoria" id="categoria">
                    <option value="">** Escoja una categoria **</option>
                    {
                        datos.categorias.map((categoria, i) => {
                            return(
                                <option value="" key={i}>{categoria.nombre}</option>
                            )
                        })
                    }
                </select>
            </div>
            <span className="form__mensaje">{error}</span>
        </div>
    )
}

export default ListaOpciones