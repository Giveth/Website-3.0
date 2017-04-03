import styled from 'styled-components';

const ListItem = styled.li`
  margin: 1em 0;
  &:before {
    font-family: FontAwesome;
    content: "\\f192";
    color: #99b83c;
    font-size: 11px;
    padding-right: 8px;
  }
`;

export default ListItem;
