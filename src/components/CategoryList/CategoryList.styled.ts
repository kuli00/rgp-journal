import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 3px;
  width: 27%;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  display: block;
`;

interface Openable {
  opened: boolean;
}

interface CategoryNameI extends Openable {
  isOpenable: boolean;
}

export const CategoryName = styled.h3<CategoryNameI>`
  position: relative;
  margin-bottom: 0;

  ${({ isOpenable, opened }) =>
    isOpenable &&
    css`
      cursor: pointer;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 0;
        width: 10px;
        height: 10px;
        border-top: 1px solid black;
        border-right: 1px solid black;
        transition: 0.2s ease-in-out;
        transform: rotate(${opened ? 135 : 45}deg);
      }
    `}
`;

interface EntriesListI extends Openable {
  elements: number;
}

export const EntriesList = styled.div<EntriesListI>`
  max-height: ${({ opened, elements }) => (opened ? 19.5 * elements : 0)}px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: max-height linear 0.3s;
`;

export const Entry = styled.span`
  cursor: pointer;
`;
