import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import notification from "./notifications.js";
import Container from "./components/Container.jsx";
import Row from "./components/Row.jsx";
import Col from "./components/Col.jsx";
import Alert from "./components/Alert.jsx";
import ListGroup from "./components/ListGroup.jsx";
import ListGroupItem from "./components/ListGroupItem.jsx";
import Reset from "./components/Reset.jsx";

function App() {
  const [notifications, setNotifications] = useState(notification);

  //lane 16： onClickHandler(id) id is a parameter，==id ,id is a parameter
  function onClickHandler(id) {
    setNotifications(notifications.filter((item) => item.id !== id));
  }

  function resetHandler() {
    setNotifications([]);
  }

  return (
    <>
      <Container>
        <h1>Notifications</h1>
        <Row>
          <Col>
            <ListGroup>
              {notifications.map((item) => (
                <ListGroupItem
                  key={item.id}
                  color="warning"
                  id={item.id}
                  onClickHandler={onClickHandler}
                >
                  <strong>
                    {item.id}. {item.name}
                  </strong>{" "}
                  <br />
                  {item.message}
                </ListGroupItem>
              ))}
            </ListGroup>{" "}
            <br />
            <Reset resetHandler={resetHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
