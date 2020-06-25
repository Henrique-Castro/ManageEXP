import styled from 'styled-components';

import { UnitPropsSpacing } from '../../styles/themes/units';

import { CustomGridProps, CustomProps } from './interface';

const DEFAULT_SPACING = 'none';
const DEFAULT_FLEX_DIRECTION = 'column';

const Div = styled.div<CustomProps>`
  flex-direction: ${({ flexDirection }) => flexDirection || DEFAULT_FLEX_DIRECTION};
`;

const teste = (
    spacing: UnitPropsSpacing | any,
    propertyArray: keyof UnitPropsSpacing[] | any[] | undefined,
): string => {
    if (Array.isArray(propertyArray)) {
        const padding = propertyArray.map((value: keyof UnitPropsSpacing | undefined | string) => {
            return `${spacing[value || DEFAULT_SPACING]}px`;
        }).join(' ');

        return padding;
    };

    return `${spacing[DEFAULT_SPACING]}px`;
};

const getSpacingUnity = (
    spacing: UnitPropsSpacing,
    property: keyof UnitPropsSpacing | 'auto' | undefined,
): string => {
    if (property === 'auto') {
        return property;
    }
    return `${spacing[property || DEFAULT_SPACING]}px`;
};

export const Custom = styled(Div) <CustomGridProps>`

    margin-top: ${({ theme, marginTop }) =>
        getSpacingUnity(theme.units.spacing, marginTop)};

    margin-bottom: ${({ theme, marginBottom }) =>
        getSpacingUnity(theme.units.spacing, marginBottom)};

    margin-left: ${({ theme, marginLeft }) =>
        getSpacingUnity(theme.units.spacing, marginLeft)};

    margin-right: ${({ theme, marginRight }) =>
        getSpacingUnity(theme.units.spacing, marginRight)};
/* 
    padding: ${({ theme, padding }) => teste(theme.units.spacing, padding?.flat())}; */

    ${({ theme, padding }) =>
        padding && { padding: teste(theme.units.spacing, padding?.flat()) }}

    /* padding-top: ${({ theme, paddingTop }) =>
        getSpacingUnity(theme.units.spacing, paddingTop)};

    padding-bottom: ${({ theme, paddingBottom }) =>
        getSpacingUnity(theme.units.spacing, paddingBottom)};

    padding-left: ${({ theme, paddingLeft }) =>
        getSpacingUnity(theme.units.spacing, paddingLeft)};

    padding-right: ${({ theme, paddingRight }) =>
        getSpacingUnity(theme.units.spacing, paddingRight)};
     */
    position: ${({ position }) => position || 'relative'};

    ${({ position, top }) =>
        position === 'absolute' && top && { top }};

    ${({ position, right }) =>
        position === 'absolute' && right && { right }};

    ${({ position, bottom }) =>
        position === 'absolute' && bottom && { bottom }};

    ${({ position, left }) =>
        position === 'absolute' && left && { left }};

    width: ${({ width }) => (typeof width === "string" ? width : typeof width === "number" ? width + 'px' : 'auto')};

    height: ${({ height }) => (typeof height === "string" ? height : typeof height === "number" ? height + 'px' : 'auto')};

    z-index: ${({ position, zIndex }) => (position === 'absolute' ? zIndex : '1')}; /** Arrumar */

    display: ${({ display }) => (display ? display : 'block')};

    ${({ theme, backgroundColor }) =>
        backgroundColor && {
            'background-color': theme.colors.background[backgroundColor],
        }};

    ${({ display, justifyContent }) =>
        display === 'flex' && justifyContent && { 'justify-content': justifyContent }} ;

    ${({ display, alignItems }) =>
        display === 'flex' && alignItems && { 'align-items': alignItems }};

    flex-wrap: ${({ flexWrap }) => flexWrap};

    opacity: ${({ opacity }) => opacity};

    ${({ overflow }) => overflow && { overflow }};
    ${({ overflowX }) => overflowX && { 'overflow-x': overflowX }};
    ${({ overflowY }) => overflowY && { 'overflow-y': overflowY }};
`;
