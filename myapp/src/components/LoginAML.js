import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import logo from '../images/guc_logo.png'
import login from '../images/File_000.jpeg'
import { makeStyles } from '@material-ui/core/styles'
import close from '../images/xsign.png'


export default function LoginAML() {
    const [giftModal,setgiftModal]=React.useState('true')
    const handleClose = () => {
     setgiftModal(false)
     
      }
      
    return (
        <div>
              <Modal
    
      style={{ maxWidth: 'unset',
      width: '100vw',
      borderRadius: '0.5rem',
     
    }}
    
      show={giftModal}
      aria-labelledby='contained-modal-title-vcenter'
      centered
   
    >
       
        <table>
            <div style={{backgroundImage:`url(${login})`}}>
            <tr>
        <td>
                <img src={logo}style={{marginLeft: '1vw',marginTop:'2vw',height:'3.5vw', width:'7vw'}}></img>
                
</td>
<td>
    <img style={{ width: '0.96vw',
    height: '0.99vw',
    marginLeft: '5vw',
    marginRight: '1vw',
    cursor: 'pointer'}} src={close} onClick={() => handleClose()}></img>
</td>
            </tr>
            <tr >
             <Form.Group
                        style={{marginTop:'1vw', marginLeft: '6.5vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: '3.5vw',
                             
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
                          }}
                          placeholder="Enter Your Username or Email"
                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>
                      </tr>
                      <tr>
                      <Form.Group
                        style={{ marginLeft: '6.5vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"white",
                              marginLeft: '3.5vw',
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
                          }}
                          placeholder="Enter Your Password"
                          type='password'

                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>
                      </tr>
                      <tr>
                          <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '14vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none'}}>Login</Button>
                          </tr>
                          </div>
                      </table>
                      </Modal>

        </div>
    )
}
