import styled, { css } from "styled-components";

const Wrapper = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 20px;
`;

const ContentAdapter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex: 1;
`;

const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    display: flex;
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.weights.regular};
    margin-bottom: 10px;

    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.font.sizes.xs};
    }
  `}
`;

const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    display: flex;
    font-size: ${theme.font.sizes.xs};
    font-weight: ${theme.font.weights.regular};

    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.font.sizes.xxs};
    }
  `}
`;

const PageStyle = {
  Wrapper,
  ContentAdapter,
  Title,
  Subtitle,
};

export default PageStyle;
