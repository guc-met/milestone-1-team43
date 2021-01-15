import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import logo from '../images/guc_logo.png'
import login from '../images/1.png'
import { makeStyles } from '@material-ui/core/styles'
import close from '../images/xsign.png'
import { useHistory } from "react-router";


export default function LoginAML() {
    const [giftModal,setgiftModal]=React.useState('true')
    const handleClose = () => {
     setgiftModal(false)
     
      }
      const history = useHistory()
const redirect = () => {
    history.push('/HR')
    console.log('true')
  }
  const redirect1 = () => {
    history.push('/')
    console.log('true')
  }

    return (
        <div style={{backgroundImage:`url(${login})`,backgroundSize:'100% 100%',minHeight:'100vh'}}>
              {/* <Modal
    
      style={{ maxWidth: 'unset',
      width: '100vw',
      borderRadius: '0.5rem',
     
    }}
    
      show={giftModal}
      aria-labelledby='contained-modal-title-vcenter'
      centered
   
    > */}
       
        <table>
            <div >
            <tr>
        <td>
                <img src={logo}style={{marginLeft: '80vw',marginTop:'2vw',height:'5vw', width:'10vw'}} onClick={redirect1}></img>
                
</td>
{/* <td>
    <img style={{ width: '0.96vw',
    height: '0.99vw',
    marginLeft: '5vw',
    marginRight: '1vw',
    cursor: 'pointer'}} src={close} onClick={() => handleClose()}></img>
</td> */}
            </tr>
            <tr >
             <Form.Group
                        style={{marginTop:'30vh', marginLeft: '30vw' }}
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
                            Username Or Email
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
                          placeholder="Enter Your Username or Email"
                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>
                      </tr>
                      <tr>
                      <Form.Group
                        style={{ marginTop:'1vw',marginLeft: '34.5vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: '0.7vw',
                              marginRight:"1vw",fontFamily:'Georgia, serif'

                            }}
                          >
                           Password
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
                          placeholder="Enter Your Password"
                          type='password'

                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>
                      </tr>
                      <tr>
                        <button style={{marginLeft: '46vw',marginTop:'1vw',color:"#33b889",fontSize:'1vw',fontWeight:'bold',fontFamily:'Georgia, serif',backgroundColor:'transparent',outline:'none',border:'none'}}>Forgot Password?</button>
                      </tr>
                      <tr>
                          <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '48.5vw',
                  marginTop:'2vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={redirect}>Login</Button>
                          </tr>
                          </div>
                      </table>
                      {/* </Modal> */}

        </div>
    )
}
