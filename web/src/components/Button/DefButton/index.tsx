import React, { MouseEvent } from 'react';

import { DefaultBtn } from './styles';

import { Props } from './interface';

const DefaultButton = (props: Props) => {

    const { onClick, text, variant = 'def', loading } = props;

    const callOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (!loading) {
            onClick(e);
        };
    };

    return (
        <DefaultBtn 
            variant={variant} 
            onClick={callOnClick}
        >
            {text}
        </DefaultBtn>
    );
};

export default DefaultButton;
