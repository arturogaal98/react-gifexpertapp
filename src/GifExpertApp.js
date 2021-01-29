import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch']);

    /*const handleApp = () => {
        setCategorias( cat => [...cat, 'teorico de Culiacan'] );
    }*/

   

    return(
        <>
            <h2>GifExpertApp Prro</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr/>



            <ol>
                {
                    categorias.map( categoria => (
                        <GifGrid 
                            category={ categoria }
                            key={ categoria } 
                        />
                    ) )
                }
            </ol>
        </>
    )

}

export default GifExpertApp;