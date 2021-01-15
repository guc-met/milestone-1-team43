import React from 'react'
import Form from 'react-bootstrap/Form'
import bg from '../images/1.png'
import Button from 'react-bootstrap/Button'
import logo from '../images/guc_logo.png'
import salary from '../images/attendance.gif'
import { useHistory } from "react-router"; 
import Calender from '../components/Calendar'

export default function Salary() {
    const history = useHistory()
    
      const redirect2 = () => {
        history.push('/')
        console.log('true')
      }
      const redirect3 = () => {
        history.push('/HR')
        console.log('true')
      }

    return (
       
        <div  style={{backgroundImage:`url(${bg})`,backgroundSize:'100% 100%',minHeight:'100vh'}}>

<table>
   
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
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={redirect3}>Back</Button>
              </td>
<td>
       <img src={logo}style={{marginLeft: '70vw',marginTop:'2vw',height:'5vw', width:'10vw'}} onClick={redirect2}></img>
       
</td>
</tr>
</table>


<td>
<img style={{height:'15vw',width:'25vw',marginLeft:'20vw',marginTop:'5vw'}}src={salary}></img>
</td>


<tr>
<Form.Group
                        style={{ marginLeft: '50vw',marginTop:'-17vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"#33b889",
                              
                              marginRight:"1vw",fontWeight:'bold',fontFamily:'Georgia, serif'
                            }}
                          >
                           Attendance:
                          </text>
                        </Form.Label>
                        <Calender style={{ fontSize: '0.5vw',color:'grey '}}></Calender>
                      </Form.Group>
                      
         
</tr>

    

        </div>
    )
}
