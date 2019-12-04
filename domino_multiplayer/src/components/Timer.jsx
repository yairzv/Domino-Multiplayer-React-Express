import React from "react";
const Manager = require("../utilities/Manager");
import { secondsToTime } from "../utilities/Manager";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: { minutes: 0, seconds: 0 }, seconds: 0 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.stopInterval = this.stopInterval.bind(this);
    this.countUp = this.countUp.bind(this);
    this.displaySpecificTime = this.displaySpecificTime.bind(this);
    this._isMounted = false;
    this.transferDataToHome = props.sendCurrentTime;
  }

  stopInterval() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.stopInterval();
    this.timer = 0;
    this.startTimer({ minutes: 0, seconds: 0 });
    this.setState(() => ({ time: { minutes: 0, seconds: 0 }, seconds: 0 }));
  }

  startTimer(initialTime) {
    this.timer = initialTime.minutes * 60 + initialTime.seconds;
    this.timer = this.countUp();
  }

  displaySpecificTime(time) {
    this.setState(prevState => {
      return {
        time: time,
        seconds: prevState.seconds
      };
    });
  }

  countUp() {
    if (this.props.isGameStarted && !this.props.isGameDone) {
      this.setState(prevState => {
        return {
          time: Manager.secondsToTime(prevState.seconds),
          seconds: prevState.seconds + 1
        };
      });
    }
    this.timeoutId = setTimeout(this.countUp, 1000);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.isResetNeeded !== this.props.isResetNeeded &&
      this.props.isResetNeeded
    ) {
      this.resetTimer();
    } else if (!this.props.isGameStarted) {
      this.stopInterval();
      if (this.props.timeToDisplay !== prevProps.timeToDisplay) {
        this.displaySpecificTime({
          minutes: this.props.timeToDisplay.minutes,
          seconds: this.props.timeToDisplay.seconds
        });
      }
    }
  }
  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted) {
      this.startTimer({ minutes: 0, seconds: 0 });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    this.transferDataToHome(this.state.time.minutes, this.state.time.seconds);
    return (
      <div>
        minutes: {this.state.time.minutes} secondes: {this.state.time.seconds}
      </div>
    );
  }
}
export default Timer;
