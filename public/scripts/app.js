var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { BrowserRouter as Router, Route } from "react-router-dom";

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        Router,
        null,
        React.createElement(
          Switch,
          null,
          React.createElement(Route, { exact: true, path: "/", component: HomePage }),
          React.createElement(Route, { exact: true, path: "/gronitab", component: CompanyPage })
        )
      );
    }
  }]);

  return App;
}(React.Component);

var HomePage = function (_React$Component2) {
  _inherits(HomePage, _React$Component2);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: "Mikael Gr\xF6n" }),
        React.createElement(
          Section,
          { title: "Gr\xF6n IT AB" },
          React.createElement(
            "p",
            null,
            "Jag startade mitt aktiebolag i februari 2021."
          )
        ),
        React.createElement(
          Section,
          { title: "Mitt arbete" },
          React.createElement(
            "p",
            null,
            "Jag arbetar som systemutvecklare f\xF6r",
            " ",
            React.createElement(
              "a",
              { href: "https://elastx.se" },
              "Elastx AB"
            ),
            " i Stockholm."
          ),
          React.createElement(
            "p",
            null,
            "I teamet figurerar jag som Scrum Master (PSM-II) och vi utvecklar interna administrationsverktyg samt ansvarar f\xF6r webbsidan elastx.se"
          )
        )
      );
    }
  }]);

  return HomePage;
}(React.Component);

var CompanyPage = function (_React$Component3) {
  _inherits(CompanyPage, _React$Component3);

  function CompanyPage() {
    _classCallCheck(this, CompanyPage);

    return _possibleConstructorReturn(this, (CompanyPage.__proto__ || Object.getPrototypeOf(CompanyPage)).apply(this, arguments));
  }

  _createClass(CompanyPage, [{
    key: "render",
    value: function render() {
      return React.createElement(Header, { title: "Gr\xF6n IT AB" });
    }
  }]);

  return CompanyPage;
}(React.Component);

var Header = function (_React$Component4) {
  _inherits(Header, _React$Component4);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "header",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "nav",
          null,
          React.createElement(
            "a",
            { href: "/" },
            "Hem"
          ),
          React.createElement(
            "a",
            { href: "/gronitab" },
            "Mitt f\xF6retag"
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Section = function (_React$Component5) {
  _inherits(Section, _React$Component5);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  _createClass(Section, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        null,
        React.createElement(
          "h2",
          null,
          this.props.title
        ),
        this.props.children
      );
    }
  }]);

  return Section;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
