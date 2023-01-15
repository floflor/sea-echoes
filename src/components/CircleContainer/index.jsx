import styled, { keyframes } from "styled-components";

const circleIn = keyframes`
from {
  right: -20%;
}
to {
  right: 100%;
  transform: translateX(-100%);
}
}
`;

export const Container = styled.div`
  position: absolute;
  top: ${(props) => props.top && props.top};
  animation-name: ${circleIn};
  animation-duration: 4000ms;
  animation-timing-function: cubic-bezier(0.28, 0.82, 0.82, 0.06);
  animation-iteration-count: infinite;
`;


export default Container;
