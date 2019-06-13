import React from 'react';

import StyledInput from './Input';
import Container from './Container';
import Label from './Label';

class Input extends React.Component {


    render() {
        const { error, label } = this.props
        return (
            <Container>
            <Label>{label}</Label>
            <StyledInput
                {...this.props}
            />
            </Container>
        )
    }
}

export default Input;