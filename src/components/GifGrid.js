import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ( {category} ) => {
    
    const {data: images, loading} = useFetchGifs( category ); //los ":" dentro de la desustruracion de un atributo es para darle un alias
      
    return (
        <>
            <h3 className="animate__animated animate__fadeInLeft"> {category} </h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                    { 
                        images.map( img => (
                            <GifGridItem  
                            { ...img } 
                            key={ img.id }
                            />
                        ) ) 
                    } 
            </div>
        </>
    )
}

export default GifGrid;
