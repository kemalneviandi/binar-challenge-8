import { Container, Input, Button, FormGroup, Form, Label} from 'reactstrap';

function  Create () {
  return (
    <>
    <Container>
    <h1>Registration</h1>
    <Form>
      <FormGroup>
        <Label>Email</Label>
        <Input type='email' name='email'/>
      </FormGroup>

      <FormGroup>
        <Label>Username</Label>
    <Input type='text' name='username'/>
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
    <Input type='password'name='password'/>
      </FormGroup>

      <FormGroup>
        <Label>Experience</Label>
    <Input type='number'name='exp'/>
      </FormGroup>
      <Button type='sumbit' color='primary'>Submit</Button>
      <Button type='reset' color='danger'>Reset</Button>    
    </Form>
    </Container>
    </>
  )
}
export default Create
