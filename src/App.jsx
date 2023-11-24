import { Container, Grid, Typography } from "@mui/material"
import { ArticlesProvider } from "./context/ArticlesProvider"
import { Articles } from "./components/Articles"
import { FormCategory } from "./components/FormCategory"

const App = () => {
  return (
    <>
      <ArticlesProvider>
        <Container>
          <header>
            <Typography variant="h2" component="h1" align="center">
              Search News
            </Typography>
          </header>
          <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center">

            <Grid item xs={12}>
                <FormCategory />
            </Grid>

            <Grid item xs={12}>
              <Articles />
            </Grid>

          </Grid>
        </Container>
      </ArticlesProvider>
    </>
  )
}

export default App