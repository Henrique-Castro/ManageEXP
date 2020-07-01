import React from 'react';

interface HeaderProps {
    headerData: string[];
};

const ListaCabecalho = ({ headerData }: HeaderProps) => {
    return (
        <thead>
            <tr>
                {headerData.map((element) => (
                    <th>{element}</th>
                ))}
            </tr>
        </thead>
    );
};

export default ListaCabecalho;
