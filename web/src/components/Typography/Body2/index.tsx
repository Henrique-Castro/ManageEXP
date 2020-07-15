import React from 'react';

import { Typography } from '..';

import { ColorsTextOptions } from '../../../styles/themes/colors';

interface BodyProps {
    text: string | number | null;
    color: ColorsTextOptions
};

/**
    ```
        Example: <Body2 text="Body2" color='primary' />
    ```
 */

const Body2 = ({ text, color }: BodyProps) => {
    return (
        <Typography
            as='p'
            text={text}
            color={color}
            fontSize='p'
            lineHeight={19}
            margingBottom="xLarge"
        />
    );
};

export default Body2;
