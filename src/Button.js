import React, { useState, useEffect } from 'react';

const Button = (props) => {
    return <button onClick={props.onClick}>
        {props.text}
    </button>
}

export default Button

