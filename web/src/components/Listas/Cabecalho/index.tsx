import React, { useEffect, useState } from 'react';

import { TableHeader } from './styles';

interface HeaderProps {
    headerData: string[];
};

const ListaCabecalho = ({ headerData }: HeaderProps) => {
    const [rowsCount, setRowsCount] = useState<number>(3);

    useEffect(() => {
        const rows = headerData.length;

        setRowsCount(rows)
    },[])

    return (
        <thead>
            <TableHeader rows={rowsCount} >
                {headerData.map((element, index) => (
                    <th key={index}>{element}</th>
                ))}
            </TableHeader>
        </thead>
    );
};

export default ListaCabecalho;
