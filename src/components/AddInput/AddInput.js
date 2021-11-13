import { useState } from 'react';
import classes from './AddInput.module.css';

const AddInput = function ({ addFriend }) {
    const [name, setName] = useState('');

    const handleNameChange = function (event) {
        const value = event?.target?.value;
        setName(value);
    }

    const handleKeyPress = function (event) {
        if (event.charCode === 13 && name.trim().length) {
            addFriend(name);
            console.log('handleKeyPress name', name)
            setName('');
        }
    }

    return <div className={classes.inputBox}>
        <input type='text'
            className={classes.inputField}
            placeholder="Enter your friend's name"
            value={name}
            onChange={handleNameChange}
            onKeyPress={handleKeyPress} />
    </div>
};

export default AddInput;