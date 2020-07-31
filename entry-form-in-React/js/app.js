class CheckboxCoinfirmation extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ isFormSubmitted: true });
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (!this.state.isConfirmed) {
        return <PositiveMessage />;
      } else return <NegativeMessage />;
    }
  };

  render() {
    return (
      <>
        <h1> Are you 21 - years old ? </h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age"> Yes, I am! </label>
          <br /> <br />
          <button type="submit">I want to buy ticket!</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

const PositiveMessage = () => <p> You can 't come in! </p>;
const NegativeMessage = () => <p> Welcame! </p>;

ReactDOM.render(<CheckboxCoinfirmation />, document.getElementById("root"));
