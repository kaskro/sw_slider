import React, { Component } from "react";
import Slider from "./components/slider";
import "./app.scss";

class App extends Component {
  state = {
    data: [
      {
        content: (
          <div
            style={{
              backgroundColor: "lightpink",
              height: "100%",
            }}
          >
            1
          </div>
        ),
      },
      {
        content: (
          <div
            style={{
              backgroundColor: "lightblue",
              height: "100%",
            }}
          >
            2
          </div>
        ),
      },
      {
        content: (
          <div
            style={{
              backgroundImage: "url(https://picsum.photos/id/210/1980/1024)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          />
        ),
      },
      {
        content: (
          <div style={{ margin: "1em 10%" }}>
            <img src="https://picsum.photos/id/220/1980/1024" alt="image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem ratione sequi sapiente culpa molestias, voluptatum
              eligendi perferendis optio voluptate? Quidem accusantium assumenda
              neque animi impedit similique a veniam quia dolorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem ratione sequi sapiente culpa molestias, voluptatum
              eligendi perferendis optio voluptate? Quidem accusantium assumenda
              neque animi impedit similique a veniam quia dolorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem ratione sequi sapiente culpa molestias, voluptatum
              eligendi perferendis optio voluptate? Quidem accusantium assumenda
              neque animi impedit similique a veniam quia dolorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem ratione sequi sapiente culpa molestias, voluptatum
              eligendi perferendis optio voluptate? Quidem accusantium assumenda
              neque animi impedit similique a veniam quia dolorem.
            </p>
          </div>
        ),
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Slider data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
