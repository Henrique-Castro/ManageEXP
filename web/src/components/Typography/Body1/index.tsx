import React from 'react';

import { Typography } from '..';

import { ColorsTextOptions } from '../../../styles/themes/colors';

interface BodyProps {
    text: string | number | null;
    color: ColorsTextOptions
};

/**
    ```
        Example: <Body1 text="Body1" color='primary' />
    ```
 */

const Body1 = ({ text, color }: BodyProps) => {
    return (
        <Typography
            as='p'
            text={text}
            color={color}
            fontSize='xp'
            lineHeight={23}
            margingBottom="xLarge"
        />
    );
};

export default Body1;
