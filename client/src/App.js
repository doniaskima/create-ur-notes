import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"
function App() {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Create Your Notes</Typography>
        <img src="https://raw.githubusercontent.com/doniaskima/challenge-05-websites-with-reactjs/let's-code-website/src/images/hero-girl.png" alt="coding" height="100" width="200" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="spase-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
