import React from 'react';

import { CustomGridProps } from './interface';

import { Custom } from './styles';

/**
    ```
      Example: <Div width:{1000} display="flex" padding={["small", "small"]} />
    ```
*/

const CustomGrid = ({
    children,

    width,
    height,

    display,

    position,
    top,
    right,
    bottom,
    left,

    flexDirection = 'column',
    flexWrap,
    justifyContent,
    alignItems,

    padding,
    marging,

    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,

    marginTop,
    marginBottom,
    marginLeft,
    marginRight,

    backgroundColor,
    opacity,
    ...rest
}: CustomGridProps) => (
        <>
            <Custom
                {...rest}

                width={width}
                height={height}

                display={display}

                position={position}
                top={top}
                right={right}
                bottom={bottom}
                left={left}

                flexDirection={flexDirection}
                flexWrap={flexWrap}
                justifyContent={justifyContent}
                alignItems={alignItems}

                padding={padding}
                marging={marging}

                paddingTop={paddingTop}
                paddingBottom={paddingBottom}
                paddingLeft={paddingLeft}
                paddingRight={paddingRight}

                marginTop={marginTop}
                marginBottom={marginBottom}
                marginLeft={marginLeft}
                marginRight={marginRight}

                opacity={opacity}
                backgroundColor={backgroundColor}
            >
                <>{children}</>
            </Custom>
        </>
    );

export default CustomGrid;
