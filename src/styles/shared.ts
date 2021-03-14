import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h1`
  display: block;
  text-align: center;
`;

export const AdditionalInfo = styled.h2`
  display: block;
  text-align: center;
  width: 100%;
  margin: 15px 0;
  font-weight: 400;
`;

export const Property = styled.span`
  font-weight: 700;
`;

export const Description = styled.div`
  height: 500px;
  overflow: scroll;
  margin-top: 10px;
`;

export const ShortDescription = styled.div`
  width: calc(100% - 20px);
  margin: 15px 0;
  border: 1px solid black;
  padding: 10px;
`;

export const Subtitle = styled.span`
  display: block;
  text-align: center;
  &:first-of-type {
    margin-top: -20px;
  }
`;
