import styled from "styled-components";
import { colors } from "../../utils/variables";

export const BaseStyled = styled.div`
    display: flex;
    min-height: 100vh;
`;

export const MainStyled = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 7rem 1fr 5rem;
`;

export const Main = styled.main`
    background-color: ${colors.neutral_500};
    > div {
        background-color: ${colors.white};
        border-radius: .2rem;
        margin: 2rem;
        height: calc(100% - 4rem);
        box-shadow: 0 0 .5rem 0 rgba(0,0,0,0.5);
    }
`;