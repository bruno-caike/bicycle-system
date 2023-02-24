import styled from "styled-components";
import { colors } from "../../../utils/variables";

export const NavStyle = styled.nav`
    background-color: ${colors.neutral_200};
    display: grid;
    grid-template-rows: 7rem 11fr 5rem;
`;

export const LogosNav = styled.div`
    background-color: ${colors.neutral_300};
    display: flex;
    align-items: center;
    justify-content: center;
    > a {
        display: grid;
        &, > img {height: 5rem;}
        > img {max-width: 25rem;}
    }
`;

export const MinifyNav = styled.div`
    background-color: ${colors.neutral_300};
    display: flex;
    justify-content: flex-end;
    > button {
        width: 5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        color: ${colors.white};
        border: .1rem solid ${colors.white};
        &:hover {
            background-color: ${colors.secondary};
        }
    }
`;