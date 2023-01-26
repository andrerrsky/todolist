import styled, { css } from "styled-components";

const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.white.primary};
    display: flex;
    height: 100%;
    width: 100%;
  `}
`;

const PageStyle = {
  Wrapper,
};

export default PageStyle;
