
import React from 'react'
import Form from 'react-bootstrap/Form'
import bg from '../images/1.png'
import Button from 'react-bootstrap/Button'
import logo from '../images/guc_logo.png'
import gif from '../images/gif2.gif'
import hr from '../images/hr.gif'
import { useHistory } from "react-router";
import Bye from './Logout'
import Alert from './Alert'


export default function HR() {
    const history = useHistory()
    const [flag,setFlag]=React.useState('false')
    const [showAlert, setShowAlert] = React.useState(false)
    const [showAlertMess, setShowAlertMess] = React.useState('error')
    const [severity, setSeverity] = React.useState('error')
    const closealert = () => {
      setShowAlert(false)
    }
    
    const redirect = () => {
        history.push('/Profile')
        console.log('true')
      }
      const redirect1 = () => {
        history.push('/Register')
        console.log('true')
      }
      const redirect2 = () => {
        history.push('/')
        console.log('true')
      }
      const redirect3 = () => {
        setFlag(true)
        console.log(flag)
      }
      const redirect4 = () => {
        history.push('/D')
        console.log('true')
      }
      const redirect5 = () => {
        history.push('/Salary')
        console.log('true')
      }
      const redirect6 = () => {
        history.push('/ME')
        console.log('true')
      }
      const redirect7= () => {
        history.push('/Attendance')
        console.log('true')
      }
      const redirect8= () => {
        history.push('/Register')
        console.log('true')
      }
      const redirect9= () => {
        history.push('/Update')
        console.log('true')
      }
      const redirect10= () => {
        history.push('/Add')
        console.log('true')
      }
      const redirect11= () => {
        history.push('/Delete')
        console.log('true')
      }
      const redirect12= () => {
        history.push('/Other')
        console.log('true')
      }
      const handleAlert = () => {
        setShowAlert(true)
        setShowAlertMess('You Signed in Successfully !')
        setSeverity('success')
      }
      const handleAlert2 = () => {
        setShowAlert(true)
        setShowAlertMess('You Signed Out Successfully !')
        setSeverity('success')
      }

    return (
        
             <div  style={{backgroundImage:`url(${bg})`,backgroundSize:'100% 100%',minHeight:'100vh'}}>
                 <Alert
          showAlert={showAlert}
          handleClose={closealert}
          severity={severity}
          msg={showAlertMess}
        />

<table>
            
            <tr>
        <td>
                <img src={logo}style={{marginLeft: '80vw',marginTop:'2vw',height:'5vw', width:'10vw'}} onClick={redirect2}></img>
                
</td>
</tr>
</table>
<table>

  <td>
<img style={{height:'15vw',width:'25vw',marginLeft:'4vw'}}src={hr}></img>
  </td>
  <td>
  <table>
  <td>
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'-10vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={redirect}>Profile</Button>
    </tr>
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'-5.5vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={handleAlert}>Sign In</Button>
    </tr>
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'-1vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={handleAlert2}>Sign Out</Button>
    </tr>
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:' 1vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}  onClick={redirect4}>Logout</Button>
 
    </tr>
    </td>
    <td>
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'-10vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}  onClick={redirect5}>View Your Salary</Button>
 
    </tr>
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'-5.5vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}  onClick={redirect6}>Missings/Extras</Button>
 
    </tr>
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'-0.9vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}  onClick={redirect7}>View Attendance</Button>
 
    </tr>
    
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'1.2vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}  onClick={redirect8}>Register A Member</Button>
 
    </tr>
    </td>
    <td>
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'-10vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}  onClick={redirect10}>Add</Button>
 
    </tr>
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'-5.5vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}  onClick={redirect9}>Update</Button>
 
    </tr>
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'-0.9vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}  onClick={redirect11}>Delete</Button>
 
    </tr>
    
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'1.2vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}  onClick={redirect12}> Other Services</Button>
 
    </tr>
    </td>
</table>
</td>
</table>
            
        </div>
    )
}
