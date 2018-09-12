var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { "class": "navbar navbar-expand-lg navbar-light bg-light" },
        React.createElement(
          "a",
          { "class": "navbar-brand", href: "#" },
          "Navbar"
        ),
        React.createElement(
          "button",
          { "class": "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
          React.createElement("span", { "class": "navbar-toggler-icon" })
        ),
        React.createElement(
          "div",
          { "class": "collapse navbar-collapse", id: "navbarSupportedContent" },
          React.createElement(
            "ul",
            { "class": "navbar-nav mr-auto" },
            React.createElement(
              "li",
              { "class": "nav-item active" },
              React.createElement(
                "a",
                { "class": "nav-link", href: "#" },
                "Home ",
                React.createElement(
                  "span",
                  { "class": "sr-only" },
                  "(current)"
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "nav-item" },
              React.createElement(
                "a",
                { "class": "nav-link", href: "#" },
                "Link"
              )
            ),
            React.createElement(
              "li",
              { "class": "nav-item dropdown" },
              React.createElement(
                "a",
                { "class": "nav-link dropdown-toggle", href: "#", id: "navbarDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                "Dropdown"
              ),
              React.createElement(
                "div",
                { "class": "dropdown-menu", "aria-labelledby": "navbarDropdown" },
                React.createElement(
                  "a",
                  { "class": "dropdown-item", href: "#" },
                  "Action"
                ),
                React.createElement(
                  "a",
                  { "class": "dropdown-item", href: "#" },
                  "Another action"
                ),
                React.createElement("div", { "class": "dropdown-divider" }),
                React.createElement(
                  "a",
                  { "class": "dropdown-item", href: "#" },
                  "Something else here"
                )
              )
            ),
            React.createElement(
              "li",
              { "class": "nav-item" },
              React.createElement(
                "a",
                { "class": "nav-link disabled", href: "#" },
                "Disabled"
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(React.Component);

ReactDOM.render(React.createElement(BaseNavbar, null), document.getElementById('base_navbar'));