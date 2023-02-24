import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../utils/variables";

export const LinkAncora = styled(Link)`
    display: flex;
    align-items: center;
    background-color: transparent;
    color: ${colors.white};
    border-bottom: .1rem solid ${colors.white};
    padding: 1.5rem 2.5rem;
    > svg {
        width: 2rem;
        margin-right: 1rem;
    }
    &:hover {
        background-color: ${colors.secondary};
    }
`;