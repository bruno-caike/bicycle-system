import styled from "styled-components";
import { colors } from "../../../utils/variables";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.neutral_400};
    padding: 1rem 2.5rem;
    height: 7rem;
`;

export const NavStyled = styled.nav`
    &, > ul {
        display: flex;
        align-items: center;
    }
    > button {
        background-color: transparent;
        border: none;
        color: ${colors.neutral_100};
        margin-right: 2rem;
        font-size: 2rem;
        cursor: pointer;
        transition: all .3s linear;
        &:hover {
            color: ${colors.primary};
        }
    }
    > ul {
        > li {
            &:not(:last-child) {margin-right: 1rem}
            &:first-child {
                > a {
                    color: ${colors.secondary};
                    transition: all .3s linear;
                    &:hover {
                        color: ${colors.primary};
                    }
                }
            }
        }
    }
`;

export const ProfileStyled = styled.div`
    position: relative;
    display: grid;
    > input[type="checkbox"] {display: none;}
    > label {
        cursor: pointer;
        font-size: 2.8rem;
        color: ${colors.neutral_300};
        transition: all .3s linear;
        &:hover {
            color: ${colors.secondary};
        }
    }
    > ul {
        position: absolute;
        top: 100%;
        right: 3rem;
        pointer-events: none;
        opacity: 0;
        background-color: ${colors.white};
        min-width: 20rem;
        padding: 1.5rem;
        box-shadow: 0 0 .5rem 0 rgba(0,0,0,.3);
        border-radius: .2rem;
        transition: all .3s linear;
        > li {
            &:not(:last-child) {margin-bottom: .5rem;}
            > a {
                display: flex;
                align-items: center;
                color: ${colors.neutral_100};
                transition: all .3s linear;
                > svg {
                    margin-right: 1rem;
                }
                &:hover {
                    color: ${colors.secondary};
                }
            }   
        }
    }
    > input[type="checkbox"]:checked ~ label {
        color: ${colors.secondary};
    }
    > input[type="checkbox"]:checked ~ ul {
        pointer-events: all;
        opacity: 1;
        right: 0;
    }
`;