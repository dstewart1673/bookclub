var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthNavbar = function (_React$Component) {
  _inherits(AuthNavbar, _React$Component);

  function AuthNavbar(props) {
    _classCallCheck(this, AuthNavbar);

    return _possibleConstructorReturn(this, (AuthNavbar.__proto__ || Object.getPrototypeOf(AuthNavbar)).call(this, props));
  }

  _createClass(AuthNavbar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { "class": "navbar navbar-expand-lg navbar-light bg-light" },
        React.createElement(
          "a",
          { "class": "navbar-brand", href: "#" },
          "BookTrading"
        ),
        React.createElement(
          "button",
          { "class": "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
          React.createElement("span", { "class": "navbar-toggler-icon" })
        ),
        React.createElement(
          "div",
          { "class": "collapse navbar-collapse flex-grow-1 d-flex", id: "navbarSupportedContent" },
          React.createElement(
            "ul",
            { "class": "navbar-nav mr-auto flex-grow-1 d-flex" },
            React.createElement(
              "li",
              { "class": "nav-item" },
              React.createElement(
                "a",
                { "class": "nav-link", href: "/books" },
                "Browse"
              )
            ),
            React.createElement(
              "li",
              { "class": "nav-item" },
              React.createElement(
                "a",
                { "class": "nav-link", href: "#" },
                "Add a Book"
              )
            ),
            React.createElement(
              "li",
              { "class": "nav-item align-self-end" },
              React.createElement(
                "a",
                { "class": "nav-link", href: "#" },
                "Login"
              )
            )
          )
        )
      );
    }
  }]);

  return AuthNavbar;
}(React.Component);

ReactDOM.render(React.createElement(AuthNavbar, null), document.getElementById('navbar'));