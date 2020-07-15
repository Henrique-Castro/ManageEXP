import React, { ReactNode } from 'react';

import { DefaultTable } from './styles';

export interface TableProps {
    children: ReactNode;
};

const Table = ({ children }: TableProps) => {
    return(
        <DefaultTable>
            {children}
        </DefaultTable>
    );
};

export default Table;
