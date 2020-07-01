import styled from 'styled-components';

import { UnitPropsSpacing } from '../../styles/themes/units';

import { CustomGridProps, CustomProps } from './interface';

const DEFAULT_SPACING = 'none';
const DEFAULT_FLEX_DIRECTION = 'column';

const Div = styled.div<CustomProps>`
  flex-direction: ${({ flexDirection }) => flexDirection || DEFAULT_FLEX_DIRECTION};
`;

const handlePropertyValue = (
    property: number | string | undefined
): string | number => {
    if (typeof property === 'string')
        return property;

    if (typeof property === 'number')
        return `${property}px`

    return DEFAULT_SPACING
};

const getSpacingUnity = (
    spacing: UnitPropsSpacing,
    property: keyof UnitPropsSpacing | 'auto' | undefined,
): string => {
    if (property === 'auto') {
        return property;
    };
    return `${spacing[property || DEFAULT_SPACING]}px`;
};

const getArraySpacingUnity = (
    spacing: UnitPropsSpacing | any,
    propertyArray: keyof UnitPropsSpacing[] | any[] | undefined,
): string => {
    if (Array.isArray(propertyArray)) {
        const property = propertyArray.map((value: keyof UnitPropsSpacing | undefined | string) => {
            return `${spacing[value || DEFAULT_SPACING]}px`;
        }).join(' ');
        return property;
    };
    return `${spacing[DEFAULT_SPACING]}px`;
};

export const Custom = styled(Div) <CustomGridProps>`

    /** Width && Height */

    ${({ width }) =>
        width && { width: handlePropertyValue(width) }};
    
    ${({ height }) =>
        height && { height: handlePropertyValue(height) }};

    ${({ minWidth }) =>
        minWidth && { 'min-width': handlePropertyValue(minWidth) }};

    ${({ minHeight }) =>
        minHeight && { 'min-height': handlePropertyValue(minHeight) }};

    ${({ maxWidth }) =>
        maxWidth && { 'max-width': handlePropertyValue(maxWidth) }};

    ${({ maxHeight }) =>
        maxHeight && { 'max-height': handlePropertyValue(maxHeight) }};   

    /** Margin */

    ${({ theme, marging }) =>
        marging && { marging: getArraySpacingUnity(theme.units.spacing, marging?.flat()) }};

    ${({ theme, marginTop }) =>
        marginTop && { 'marging-top': getSpacingUnity(theme.units.spacing, marginTop) }};

    ${({ theme, marginBottom }) =>
        marginBottom && { 'margin-bottom': getSpacingUnity(theme.units.spacing, marginBottom) }};

    ${({ theme, marginLeft }) =>
        marginLeft && { 'margin-left': getSpacingUnity(theme.units.spacing, marginLeft) }};

    ${({ theme, marginRight }) =>
        marginRight && { 'margin-right': getSpacingUnity(theme.units.spacing, marginRight) }};

    /** Padding */

    ${({ theme, padding }) =>
        padding && { padding: getArraySpacingUnity(theme.units.spacing, padding?.flat()) }};

    ${({ theme, paddingTop }) =>
        paddingTop && { 'padding-top': getSpacingUnity(theme.units.spacing, paddingTop) }};

    ${({ theme, paddingBottom }) =>
        paddingBottom && { 'padding-bottom': getSpacingUnity(theme.units.spacing, paddingBottom) }};
        
    ${({ theme, paddingLeft }) =>
        paddingLeft && { 'padding-left': getSpacingUnity(theme.units.spacing, paddingLeft) }};

    ${({ theme, paddingRight }) =>
        paddingRight && { 'padding-right': getSpacingUnity(theme.units.spacing, paddingRight) }};

    /** Position */
    
    position: ${({ position }) => position || 'relative'};

    ${({ position, top }) =>
        position === 'absolute' && top && { top }};

    ${({ position, right }) =>
        position === 'absolute' && right && { right }};

    ${({ position, bottom }) =>
        position === 'absolute' && bottom && { bottom }};

    ${({ position, left }) =>
        position === 'absolute' && left && { left }};

    /** Others */

    z-index: ${({ position, zIndex }) => (position === 'absolute' ? zIndex : '1')}; /** Arrumar */
    
    ${({ opacity }) => opacity && { opacity }};

    /** Display */

    display: ${({ display }) => (display ? display : 'inline-block')};

    /** Background */

    ${({ theme, backgroundColor }) =>
        backgroundColor && { 'background-color': theme.colors.background[backgroundColor] }};

    /** Justify and Align */

    ${({ display, justifyContent }) =>
        display === 'flex' && justifyContent && { 'justify-content': justifyContent }} ;

    ${({ display, alignItems }) =>
        display === 'flex' && alignItems && { 'align-items': alignItems }};

    /** Flex */

    ${({ flexWrap }) => flexWrap && { flexWrap }};

    /** Overflow */

    ${({ overflow }) => overflow && { overflow }};
    ${({ overflowX }) => overflowX && { 'overflow-x': overflowX }};
    ${({ overflowY }) => overflowY && { 'overflow-y': overflowY }};
`;
