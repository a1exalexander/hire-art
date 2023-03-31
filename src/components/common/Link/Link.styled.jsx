import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const StyledLink = styled(NavLink)`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme.colors.N10};
    @media (max-width: 768px) {
        font-size: ${({ isOpen }) => isOpen ? '32px' : '12px'};
    }
    @media (any-hover: hover){
        &:hover{
            color: ${(props) => props.theme.colors.P5};
        }
    }
`