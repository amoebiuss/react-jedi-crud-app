import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({ columns, initialData, onFormSubmit }) => {
    const [personData, setPersonData] = useState(initialData);
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate(personData);

        if (Object.keys(errors).length) {
            return;
        }

        onFormSubmit(personData);
    }

    const handleChange = (event) => {
        const { currentTarget: input } = event;
        const data = { ...personData };
        const errors = { ...formErrors };

        if (errors[input.name]) {
            delete errors[input.name];
        }

        data[input.name] = input.value;
        setPersonData(data);
        setFormErrors(errors);
    }

    const validate = (data) => {
        let errors = {};

        columns.forEach((key) => {
            if (!data[key]) {
                errors = { ...errors, [key]: 'Field is required' };
            }
        })

        setFormErrors(errors);
        return errors;
    }

    return (
        <form>
            {columns.map(columnName => (
                <Input
                    key={columnName}
                    name={columnName}
                    label={columnName}
                    value={personData[columnName] || ''}
                    type="input"
                    error={formErrors[columnName]}
                    onChange={handleChange}
                />
            ))}

            <Button
                label="Save"
                classes="alert alert-success"
                onClick={handleSubmit}
            />
        </form>
    );
};

export default Form;
