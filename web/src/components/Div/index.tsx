import React from 'react';

import { CustomGridProps } from './interface';

import { Custom } from './styles';

/**
    ```
      Example: <CustomGrid display="flex" paddingTop="small" />
    ```
    Unit summary - none: `0`,
    xxs: `4`,
    extraSmall: `8`,
    small: `16`,
    medium: `24`,
    large: `32`,
    extraLarge: `80` */

const CustomGrid = ({
    children,
    flexDirection = 'column',
    justifyContent,
    alignItems,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    position,
    top,
    right,
    bottom,
    left,
    width,
    height,
    display,
    backgroundColor,
    flexWrap,
    opacity,
    ...rest
}: CustomGridProps) => (
        <>
            <Custom
                {...rest}
                opacity={opacity}
                flexWrap={flexWrap}
                flexDirection={flexDirection}
                justifyContent={justifyContent}
                alignItems={alignItems}
                marginTop={marginTop}
                marginBottom={marginBottom}
                marginLeft={marginLeft}
                marginRight={marginRight}
                paddingTop={paddingTop}
                paddingBottom={paddingBottom}
                paddingLeft={paddingLeft}
                paddingRight={paddingRight}
                display={display}
                position={position}
                top={top}
                right={right}
                bottom={bottom}
                left={left}
                width={width}
                height={height}
                backgroundColor={backgroundColor}>
                <>{children}</>
            </Custom>
        </>
    );

export default CustomGrid;
