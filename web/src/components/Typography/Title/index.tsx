import React from 'react';

import { Typography } from '..';

interface TitleProps {
    text: string | number | null
};

/**
    ```
        Example: <Title text="Title" />
    ```
 */

const Title = ({ text }: TitleProps) => {
    return (
        <Typography
            as='h2'
            text={text}
            color='primary'
            fontSize='m'
            lineHeight={33}
            margingBottom="xLarge"
        />
    );
};

export default Title;
