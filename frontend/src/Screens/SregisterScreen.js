import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Components/Loader.js'
import Message from '../Components/Message'
import FormContainer from '../Components/FormContainer'
import { sregister } from '../actions/subscriberActions'


function SregisterScreen({ location, history }) {


    const  [subname, setsubName] = useState('')
    const  [subemail, setsubEmail] = useState('')
    const  [subpassword, setsubPassword] = useState('')
    const  [confirmsubPassword, setConfirmsubPassword] = useState('')
    const  [message, setMessage] = useState('')


    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const subscriberRegister = useSelector(state => state.subscriberRegister)

    const { error, loading, subscriberInfo } = subscriberRegister

    useEffect(() => {
        if (subscriberInfo) {
            history.push(redirect)
        }
    }, [history, subscriberInfo, redirect])


    const submitHandler = (e) => {
        e.preventDefault()


        if(subpassword != confirmsubPassword){
            setMessage('Passwords do not match')
        }else{
            dispatch(sregister(subname ,subemail, subpassword))
        }
    }


    return (
        <FormContainer>
            <h1>Subscribe</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='subname'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='subname'
                        placeholder='Enter name'
                        value={subname}
                        onChange={(e) => setsubName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='subemail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type='subemail'
                        placeholder='Enter Email'
                        value={subemail}
                        onChange={(e) => setsubEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='subpassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type='subpassword'
                        placeholder='Enter Password'
                        value={subpassword}
                        onChange={(e) => setsubPassword(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='subpasswordConfirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='subpassword'
                        placeholder='Confirm Password'
                        value={confirmsubPassword}
                        onChange={(e) => setConfirmsubPassword(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Subscribe
                </Button>

            </Form>

            <Row className='py-3'>
                    <Col>
                        Already a Subscriber? <Link 
                           to={redirect ? `/subscribe?redirect=${redirect}` : '/Subscribe'}>
                           Login
                           </Link>
                    </Col>

            </Row>
            
        </FormContainer>
    )
}

export default SregisterScreen

