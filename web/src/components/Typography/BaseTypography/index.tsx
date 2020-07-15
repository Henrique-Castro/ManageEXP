import React from 'react';

import { PropsBaseTypography } from './interface';

import { BaseTypography } from './styles';

/**
    ```
      Example: <BaseTypography text="Typography" fontSize="m" color="primary" />
    ```
*/

const Typography = ({
  text,
  as,

  color,
  textDecoration,

  align,
  lineHeight,
  
  fontFamily,
  fontSize,

  margingBottom,
  margingLeft,
  margingRight,
  ...rest
}: PropsBaseTypography) => (
  <BaseTypography
    as={as}

    color={color}
    textDecoration={textDecoration}

    align={align}
    lineHeight={lineHeight}

    fontFamily={fontFamily}
    fontSize={fontSize}  

    margingBottom={margingBottom}
    margingLeft={margingLeft}
    margingRight={margingRight}
    >
    {text}
  </BaseTypography>
);

export default Typography;
