import styled from "styled-components";
const Circle = styled.div`
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  border-radius: 50%;
  background-color: #6a7570;
  border: 0.5px solid black;
`;

export default Circle;
