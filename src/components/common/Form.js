import React, { useState } from 'react'
import Input from "./Input"
import Button from "./Button"

const Form = ({ columns, initialData, onFormSubmit }) => {
  const [formData, setFormData] = useState(initialData) // why person? this form work only with person?
  const [formErrors, setFormErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validate(formData)) {
      return
    }

    onFormSubmit(formData)
  }

  const handleChange = (event) => { // rerender each change
    const { currentTarget: input } = event
    const data = { ...formData }
    const errors = { ...formErrors }

    if (errors[input.name]) {
      delete errors[input.name]
    }

    data[input.name] = input.value
    setFormData(data)
    setFormErrors(errors)
  }

  const validate = (data) => {
    let errors = {}
    let valid = true

    columns.forEach((key) => {
      if (!data[key]) {
        errors = { ...errors, [key]: 'Field is required' }
        valid = false
      }
    })

    setFormErrors(errors)
    return valid
  }

  return (
    <form>
      {columns.map(columnName => (
        <Input
          key={columnName}
          name={columnName}
          label={columnName}
          value={formData[columnName] || ''}
          type="input"
          error={formErrors[columnName]}
          onChange={handleChange}
        />
      ))}

      <Button
        label="Save"
        className="alert alert-success"
        onClick={handleSubmit}
      />
    </form>
  )
}

export default Form
