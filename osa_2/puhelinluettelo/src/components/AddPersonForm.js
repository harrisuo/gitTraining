import React from 'react'
import Notification from './Notification'

const AddPersonForm = (props) => {

    return (
        <div>
            <form onSubmit={props.addPerson}>
                <div>
                    nimi: <input
                        value={props.newName}
                        onChange={props.handleNewName} />
                </div>
                <div>
                    numero: <input
                        value={props.newNumber}
                        onChange={props.handleNewNumber} />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
        </div>
    )
}

export default AddPersonForm