import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button =styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: black;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: Pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01bf71')};
    }
`