import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../Config/Config'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  








export const Login = (props) => {

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [loginError, setLoginError]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(()=>{
            setEmail('');
            setPassword('');
            setLoginError('');
            props.history.push('/');
        }).catch(err=>setLoginError(err.message))
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>


<Grid justify="center"   container spacing={0}>
     <br></br>
        <Grid align="center"  item xs={12} sm={4}>
          <Paper style={{ borderRadius: '0px',height:"550px",backgroundImage:`url("https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,marginTop:"70px"}} className={classes.paper}></Paper>
        </Grid>
        <br></br>
        <Grid  align="center" align="center"  item xs={12} sm={4}>
          <Paper justify="center"  style={{ borderRadius: '0px',height:"550px",marginTop:"70px"}}
           className={classes.paper}>
              <h1 > <AddCircleIcon style={{  fontSize: '35px' , color:'#0099FF' }}/>To do list</h1><p style={{  marginBottom:'50px', marginTop:'40px', }}>sign in to your account</p>
           
           <form style={{textAlign:"center"}} autoComplete="off" 
           onSubmit={handleLogin}>
               
              
               <input placeholder="email"  style={{maxWidth:"20vw",marginLeft:'75px'}}  type="email" className='form-control'
                   required onChange={(e)=>setEmail(e.target.value)}
                   value={email}

               />
               <br></br>
               
               <input  placeholder="password"  style={{maxWidth:"20vw",marginLeft:'75px'}}   type="password" className='form-control'
                   required onChange={(e)=>setPassword(e.target.value)}
                   value={password}
               />
               <br></br>
               <button style={{  marginTop:'30px', marginBottom:'70px', }} type="submit" className='btn btn-success mybtn2'>
                  LOGIN
               </button>
           </form>
           {loginError&&<div className='error-msg'>
               {loginError}
           </div>}
           
           <span >Don't have an account? Create One
           <Link to="signup"> here</Link></span></Paper>
        </Grid>
       
      
      </Grid>

        
            
        </div>
    )
}