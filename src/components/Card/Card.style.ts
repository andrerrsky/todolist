import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.md};
    font-weight: ${theme.font.weights.bold};
  `}
`;
