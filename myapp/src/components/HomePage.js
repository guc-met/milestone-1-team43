import React from 'react'
import bg from '../images/students1.jpg'
import bg1 from '../images/loginbg1.jpg'
import logo from '../images/guc_logo.png'
import LoginModal from '../components/Login'
import { useHistory } from "react-router";
export default function HomePageAML() {
    const [giftModal, setGiftModal] = React.useState(false)
    const [flag, setFlag] = React.useState('')
    const handleModal = () => {
setFlag(true)
console.log(flag)
         }
const history = useHistory()
const redirect = () => {
    history.push('/')
    console.log('true')
  }

  const redirect1 = () => {
    history.push('/Login')
    console.log('true')
  }



    return (
        <div style={{backgroundImage:`url(${bg})` , backgroundSize:'cover', backgroundAttachment: 'fixed', minHeight:'100vh'
    }}>
<table>
 
    <tr>
    <img src={logo}style={{marginLeft: '80vw',marginTop:'2vw',height:'5vw', width:'10vw'}} onClick={redirect}></img>
            </tr>
            
    <tr>

            <p style={{marginLeft:"39vw",marginTop:'8vw',color:"white", fontSize:'3vw'}}>Learn to Succeed <br></br> <p style={{marginLeft:'-3vw'}}>Know More. Do More.</p></p>
       
    </tr>
    <tr>
   
                {flag?<LoginModal open={true}> </LoginModal> :''}
            
                <button  style={{border:'2px solid #33b889',borderWidth:'3px',borderRadius:'5px',backgroundColor:'transparent',color:'white',marginTop:'5vw', marginLeft:'48vw',width:'5vw',fontSize:'1.1vw',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={ redirect1} >Login</button>
           
    </tr>
    
</table>
            
        </div>
    )
}
