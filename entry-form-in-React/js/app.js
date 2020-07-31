class CheckboxCoinfirmation extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  displayMessage = () => {
    if (!this.state.isConfirmed) {
      return <PositiveMessage />;
    } else return <NegativeMessage />;
  };

  render() {
    return (
      <>
        <h1>Are you 21-years old?</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handleCheckboxChange}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Yes, I am!</label>
        {this.displayMessage()}
      </>
    );
  }
}

const PositiveMessage = () => <p>You can't come in! </p>;
const NegativeMessage = () => <p>Welcame!</p>;

ReactDOM.render(<CheckboxCoinfirmation />, document.getElementById("root"));
