import React from 'react'
import { Navbar, Nav, Container,Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { weatherthunk } from '../thunk/weather'
import { getcity } from '../actions/actions'


const Dashboard = () => {
  const weather = useSelector(state => state.getweatherreducer.weather)
  const city = useSelector(state => state.getweatherreducer.city)
  const dispatch = useDispatch();

  
  const submit = (e) => {
      e.preventDefault()
      dispatch(weatherthunk(city));
    }
  let cityname = [];
  const set = () => {
    localStorage.setItem("city", JSON.stringify(cityname));
    }
  return (
      <div>
        <div className="text-center">
          <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/history">History</Nav.Link>
                    </Nav>
              </Container>
            </Navbar>
            <br />

          <form onSubmit={submit}>
            <input type="search" onChange={(e) => dispatch(getcity(e.target.value))} />
             <br />
            <Button variant="primary" name="city" type="submit" onClick={set}>
                search
            </Button>
          </form>
         </>
       </div>
      {weather.map(ele => (
        <>
          <li>{ele.name}</li>
          <li>{ele.main.temp}</li>
          <li>{ele.main.pressure}</li>
          {cityname.push(ele.name, ele.main.temp)}
        </>

      ))}
    </div>
    )
}
export default Dashboard;