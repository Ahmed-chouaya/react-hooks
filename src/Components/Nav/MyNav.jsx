import React from 'react'
import ReactStars from "react-rating-stars-component";

import {Navbar, Container , Nav , FormControl} from 'react-bootstrap'
function MyNav({handleTitle , handleRating}) {
    const ratingChanged = (newRating) => {
        handleRating(newRating);
      };

      const handleChange=(e)=>{
        handleTitle(e.target.value)
      }
    return (
        <div>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movies</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    <FormControl
    type="search" placeholder="type your search"
    onChange={handleChange}></FormControl>
    </Container>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
  </Navbar>  
        </div>
    )
}

export default MyNav
