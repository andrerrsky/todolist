import styled, { css } from "styled-components";

export const Main = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white.primary};
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  `}
`;
