import React from 'react'
import Form from 'react-bootstrap/Form'
import bg from '../images/1.png'
import Button from 'react-bootstrap/Button'
import logo from '../images/guc_logo.png'
import Alert from './Alert'


import { useHistory } from "react-router";



export default function DeleteStaff() {
    const history = useHistory()
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
        history.push('/')
        console.log('true')
      }
    
      const redirect2 = () => {
        history.push('/HR')
        console.log('true')
      }
    
      const handleAlert = () => {
        setShowAlert(true)
        setShowAlertMess('Staff Deleted Successfully !')
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

<table >
            
            <tr>
            <td>
              <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
               marginLeft:"2vw",
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={redirect2}>Back</Button>
              </td>
              
        <td>
       
                <img src={logo}style={{marginLeft: '74.1vw',marginTop:'2vw',height:'5vw', width:'10vw'}} onClick={redirect1}></img>
               
</td>
</tr>
</table>
<table style={{marginLeft:'vw'}}>
  <tr>
    <td>
    <Form.Group 
                        style={{ marginTop:"5vw" ,marginLeft:'35vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: 'vw',
                              marginRight:"1vw",
                              fontFamily:'Georgia, serif'
                             
                            }}
                          >
                            ID
                          </text>
                        </Form.Label>
                        <Form.Control
                          required
                          style={{
                            fontSize: '0.8vw',
                            width: '20vw',
                            height: '2.5vw',
                            borderColor: 'white',
                            borderRadius: '0.5vw',
                            borderWidth: '0.1vw',
                            boxShadow: 'inset 1px 1px 4px rgba(0, 0, 0, 0.25)',
                            outline:'none',fontFamily:'Georgia, serif'
                          }}
                          placeholder="Enter ID"
                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>

    </td>
  
    
  </tr>
</table>
<Form.Group
                        style={{ marginTop:'5vw',marginLeft:'44vw' }}
                      >
                      <Button  style={{height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={handleAlert}>
                        Submit
                        </Button>
                      
                      </Form.Group>
                   


        </div>
    )
}


