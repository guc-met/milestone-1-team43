import React from 'react'
import Form from 'react-bootstrap/Form'
import bg from '../images/1.png'
import Button from 'react-bootstrap/Button'
import logo from '../images/guc_logo.png'
import salary from '../images/work2.gif'
import { useHistory } from "react-router"; 

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
                           Missed Days:
                          </text>
                        </Form.Label>
                        <div>
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
                          placeholder="Missing Days"
                         
                          

                           value='4'
                        //   onChange=''
                        />
                        </div>
                      </Form.Group>
                      
         
</tr>
<tr>
<Form.Group
                        style={{ marginLeft: '50vw',marginTop:'-10vw' }}
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
                           Missed Hours:
                          </text>
                        </Form.Label>
                        <div>
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
                          placeholder="Missing Hours"
                         
                          

                           value='4'
                        //   onChange=''
                        />
                        </div>
                      </Form.Group>
                      
         
</tr>
<tr>
<Form.Group
                        style={{ marginLeft: '50vw',marginTop:'-3vw' }}
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
                           Extra Hours:
                          </text>
                        </Form.Label>
                        <div>
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
                          placeholder="Missing Days"
                         
                          

                           value='4'
                        //   onChange=''
                        />
                        </div>
                      </Form.Group>
                      
         
</tr>
        </div>
    )
}
