import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {auth, db} from '../Config/Config'
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
  


export const Signup = (props) => {

    const [fullName, setFullName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [registerationError, setRegisterationError]=useState('');

    const handleRegister=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
            db.collection('users').doc(cred.user.uid).set({
                Name: fullName,
                Email: email,
                Password: password
            }).then(()=>{
                setFullName('');
                setEmail('');
                setPassword('');
                setRegisterationError('');
                props.history.push('/login');
            }).catch(err=>setRegisterationError(err.message))
        }).catch(err=>setRegisterationError(err.message))
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

<h1 > <AddCircleIcon style={{  fontSize: '35px' , color:'#0099FF' }}/>To do list</h1><p style={{  marginBottom:'50px', marginTop:'40px', }}>sign up to your account</p>

            <form autoComplete="off" className='form-group'
            onSubmit={handleRegister}>
           
                <input placeholder="name" type="text" className='form-control'
                    required onChange={(e)=>setFullName(e.target.value)}
                    value={fullName}
                />
                <br></br>
                
                <input placeholder="email" type="email" className='form-control'
                    required onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
                <br></br>
               
                <input placeholder="password" type="password" className='form-control'
                    required onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                <br></br>
                <button style={{  marginTop:'30px', marginBottom:'30px', }} type="submit" className='btn btn-success mybtn2'>
                   REGISTER
                </button>
            </form>
            {registerationError&&<div className='error-msg'>
                {registerationError}
            </div>}
           
            <span>Already have an account? Login
            <Link to="login"> here</Link></span>

              </Paper>
        </Grid>
       
      
      </Grid>







        </div>
    )
}