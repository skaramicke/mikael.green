import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/gronitab" component={CompanyPage} />
        </Switch>
      </Router>
    );
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header title="Mikael Grön" />
        <Section title="Grön IT AB">
          <p>Jag startade mitt aktiebolag i februari 2021.</p>
        </Section>
        <Section title="Mitt arbete">
          <p>
            Jag arbetar som systemutvecklare för{" "}
            <a href="https://elastx.se">Elastx AB</a> i Stockholm.
          </p>
          <p>
            I teamet figurerar jag som Scrum Master (PSM-II) och vi utvecklar
            interna administrationsverktyg samt ansvarar för webbsidan elastx.se
          </p>
        </Section>
      </div>
    );
  }
}

class CompanyPage extends React.Component {
  render() {
    return <Header title="Grön IT AB" />;
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <nav>
          <a href="/">Hem</a>
          <a href="/gronitab">Mitt företag</a>
        </nav>
      </header>
    );
  }
}

class Section extends React.Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
