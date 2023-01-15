import { useState } from "react";
import Lines from "../components/Lines/Lines";
import { pixelToPercentage, randomNumber } from "../helpers";
import styles from "./Layout.module.css";
import Circle from "../components/Circle";
import Container from "../components/CircleContainer";


const Layout = () => {
  const [userCircles, setUserCircles] = useState([]);

  const handleNewCircle = (e) => {
    const y = e.screenY;
    const newElement = pixelToPercentage(y);
    setUserCircles([...userCircles, newElement]);
  };

  return (
    <div className={styles.container} onClick={(e) => handleNewCircle(e)}>
      <Lines animation={true} />
      <Container>
        <Circle width="150px" height="150px" />
      </Container>
      {userCircles.length > 0 &&
        userCircles.map((style, i) => {
          const px = `${randomNumber(170, 50)}px`;
          return (
            <Container top={style} key={i}>
              <Circle width={px} height={px} />
            </Container>
          );
        })}
    </div>
  );
};

export default Layout;
