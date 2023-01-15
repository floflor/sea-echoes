import styled, { keyframes } from "styled-components";
const lines = keyframes`
0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(-1);
  }
}
`;
export const Line = styled.div`
  width: 0.5px;
  height: 100%;
  margin: 0 0 0 10px;
  background: black;
  display: inline-block;
  animation-name: ${lines};
  animation-duration: 2000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default Line;