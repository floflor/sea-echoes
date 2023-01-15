import { useState } from "react";
import Lines from "../components/Lines/Lines";
import styles from "./Loading.module.css";
import styled, { keyframes } from "styled-components";
import { pixelToPercentage } from "../helpers";

const circleInAnimation = keyframes`
from {
  right: -20%;
}
to {
  right: 100%;
  transform: translateX(-100%);
}
}
`;
const Container = styled.div`
  position: absolute;
  top: ${(props) => props.top && props.top};
  animation-name: ${circleInAnimation};
  animation-duration: 4000ms;
  animation-timing-function: cubic-bezier(0.28, 0.82, 0.82, 0.06);
  animation-iteration-count: infinite;
`;

const Layout = () => {
  const [userCircles, setUserCircles] = useState([]);

  const handleNewCircle = (e) => {
    const y = e.screenY;
    const newElement = pixelToPercentage(y);
    setUserCircles([...userCircles, newElement]);
    console.log(userCircles);
  };

  return (
    <div className={styles.container} onClick={(e) => handleNewCircle(e)}>
      <Lines animation={true} />
      <div className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </div>
      {userCircles.length > 0 &&
        userCircles.map((style, i) => (
          <Container top={style} key={i}>
            <div className={styles.circle}></div>
          </Container>
        ))}
    </div>
  );
};

export default Layout;
