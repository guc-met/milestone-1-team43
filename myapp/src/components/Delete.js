
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


export default function Delete() {
    const history = useHistory()
    const [flag,setFlag]=React.useState('false')
   
    
    const redirect = () => {
        history.push('/DeleteLoc')
        console.log('true')
      }
      const redirect1 = () => {
        history.push('/DeleteCourse')
        console.log('true')
      }
      const redirect2 = () => {
        history.push('/')
        console.log('true')
      }
      const redirect3 = () => {
        history.push('/DeleteDep')
        setFlag(true)
        console.log(flag)
      }
      const redirect4 = () => {
        history.push('/DeleteFac')
        console.log('true')
      }
      const redirect5 = () => {
        history.push('/DeleteStaff')
        console.log('true')
      }
      
     
    return (
        
             <div  style={{backgroundImage:`url(${bg})`,backgroundSize:'100% 100%',minHeight:'100vh'}}>
        

<table>
            
            <tr>
        <td>
                <img src={logo}style={{marginLeft: '80vw',marginTop:'2vw',height:'5vw', width:'10vw'}} onClick={redirect2}></img>
                
</td>
</tr>
</table>

  <table style={{marginLeft:'30vw',marginTop:'10VW'}}>
 
    <tr>
        <td>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'vw',
                  
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={redirect}>Delete Location</Button>
       </td>
       <br></br>
       <td>
        <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'-vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={redirect1}>Delete Course</Button>
    </td>
    </tr>
    <tr>
        <td>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={redirect3}>Delete Department</Button>
   </td>
   <br></br>
    <td>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}  onClick={redirect5}>Delete Staff</Button>
 
 </td> </tr>
  
    
<tr>
<td>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '5vw',
                  marginTop:'vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}  onClick={redirect4}>Delete Faculty</Button>
 
 </td> 
</tr>
</table>
            
        </div>
    )
}
