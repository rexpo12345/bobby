import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
import logows from './whatsup.gif';
import img1 from './waifudragon.gif';
import img2 from './Milky.gif';
import img3 from './nezuko.gif';
import isaac from './anime.png';
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#800000",
    },
    secondary: {
      main:"#800080",
    },
    testing: {
      main:"#FF0000",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 30,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App" style={{backgroundColor: '#C0C0C0'}} >
      <ThemeProvider theme={theme} >
        <NavBar/>
        <div className={classes.wrapper} >
          <img src={isaac} width="70%" height="450" className={classes.bigSpace} />
          <Typography variant="h2" className={classes.bigSpace} color="primary">
             They talked about my one  taps
          </Typography>
          <Typography variant="h4" className={classes.littleSpace} color="secondary">
            FAILING AND FALIURE ARE TWO DIFFERENT THINGS , FAILNG IS A PROCESS AND FAILURE IS A RESULT , WE LEARN FROM FAILING WE IMPROVE OURSELF WE WONT REPEAT HISTROY , WHILE FAILURE IS ACCEPTING UR RESULTS.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<img src={logows}  width="250" height="250" style={{borderRadius:150, shadowColor:"#000"}}/>}  title="How to Aim" btnTitle="Show me More" />
          <Grid icon={<img src={img1}  width="250" height="250" style={{borderRadius:150, shadowColor:"#000"}}/>} title="ISAAC'S Achievements" btnTitle="Show me More"/>

        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<img src={img2}  width="250" height="250" style={{borderRadius:150, shadowColor:"#000"}}/>}  title="HOBBYS" btnTitle="Show me More"/>
          <Grid icon={<img src={img3}  width="250" height="250" style={{borderRadius:150, shadowColor:"#000"}}/>}  title="ABOUT ME" btnTitle="Show me More"/>

        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
