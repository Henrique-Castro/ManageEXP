import React from 'react';

import { Typography } from '..';

interface HeadlineProps {
    text: string | number | null
};

/**
    ```
        Example: <Headline text="Headline" />
    ```
 */

const Headline = ({ text }: HeadlineProps) => {
    return (
        <Typography
            as='h1'
            text={text}
            color='secondary'
            fontSize='xg'
            lineHeight={47}
            margingBottom="xLarge"
        />
    );
};

export default Headline;
