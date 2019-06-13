import React from 'react';
import Wrapper from './Wrapper';
import Text from './Text';

function Button({ text, onClick, ...rest }) {
    return (
        <Wrapper {...rest} onClick={onClick}>
           <Text>{text}</Text>
        </Wrapper>
    )
}

export default Button