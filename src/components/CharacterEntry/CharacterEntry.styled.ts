import styled from 'styled-components';

export const Wrapper = styled.div``;

export const CharacterName = styled.h1`
  display: block;
  text-align: center;
`;

export const AdditionalInfo = styled.h2`
  display: inline-block;
  width: 50%;
  margin: 5px 0;
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
