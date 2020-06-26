import React from 'react';

import { Typography } from '..';

import { ColorsTextOptions } from '../../../styles/themes/colors';

interface CaptionProps {
    text: string | number | null;
    color: ColorsTextOptions
};

/**
    ```
        Example: <Caption text="Caption" color='primary' />
    ```
 */

const Caption = ({ text, color }: CaptionProps) => {
    return (
        <Typography
            as='span'
            text={text}
            color={color}
            fontSize='s'
            lineHeight={14}
            margingBottom="xLarge"
        />
    );
};

export default Caption;
