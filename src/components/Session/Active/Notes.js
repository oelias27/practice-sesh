import React from 'react';

/**
 * Stores session notes
 * 
 * @module Notes
 * @type {ReactStatelessComponent}
 */
const Notes = (props) => {
    return (
        <div className="notesWrapper">
            <textarea onChange={props.handleChange}>
            </textarea>
        </div>
    )
}

export default Notes;