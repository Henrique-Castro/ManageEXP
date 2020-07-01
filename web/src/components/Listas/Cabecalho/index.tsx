import React from 'react';

import { TableHeader } from './styles';

interface HeaderProps {
    headerData: string[];
};

const ListaCabecalho = ({ headerData }: HeaderProps) => {
    return (
        <thead>
            <TableHeader>
                {headerData.map((element) => (
                    <th>{element}</th>
                ))}
            </TableHeader>
        </thead>
    );
};

export default ListaCabecalho;
