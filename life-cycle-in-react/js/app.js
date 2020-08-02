class App extends React.Component {
  state = {
    clock: true,
  };

  handleClick = () => {
    this.setState((state) => ({
      active: !state.active,
    }));
  };

  render() {
    return (
      <>
        <SwitchButton active={this.state.active} click={this.handleClick} />
        {this.state.active && <Clock />}
      </>
    );
  }
}

const SwitchButton = (props) => (
  <button onClick={props.click}>{props.active ? "On" : "Off"}</button>
);

class Clock extends React.Component {
  interval = "";

  state = {
    time: this.getTime(),
  };

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    };
  }

  setTime() {
    const time = this.getTime();
    this.setState({ time });
  }

  componentDidMount() {
    this.interval = setInterval(this.setTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <div>
        {hours}:{minutes}:{seconds}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
