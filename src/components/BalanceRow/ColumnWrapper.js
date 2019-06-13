import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : 1 )};
  flex-direction: column;
  justify-content: ${props => (props.justify ? props.justify : "center")};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
`;

export default ColumnWrapper;
