import * as React from 'react'
import Navbar from '../components/navbar'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import Doughnut from '../components/doughnut'
import Experience from '../components/experience'
import Process from '../components/process'

const theme = createTheme({
  palette: {
    primary:{
      main: "#75FFDC"
    },
  black:{
   main: "#000" 
  }
  }
})

const doughnutPage = {
  width: "1512px",
}

const processPage = {
  position: "relative",
  width: "1512px",
}

const experiencePage = {
  position: "relative",
  width: "1347px",
  height:"656px",
}

const style = {
  height: "2000px",
  backgroundColor: "#fff",
  backgroundImage: "radial-gradient(circle, #ddd 1%, transparent 10%), radial-gradient(circle, #ddd 1%, transparent 10%)",
  backgroundSize: "50px 50px",
  backgroundPosition:"0 0, 1px 1px",
}

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={style}>
        <div>
          <Navbar/>
        </div>
        <div style = {doughnutPage}>
          <Doughnut/>
        </div>
        <div style = {processPage}>
          <Process/>
        </div>
        <div style = {experiencePage}>
          <Experience/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage