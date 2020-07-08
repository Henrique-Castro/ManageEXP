import React, { FunctionComponent } from 'react';

import { InputArea, StyledInput } from './styles';

type InputProps = { // The common Part
    className?: string;
    placeholder?: string;
} & ({ // The discriminated union
    type?: "text";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} | {
    type: "textarea";
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
})

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    if (props.type === 'textarea') {
        return <textarea {...props} />;
    }
    return (
        <InputArea>
            <StyledInput {...props} />
            <label htmlFor="">
                <span>Coloque seu email</span>
            </label>
        </InputArea>
    );
};

export default Input;
