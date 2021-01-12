
import React from 'react'
import Form from 'react-bootstrap/Form'
import bg from '../images/1.png'
import Button from 'react-bootstrap/Button'
import logo from '../images/guc_logo.png'
import { useHistory } from "react-router";


export default function StaffHomePage() {
    const history = useHistory()
    
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
    return (
        
             <div  style={{backgroundImage:`url(${bg})`,backgroundSize:'100% 100%',minHeight:'100vh'}}>

<table>
            
            <tr>
        <td>
                <img src={logo}style={{marginLeft: '80vw',marginTop:'2vw',height:'5vw', width:'10vw'}} onClick={redirect2}></img>
                
</td>
</tr>
</table>
<table>
    <tr>
    <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '44.5vw',
                  marginTop:'8vw',
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
                  marginLeft: '40vw',
                  marginTop:'2vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={redirect1}>Register A New Member</Button>
    </tr>
</table>
            
        </div>
    )
}
