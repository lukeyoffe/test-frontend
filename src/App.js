import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import getData from './service';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let x = "Test string"
let i = 0;
function inc() {
  i++;
}

function updateText(text) {
  this.setState({text})
}

function ButtonLabel(props) {
  const [num, setNum] = useState(0)
  return(
    <div>
      <p>{num}</p>
      <Button variant="contained" color="primary" onClick = {() => { getData().then(ress =>{
            // handle success
            let res = ress.data
            console.log("Returning " + res);
            setNum(ress.data[0].name)
        })
        }}>
        {x + ": " + num}
      </Button>

    </div>
    
  )
}

function TextFieldAndLabel(props) {
  const[value, setValue] = useState("")
  return(
    <div>
      <TextField
      id="field"
      label="Enter Here"
      defaultValue = {props.value}
      onChange={() => setValue(event.target.value)}
      
      />
      
      <p>Value: {value}</p>
      <ButtonLabel upd8 = { setValue } ></ButtonLabel>
    </div>

  )
}



export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        {/* <ButtonLabel></ButtonLabel> */}
        <TextFieldAndLabel value="Username"></TextFieldAndLabel>
        {/* <ButtonLabel></ButtonLabel> */}
      </Box>
    </Container>
  );
}
