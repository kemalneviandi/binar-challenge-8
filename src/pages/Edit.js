import { Container, Input, Button, FormGroup, Form, Label} from 'reactstrap';

function  Edit () {
  return (
    <>
    <Container>
    <h1>Edit Form</h1>
    <Form>
      <FormGroup>
        <Label>Email</Label>
        <Input type='email' name='email' value='kemal@rocketmail.com'/>
      </FormGroup>

      <FormGroup>
        <Label>Username</Label>
    <Input type='text' name='username' value='kemal'/>
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
    <Input type='password'name='password' value='lolol'/>
      </FormGroup>

      <FormGroup>
        <Label>Experience</Label>
    <Input type='number'name='exp' value='99'/>
      </FormGroup>
      
      <Button type='sumbit' color='primary'>Submit</Button>
      <Button type='reset' color='danger'>Reset</Button>    
    </Form>
    </Container>
    </>
  )
}
export default Edit