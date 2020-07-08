import styled from 'styled-components';

import { HTMLProps } from 'react';

export const InputArea = styled.div`
    position: relative;
    width: 300px;
    height: 55px;
    overflow: hidden;
    margin-bottom: 20px;

    input {
        width: 100%;
        margin-right: auto;
        height: 100%;
        padding-top: 20px;
        border: none;
        outline: none;
    };

    input:focus~label span,
    input:valid~label span {
        transform: translateY(-150%);
        font-size: 14px;
        color: #EFC700;
    };

    input:focus~label&:after,
    input:valid~label&:after {
        transform: translateX(0%);
    }

    label {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 300px;
        height: 100%;
        pointer-events: none;
        border-bottom: #545454 solid 2px;

        span {
            position: absolute;
            bottom: 5px;
            left: 0px;
            transition: all .3s ease;
            font-size: 18px;
            font-weight: bold;
            color: #999;
        };
    };

    label&:after{
        content: "";
        position: absolute;
        left: 0px;
        bottom: -2px;
        width: 100%;
        height: 100%;
        border-bottom: 3px solid #EFC700;
        transform: translateX(-100%);
        transition: all .25s;
        transform-origin: left;
    };


`;

export const StyledInput = styled.input`
    width: 300px;
    padding: 10px 0;
    border: none;
    font-size: 18px;
    font-weight: bold;
    color: #999;
    transition: all .25s;
    
    ::placeholder {
        font-size: 18px;
        font-weight: bold;
        color: #999;
    }
`;
