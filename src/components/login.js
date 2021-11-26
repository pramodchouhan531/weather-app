import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction, getUsername, getPassword } from '../actions/actions';
import { logData } from '../actions/actions';
import { useEffect } from 'react';

export default function Login() {
  const navigate = useNavigate()
  const show = useSelector(state => state.loginReducer.show)
  const username = useSelector(state => state.loginReducer.username)
  const password = useSelector(state => state.loginReducer.password)
  const users = useSelector(state => state.loginReducer.users)
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(loginAction(false));
  }

  const handleShow = () => {
    dispatch(loginAction(true));

  }
  function getLocation() {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition);
     }
    else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    var latitude = position.coords.latitude,
    longitude = position.coords.longitude;

  }
  const loginValidation = (ausername, apassword) => {
    if (username === ausername && password === apassword) {
        getLocation();
        navigate("/dashboard")
    }
    else {
      alert("incorrect username or password")
      handleClose()
    }

  }
  useEffect(() => {
    dispatch(logData())

  }, [])
  return (
    <div>
      <h2 className="text-center text-danger">Welcome Weather</h2>
      <Button variant="warning" class="text-justify" onClick={handleShow}>
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title className="text-success">
            Login Page
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
             type="text"
            placeholder="username"
            className="my-3"
            onChange={(e) => dispatch(getUsername(e.target.value))}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => dispatch(getPassword(e.target.value))}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
          {users.map((item) => (
            <>
              <Button
                variant="success"
                onClick={() => loginValidation(item.username, item.password)}>
                Login
              </Button>
            </>
          ))}
        </Modal.Footer>
      </Modal>
    </div>
  )
}
