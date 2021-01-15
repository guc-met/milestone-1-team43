import React from 'react'
import bg from '../images/students1.jpg'
import bg1 from '../images/loginbg1.jpg'
import logo from '../images/guc_logo.png'
import gif from '../images/gif2.gif'
import LoginModal from '../components/Login'
import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button'
import bg2 from '../images/1.png'
import gif2 from '../images/spongebob.gif'
import bus from '../images/bus.png'
import food from '../images/food.png'
import clinic from '../images/clinic.png'
import atm from '../images/atm.jpg'
import sports from '../images/sports.png'
import wifi from '../images/wifi.png'
import fac from '../images/fac.png'
import { BottomNavigation, p } from '@material-ui/core'
import { Col, Row } from 'react-bootstrap'
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
        <div style={{backgroundColor:'#e0dede'}}>

{/* <div style={{backgroundImage:`url(${bg})` ,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}> */}

<table >
<div style={{boxShadow: 'rgba(0, 0, 0, 0.45) 0px 0px 8px'}}>
    <tr>

        <td>
            
        <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginTop:'-1vw',
               marginLeft:"10vw",
                  fontSize: '1.1vw',
                  border:'2px solid #33b889',borderWidth:'3px',borderRadius:'5px',backgroundColor:'transparent',color:'#33b889', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={ redirect} >Home</Button>
             </td>
              <td>
                <Button style={{  height: '2vw',
                    display: 'flex',
                    alignSelf: 'center',
                    marginRight: 'auto',
                marginLeft:"2vw",
                    fontSize: '1.1vw',
                    border:'2px solid #33b889',borderWidth:'3px',borderRadius:'5px',backgroundColor:'transparent',color:'#33b889', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={ redirect1} >Login</Button>
                
              </td>
              
              <td>
      
    <img src={logo}style={{marginLeft: '63vw',marginTop:'1vw',height:'5vw', width:'10vw',marginRight:'4vw'}} onClick={redirect}></img>
    </td>
            </tr>
    
    <tr>
   
                {flag?<LoginModal open={true}> </LoginModal> :''}
            
               {/* <button  style={{border:'2px solid #33b889',borderWidth:'3px',borderRadius:'5px',backgroundColor:'transparent',color:'white',marginTop:'5vw', marginLeft:'48vw',width:'5vw',fontSize:'1.1vw',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={ redirect1} >Login</button>
            */}
    </tr>
    </div>
</table>

<table style={{marginBottom:'vw',marginTop:'0.4vw',backgroundImage:`url(${bg2})` ,backgroundSize:'cover',backgroundRepeat:'no-repeat',width:'100vw',height:'25vw'}}>
   
                
    <tr>

<p style={{marginLeft:"20vw",marginTop:'5vw',color:"white", fontSize:'3vw',color:'#33b889'}}>Learn to Succeed <br></br> <p style={{marginLeft:'-3vw'}}>Know More. Do More.</p></p>

<td>
    <img src={gif2} style={{width:"20vw",marginLeft:'15vw',marginTop:"2vw"}}></img>
</td>
    </tr>

</table>

<table>
<tr>
    <tr style={{backgroundColor:"#33b889",width:"100vw"}}>
     
        <p style={{  marginLeft:'4vw', fontSize: '2vw',
                color:'white', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}>Who We Are?</p>
       </tr>         
    
    <tr>
        <td>
    <p style={{  marginLeft:'4vw', fontSize: '2vw',
                color:'#33b889', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif',width:"50vw"}}>The German University in Cairo, GUC, is an Egyptian Private University founded by the presidential decree 27/2002. GUC is an independent, non-profit oriented Egyptian private institution, managed by a consortium of Germans and Egyptians with the vision of building a leading center of excellence in teaching and research that will effectively contribute to the general welfare nationally and internationally and endeavour the scientific, technical, economic and cultural cooperation between Egypt and Germany.</p>
    
    </td>
    <td>
        <img style={{marginLeft:"5vw",width:'30vw'}}src={gif}></img>
    </td>
    </tr>
    </tr>
    
</table>


<table>
    <div style={{backgroundImage:`url(${bg2})` ,backgroundSize:'cover',backgroundRepeat:'no-repeat',width:'100vw'}}>
{/* <tr >
    <p style={{  marginLeft:'4vw', fontSize: '2vw',
                color:'#33b889', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}>Facilities</p>

    </tr> */}
    
    <td>  <img style={{height:"12vw",width:"25vw",marginTop:'2vw'}}src={fac}></img></td>
    <td>
    <tr>
        <td>
        <button style={{marginLeft:'8vw',marginTop:'1vw',height:'8vw',width:'8vw',borderRadius:'90px',outline:"none",borderColor:"#c2c4c3 "}}>
         
     <img style={{height:'5vw',width:'6vw'}} src={bus}></img>
        </button>
        <tr>
                <p  style={{fontSize: '1.3vw',
                color:'#33b889', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif',marginLeft:'10vw'}}>Buses</p>
            </tr>
            </td>
            <td>
            <tr>
        <button style={{marginLeft:'5vw',marginTop:'1vw',height:'8vw',width:'8vw',borderRadius:'90px',outline:"none",borderColor:"#c2c4c3 "}}>
         
     <img style={{height:'5vw',width:'6vw'}} src={food}></img>
        </button>
        <tr>
                <p  style={{marginLeft:'7vw',fontSize: '1.3vw',
                color:'#33b889', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}>Food</p>
            </tr>
        </tr>
            </td>
            <td>
            <tr>
        
        <button style={{marginLeft:'5vw',marginTop:'1vw',height:'8vw',width:'8vw',borderRadius:'90px',outline:"none",borderColor:"#c2c4c3 "}}>
         
     <img style={{height:'5vw',width:'6vw'}} src={clinic}></img>
        </button>
        <tr>
                <p  style={{marginLeft:'7vw',fontSize: '1.3vw',
                color:'#33b889', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}>Clinic</p>
            </tr>
        
        </tr>
            </td>
        </tr>
        <tr>
        <td>
        <button style={{marginLeft:'8.5vw',marginTop:'1vw',height:'8vw',width:'8vw',borderRadius:'90px',outline:"none",borderColor:"#c2c4c3 "}}>
         
     <img style={{height:'5vw',width:'6vw'}} src={sports}></img>
        </button>
        <tr>
                <p  style={{marginLeft:'8.5vw',fontSize: '1.3vw',
                color:'#33b889', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}>Sports Area</p>
            </tr>
            </td>
            <td>
            <tr>
        <button style={{marginLeft:'5vw',marginTop:'1vw',height:'8vw',width:'8vw',borderRadius:'90px',outline:"none",borderColor:"#c2c4c3 "}}>
         
     <img style={{height:'5vw',width:'6vw'}} src={atm}></img>
        </button>
        <tr>
                <p  style={{marginLeft:'7vw',fontSize: '1.3vw',
                color:'#33b889', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}>ATM</p>
            </tr>
        </tr>
            </td>
            <td>
            <tr>
        
        <button style={{marginLeft:'5vw',marginTop:'1vw',height:'8vw',width:'8vw',borderRadius:'90px',outline:"none",borderColor:"#c2c4c3 "}}>
         
     <img style={{height:'5vw',width:'6vw'}} src={wifi}></img>
        </button>
        <tr>
                <p  style={{marginLeft:'7vw',fontSize: '1.3vw',
                color:'#33b889', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}}>WIFI</p>
            </tr>
        
       
        </tr>
            </td>
           
        </tr>
        </td>
        <td>
      
        </td>
       
        </div>
</table>
<table>
    <td>
<div style={{backgroundColor:'black' ,backgroundSize:'cover',backgroundRepeat:'no-repeat',width:'100vw',height:'13.5vw'}}>
    <tr>
      
        <td>
        <div
          style={{
            width: '15.26vw',
            height: '13.5vw',
            backgroundColor: '#33b889',
            marginLeft: '5vw',
            marginTop:'-0.7vw'
    
          }}
        >
          <p
            style={{
              fontSize: '0.9065vw',
              fontFamily: 'Arial',
              fontWeight: 'bold',
              color: 'white',
              marginLeft: '2.5vw',
              marginTop:"0.5vw"
             
            }}
          >
            Address
          </p>
          <p
            style={{
              fontSize: '0.9065vw',
              fontFamily: 'Arial',
              fontWeight: '400',

              color: 'white',
              marginLeft: '2.5vw',
              width: '10.21vw',
            }}
          >
            New Cairo City . Main Entrance El-Tagamoa El-Khames
          </p>
          <p
            style={{
              fontSize: '0.9065vw',
              fontFamily: 'Arial',
              fontWeight: 'bold',
              color: 'white',
              marginLeft: '2.5vw',
              marginTop: '0.7vw',
            }}
          >
            Daily Working Hours
          </p>
          <p
            style={{
              fontSize: '0.9065vw',
              fontFamily: 'Arial',
              fontWeight: '400',

              color: 'white',
              marginLeft: '2.5vw',
              width: '10.21vw',
            }}
          >
           8 AM - 5 PM
          </p>
          <p
            style={{
              fontSize: '0.9065vw',
              fontFamily: 'Arial',
              fontWeight: 'bold',
              color: 'white',
              marginLeft: '2.5vw',
              marginTop: '0.7vw',
            }}
          >
            Phone
          </p>
          <p
            style={{
              fontSize: '0.9065vw',
              fontFamily: 'Arial',
              fontWeight: '400',

              color: 'white',
              marginLeft: '2.5vw',
              width: '10.21vw',
            }}
          >
            +202 27589990-8
          </p>
         
              </div>
        </td>
      
    </tr>

    </div>
    </td>
   
</table>

</div>

    


            
  
    )
}
