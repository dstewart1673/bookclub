class UnauthNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">BookTrading</a>
        <a class='nav-item' href='/login'>Login</a>
      </nav>
    );
  }
}

ReactDOM.render(<UnauthNavbar />, document.getElementById('navbar'));
