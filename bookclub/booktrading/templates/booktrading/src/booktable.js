class UnauthNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.books.map((book) => (
          <h1>BOOK</h1>
        )
        )}
      </div>
    );
  }
}

ReactDOM.render(<UnauthNavbar />, document.getElementById('navbar'));
