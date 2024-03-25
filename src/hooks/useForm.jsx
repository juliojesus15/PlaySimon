import { useState } from 'react';

const validate = (values) => {
    let errors = {};
    if (!values.username) {
        errors.username = 'El nombre de usuario es requerido';
    }
    if (!values.password) {
        errors.password = 'La contraseña es requerida';
    }
    return errors;
  };

export const useForm = (initialState, callback) => {    
    const [ values, setValues ] = useState(initialState);
    const [ errors, setErrors ] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleCharacterSelect = (characterId) => {
        setValues({
          ...values,
          selectedCharacter: characterId
        });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const validationErrors = validate(values);
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length === 0) {
            //callback();
        }
    };

    const resetForm = () => {
        setValues(initialState);
        setErrors({});
    };

    return {
        handleChange,
        handleCharacterSelect,
        handleSubmit,
        values,
        errors,
        resetForm
    };
};