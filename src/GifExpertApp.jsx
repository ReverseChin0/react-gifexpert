import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['El chavo']);
    //los hooks no deben ser condicionales, ya que se pierde el orden de estos
    //lo que llevara a errores

    const onAddCategory = ( newCategory ) => {
        
        if( categories.includes(newCategory) ) return;

        // setCategories( (['DevilMayCry',...categories] );
        setCategories( (c)=> [ newCategory, ...c] );//mi version de cómo añadir
    }

    return (
        <>
            <h1>GifExpertApp</h1>

          
            <AddCategory 
                onNewCategory={ value => onAddCategory(value) }
            />

            
            {   
                categories.map( category => (
                    <GifGrid 
                        key={category} 
                        category={ category }/>
                ))
            }
            

        </>
    );
};
