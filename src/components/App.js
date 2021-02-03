import { BrowserRouter, Route, Switch } from "react-router-dom"
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import Header from "./UI/Header"
import theme from "./UI/Theme"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <h2>home</h2>} />
          <Route exact path="/services" component={() => <h2>services</h2>} />
          constomsoftware
          <Route
            exact
            path="/mobileapps"
            component={() => <h2>mobileapps</h2>}
          />
          <Route exact path="/websites" component={() => <h2>websites</h2>} />
          <Route
            exact
            path="/revolutions"
            component={() => <h2>revolutions</h2>}
          />
          <Route exact path="/aboutus" component={() => <h2>aboutus</h2>} />
          <Route exact path="/contact" component={() => <h2>contact</h2>} />
          <Route exact path="/estimate" component={() => <h2>estimate</h2>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
