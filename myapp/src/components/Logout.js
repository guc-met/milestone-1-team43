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
import bye from '../images/Mrbean.gif'
import { useHistory } from "react-router";


export default function Logout() {
    const [giftModal,setgiftModal]=React.useState('true')
    const handleClose = () => {
     setgiftModal(false)
     
      }
      const history = useHistory()
const redirect = () => {
    history.push('/StaffHP')
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
    */}

        <img style={{marginTop:'10vw',marginLeft:'27vw'}} src={bye}></img>
        <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '41.5vw',
                  marginTop:'2vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={redirect1}>Go To HomePage</Button>
       
       
                      {/* </Modal> */}

        </div>
    )
}
