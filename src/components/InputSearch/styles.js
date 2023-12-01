import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.75rem 0.875rem;
  background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_300};
  display: flex;
  gap: 1rem;
  height: 3rem;
  border-radius: 1.5rem;

  svg {
    color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
    font-size: 1.25rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_500};
      font-family: Roboto;
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;
