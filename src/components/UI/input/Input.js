import React from 'react';
import classes from './Input.module.css';



const input = (props) => {

    return <div className={classes.Input}>
        <label className={classes.Label} htmlFor={props.id}>{props.title}</label>
        <input className={classes.NativeInput}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value} 
            type={props.type} 
            id={props.id}/>
    </div>
};

export default input;