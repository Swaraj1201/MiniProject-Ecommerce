import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Components/Loader.js'
import Message from '../Components/Message'
import FormContainer from '../Components/FormContainer'
import { slogin } from '../actions/subscriberActions'



function SubscriberScreen({ location, history }) {
    const  [subemail, setsubEmail] = useState('')
    const  [subpassword, setsubpassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const subscriberLogin = useSelector(state => state.subscriberLogin)

    const { error, loading, subscriberInfo } = subscriberLogin

    useEffect(() => {
        if (subscriberInfo) {
            history.push(redirect)
        }
    }, [history, subscriberInfo, redirect])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(slogin(subemail, subpassword))
    }

    return (     
        <FormContainer>
            <h1>Subscribe</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='subemail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
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
                        type='subpassword'
                        placeholder='Enter Password'
                        value={subpassword}
                        onChange={(e) => setsubpassword(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>

           
        </FormContainer>
    )
}

export default SubscriberScreen




