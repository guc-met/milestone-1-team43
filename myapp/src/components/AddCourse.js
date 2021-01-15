import React from 'react'
import Form from 'react-bootstrap/Form'
import bg from '../images/1.png'
import Button from 'react-bootstrap/Button'
import logo from '../images/guc_logo.png'
import Alert from './Alert'


import { useHistory } from "react-router";



export default function AddLocation() {
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
        setShowAlertMess('Course Added Successfully !')
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
                        style={{ marginTop:"5vw" ,marginLeft:'20vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: '-5.5vw',
                              marginRight:"1vw",
                              fontFamily:'Georgia, serif'
                             
                            }}
                          >
                          Course Instructor
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
                          placeholder="Enter Course Instructor"
                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>

    </td>
    <td>
    <Form.Group
                        style={{ marginTop:'5vw',marginLeft:'5vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: '6vw',
                              marginRight:"1vw",fontFamily:'Georgia, serif'

                            }}
                          >
                           Course Name
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
                          placeholder="Enter Course Name"
                          type=''

                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>

    </td>
    
  </tr>
  <tr>
    <td>
    <Form.Group 
                        style={{ marginTop:"5vw" ,marginLeft:'20vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: '-1vw',
                              marginRight:"1vw",
                              fontFamily:'Georgia, serif'
                             
                            }}
                          >
                            TA Name
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
                          placeholder="Enter TA Name"
                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>

    </td>
    <td>
    <Form.Group
                        style={{ marginTop:'5vw',marginLeft:'5vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: '-1vw',
                              marginRight:"1vw",fontFamily:'Georgia, serif'

                            }}
                          >
                          Course Coordinator Name
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
                          placeholder="Enter Course Coordinator Name"
                          type='email'

                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>

    </td>
    
  </tr>
  <tr>
    <td>
    <Form.Group 
                        style={{ marginTop:"5vw" ,marginLeft:'20vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: '-3vw',
                              marginRight:"1vw",
                              fontFamily:'Georgia, serif'
                             
                            }}
                          >
                           Slot Number
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
                          placeholder="Enter Slot Number"
                        //   value=''
                        //   onChange=''
                        type='number'
                        />
                      </Form.Group>

    </td>
    <td>
    <Form.Group
                        style={{ marginTop:'5vw',marginLeft:'5vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: '8vw',
                              marginRight:"1vw",fontFamily:'Georgia, serif'

                            }}
                          >
                         Slot Type
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
                          placeholder="Enter Slot Type"
                          type=''

                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>

    </td>
    
  </tr>
  <tr>
    <td>
    <Form.Group 
                        style={{ marginTop:"5vw" ,marginLeft:'20vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: '-3vw',
                              marginRight:"1vw",
                              fontFamily:'Georgia, serif'
                             
                            }}
                          >
                           Department
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
                          placeholder="Enter Department"
                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>

    </td>
    <td>
    <Form.Group
                        style={{ marginTop:'5vw',marginLeft:'5vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: '5vw',
                              marginRight:"1vw",fontFamily:'Georgia, serif'

                            }}
                          >
                          Course Coverage
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
                          placeholder="Enter Course Coverage"
                          type='email'

                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>

    </td>
    
  </tr>
</table>
<Form.Group
                        style={{ marginTop:'5vw',marginLeft:'48vw' }}
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


