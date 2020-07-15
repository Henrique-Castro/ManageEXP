import React, { ReactNode } from "react";

import { Navigation, Header } from '..';

import { ContainerBox } from './styles';

interface ContainerProps {
    children?: ReactNode
};

const Container: React.FC = ({ children }: ContainerProps) => {
    return (
        <ContainerBox>
            <Navigation />
            <div className="content">
                <Header />
                {children}
            </div>
        </ContainerBox>
    );
};

export default Container;