import styled from 'styled-components';

export const ContentWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.tablet} {
    border: 1px solid black;
    border-radius: 4px;
  }
`;
