const displayMessage = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted) {
    if (!isConfirmed) {
      return <ValidationMessage txt="You can not enter!" />;
    } else return <ValidationMessage txt="Wecome!" />;
  }
};

const OrderForm = (props) => (
  <form onSubmit={props.submit}>
    <input
      type="checkbox"
      id="age"
      onChange={props.change}
      checked={props.isConfirmed}
    />
    <label htmlFor="age"> Yes, I am! </label>
    <br /> <br />
    <button type="submit">I want to buy ticket!</button>
  </form>
);

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

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;
    return (
      <>
        <h1> Are you 21 - years old ? </h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          check={isConfirmed}
        />
        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    );
  }
}

const ValidationMessage = (props) => <p>{props.txt} </p>;

ReactDOM.render(<CheckboxCoinfirmation />, document.getElementById("root"));
