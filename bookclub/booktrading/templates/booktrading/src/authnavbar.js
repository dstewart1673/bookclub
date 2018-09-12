class AuthNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">BookTrading</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse flex-grow-1 d-flex" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto flex-grow-1 d-flex">
            <li class="nav-item">
              <a class="nav-link" href="/books">Browse</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Add a Book</a>
            </li>
            <li class="nav-item align-self-end">
              <a class="nav-link" href="#">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );

  }
}

ReactDOM.render(<AuthNavbar />, document.getElementById('navbar'));
