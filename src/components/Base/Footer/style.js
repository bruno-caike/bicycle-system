import styled from "styled-components";
import { colors } from "../../../utils/variables";

export const FooterStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.neutral_400};
    padding: .5rem 2.5rem;
    height: 5rem;
    > p {
        strong {font-weight: bold;}
    }
    > p, > a {font-size: 1.4rem;}
    > a {
        color: ${colors.secondary};
        transition: all .3s linear;
        &:hover {
            color: ${colors.primary };
        }
    }
`;