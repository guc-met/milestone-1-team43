import React from 'react'

export default function Register() {
    return (
        <div>
                <tr>
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
                            Username
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

            
        </div>
    )
}


// {flag?<LoginModal open={true}> </LoginModal> :''}