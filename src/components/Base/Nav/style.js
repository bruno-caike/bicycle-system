import styled from "styled-components";
import { colors } from "../../../utils/variables";

export const NavStyle = styled.nav`
    background-color: ${colors.neutral_200};
    display: grid;
    grid-template-rows: 7rem 1fr;
    width: 30rem;
    position: relative;
    margin-left: ${({ closeMenu }) => closeMenu ? "-30rem" : "0"};
    transition: all .3s linear;
`;

export const LogosNav = styled.div`
    background-color: ${colors.neutral_300};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s linear;
    > a {
        display: grid;
        &, > img {height: 5rem;}
        > img {max-width: 25rem;}
    }
`;