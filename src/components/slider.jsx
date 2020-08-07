import React, { Component } from "react";
import JumpButtons from "./jumpButtons";
import "./slider.scss";
import "@fortawesome/fontawesome-free/css/all.css";

class Slider extends Component {
  state = {
    data: this.props.data,
    firstSlide: 0,
    secondSlide: 0,
    thirdSlide: 1,
    currentSlideIndex: 0,
    deg: 0,
    deltaX: 0,
    touchStartX: 0,
    beingTouched: false,
  };

  componentDidMount() {
    this.resetState();
  }

  handleGoLeft() {
    this.handleJump(this.calculateValue(this.state.currentSlideIndex, false));
  }

  handleGoRight() {
    this.handleJump(this.calculateValue(this.state.currentSlideIndex, true));
  }

  handleStart(clientX) {
    this.setState({
      touchStartX: clientX,
      beingTouched: true,
    });
  }

  handleMove(clientX) {
    if (this.state.beingTouched) {
      const touchX = clientX;
      let deltaX = touchX - this.state.touchStartX;
      this.setState({
        deltaX,
      });
    }
  }

  handleEnd() {
    if (this.state.touchStartX !== 0) {
      if (this.state.deltaX > 50) {
        this.handleGoLeft();
      } else if (this.state.deltaX < -50) {
        this.handleGoRight();
      }
    }
    this.setState({
      touchStartX: 0,
      deltaX: 0,
      beingTouched: false,
    });
  }

  handleJump = (index) => {
    let newState = {
      deg: index * -120,
      currentSlideIndex: index,
    };
    switch (index % 3) {
      case 0:
        newState = {
          ...newState,
          firstSlide: index - 1 < 0 ? this.state.data.length - 1 : index - 1,
          secondSlide: index,
          thirdSlide: index + 1 > this.state.data.length - 1 ? 0 : index + 1,
        };

        break;
      case 1:
        newState = {
          ...newState,
          firstSlide: index + 1 > this.state.data.length - 1 ? 0 : index + 1,
          secondSlide: index - 1 < 0 ? this.state.data.length - 1 : index - 1,
          thirdSlide: index,
        };

        break;
      case 2:
        newState = {
          ...newState,
          firstSlide: index,
          secondSlide: index + 1 > this.state.data.length - 1 ? 0 : index + 1,
          thirdSlide: index - 1 < 0 ? this.state.data.length - 1 : index - 1,
        };

        break;
    }
    this.setState(newState);
  };

  handleTouchStart(touchStartEvent) {
    this.handleStart(touchStartEvent.targetTouches[0].clientX);
  }
  handleTouchMove(touchMoveEvent) {
    this.handleMove(touchMoveEvent.targetTouches[0].clientX);
  }
  handleTouchEnd() {
    this.handleEnd();
  }

  handleMouseDown(mouseDownEvent) {
    mouseDownEvent.preventDefault();
    this.handleStart(mouseDownEvent.clientX);
  }

  handleMouseMove(mouseMoveEvent) {
    this.handleMove(mouseMoveEvent.clientX);
  }

  handleMouseUp() {
    this.handleEnd();
  }

  handleMouseLeave() {
    this.handleMouseUp();
  }

  calculateValue(field, next) {
    return next
      ? this.calculateNextValue(field, this.state.data.length - 1)
      : this.calculatePreviousValue(field, this.state.data.length - 1);
  }
  calculateNextValue(value, limit) {
    return value + 1 > limit ? 0 : value + 1;
  }

  calculatePreviousValue(value, limit) {
    return value - 1 < 0 ? limit : value - 1;
  }

  resetState() {
    this.setState({
      data: this.props.data,
      deg: 0,
      rotations: 0,
      firstSlide: this.state.data.length - 1,
      secondSlide: 0,
      thirdSlide: 1,
      currentSlideIndex: 0,
    });
  }

  render() {
    const {
      data,
      firstSlide,
      secondSlide,
      thirdSlide,
      deg,
      currentSlideIndex,
    } = this.state;
    return data.length > 1 ? (
      <div className="scene">
        <div
          className="slider"
          onTouchStart={(touchStartEvent) =>
            this.handleTouchStart(touchStartEvent)
          }
          onTouchMove={(touchMoveEvent) => this.handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => this.handleTouchEnd()}
          onMouseDown={(mouseDownEvent) => this.handleMouseDown(mouseDownEvent)}
          onMouseMove={(mouseMoveEvent) => this.handleMouseMove(mouseMoveEvent)}
          onMouseUp={() => this.handleMouseUp()}
          onMouseLeave={() => this.handleMouseLeave()}
          style={{
            webkitTransform: `rotateY(${deg}deg)`,
            MozTransform: `rotateY(${deg}deg)`,
            msTransform: `rotateY(${deg}deg)`,
            OTransform: `rotateY(${deg}deg)`,
            transform: `rotateY(${deg}deg)`,
            transition: "0.5s",
          }}
        >
          <div className="face left">
            <div className="content-container">
              <div className="content">{data[firstSlide].content}</div>
            </div>
          </div>
          <div className="face front">
            <div className="content-container">
              <div className="content">{data[secondSlide].content}</div>
            </div>
          </div>
          <div className="face right">
            <div className="content-container">
              <div className="content">{data[thirdSlide].content}</div>
            </div>
          </div>
        </div>
        <i
          id="toLeft"
          className="fas fa-angle-left"
          onClick={() => this.handleGoLeft()}
        ></i>
        <i
          id="toRight"
          className="fas fa-angle-right"
          onClick={() => this.handleGoRight()}
        ></i>
        <JumpButtons
          data={data}
          handleJump={this.handleJump}
          active={currentSlideIndex}
        />
      </div>
    ) : data.length < 1 ? (
      <div className="scene">
        <div className="slider">
          <div className="face front">No content provided</div>
        </div>
      </div>
    ) : (
      <div className="scene">
        <div className="slider">
          <div className="face front">{data[secondSlide].content}</div>
        </div>
      </div>
    );
  }
}

export default Slider;
