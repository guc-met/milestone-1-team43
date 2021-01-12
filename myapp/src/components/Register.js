import React from 'react'
import Form from 'react-bootstrap/Form'
import bg from '../images/1.png'
import Button from 'react-bootstrap/Button'



import { useHistory } from "react-router";



export default function Register() {
    const history = useHistory()
    
    const redirect = () => {
        history.push('/Profile')
        console.log('true')
      }
      const redirect1 = () => {
        history.push('/')
        console.log('true')
      }
    


    return (
        <div  style={{backgroundImage:`url(${bg})`,backgroundSize:'100% 100%',minHeight:'100vh'}}>

<table>
            
            <tr>
        <td>
                <img src={logo}style={{marginLeft: '80vw',marginTop:'2vw',height:'5vw', width:'10vw'}} onClick={redirect1}></img>
                
</td>
</tr>
</table>
<table>

                <tr>
            <td>
    <Form.Group
                        style={{ marginTop:'1vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"#33b889",
                              marginLeft: '13vw',
                              marginRight:"1vw",fontWeight:'bold',fontFamily:'Georgia, serif'
                            }}
                          >
                           Email
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
                          placeholder="Enter Staff's email"
                          type='email'
                          

                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>
                      
         
                      
    </td>

    <td>
    <Form.Group
                        style={{ marginTop:'1vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"#33b889",
                              marginLeft: '13vw',
                              marginRight:"1vw",fontWeight:'bold',fontFamily:'Georgia, serif'
                            }}
                          >
                           Name
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
                          placeholder="Enter Staff's Name"
                          type='email'
                          

                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>
                      
         
                      
    </td>



    <td>
    <Form.Group
                        style={{ marginTop:'1vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"#33b889",
                              marginLeft: '20vw',
                              marginRight:"1vw",fontWeight:'bold',fontFamily:'Georgia, serif'
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

                          placeholder="Enter Staff's ID"
                          
                          type='ID'

                        //   value=''
                        //   onChange=''

                        />
                      </Form.Group>
    </td>
             
    
</tr>
<tr>
<Form.Group
                        style={{ marginTop:'4vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"#33b889",
                              marginLeft: '7vw',
                              marginRight:"1vw",fontWeight:'bold',fontFamily:'Georgia, serif'
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
                          placeholder="Enter default password 123456"
                          
                          

                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>
                      <td>
                      <Form.Group
                        style={{ marginTop:'4vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"#33b889",
                              marginLeft: '22vw',
                              marginRight:"1vw",
                              fontWeight:'bold',fontFamily:'Georgia, serif'
                            }}
                          >
                           Department Name
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
                          placeholder="Enter Staff's Department Name"
                          
                        />
                      </Form.Group>
                      
         
                      </td>
                      
         
</tr>
<tr>
<Form.Group
                        style={{ marginTop:'4vw' }}
                      >
                        <Form.Label>
                          <text
                            style={{
                              fontWeight: 'bold',
                              textAlign: 'left',
                              fontSize: '1vw',
                              color:"#33b889",
                              marginLeft: '13vw',
                              marginRight:"1vw",fontWeight:'bold',fontFamily:'Georgia, serif'
                            }}
                          >
                           Type
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
                          placeholder="Enter Staff's type"
                          
                          

                        //   value=''
                        //   onChange=''
                        />
                      </Form.Group>
</tr>

</table> 



<tr>
                          <Button style={{  height: '2vw',
                  display: 'flex',
                  alignSelf: 'center',
                  marginRight: 'auto',
                  marginLeft: '55.5vw',
                  marginTop:'2vw',
                  fontSize: '1.2vw',
                  justifyContent: 'center',
                  color:'white',
                  alignItems: 'center',marginBottom:'1vw',
                  backgroundColor:'#33b889',border:'none',borderRadius: '0.5vw', outline:'none',fontWeight:'bold',fontFamily:'Georgia, serif'}} onClick={() => {this.refs.video.play()}}> Submit </Button>
                          </tr>

                    <video controls ref="welcomeVid">
                            <source src="VIDEO SOURCE" type="welcomeVid/mp4" />
                    </video>


        </div>
    )
}


// {flag?<LoginModal open={true}> </LoginModal> :''}