import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({ columns, initialData, onFormSubmit }) => {
    const [personData, setPersonData] = useState(initialData);

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(personData);
    }

    const handleChange = (event) => {
        const { currentTarget: input } = event;
        const data = {...personData};
        data[input.name] = input.value;
        setPersonData(data)
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
                onChange={handleChange}
                />
            ))}

            <Button
                label="Save"
                classes="alert alert-danger"
                onClick={handleSubmit}
            />
        </form>
    );
};

export default Form;
