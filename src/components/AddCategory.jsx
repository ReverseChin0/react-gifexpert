import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  
    const [InputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if( InputValue.trim().length <= 1 ) return;

        // setCatFromProp( (categories) => [ InputValue, ...categories ] );
        onNewCategory( InputValue.trim() );
        setInputValue('');//porque sino se añaden cosas que ni se que onda
    }
  
    return (

        <form onSubmit={ onSubmit }>
            <input 
            type="text"
            placeholder="Buscar gifs"
            value={ InputValue }
            onChange={ onInputChange }
            />
        </form>

    )
}
