import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const focus = useRef(null)
    useEffect(() => { 
        focus.current.focus()
    })

    const change = e => {
        setInput(e.target.value);

    };

    const submit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    return (
        <form className='todo-form' onSubmit={submit}>
            <input onChange={change}
                type='text'
                placeholder='Add an item here'
                value={ input }
                name='text'
                className='todo-input'
                ref={focus}
                />
            <button className='todo-button'>Add item</button>
            <p>*Click on task's "text" to strike-out <br/> or <br/> "X" to remove task </p>
        </form>
    );
}

export default TodoForm;
