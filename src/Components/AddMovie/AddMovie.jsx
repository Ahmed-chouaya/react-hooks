import React, {useState} from 'react'
import { Modal , Button, FormControl } from 'react-bootstrap';

const AddMovie = ({getMoviesData}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[newMovie , setNewMovie]=useState({
        title:"",
        description:"",
        posterUrl:"",
        rating:0
    })
    const handleChange=(e)=>{
        setNewMovie({...newMovie , [e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
        getMoviesData(newMovie)
        handleClose()
    }
    return (
        <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <label>Enter title</label>
        <FormControl type="text" name="title" onChange={handleChange}/>
        <label>Enter description</label>
        <FormControl type="text" name="description" onChange={handleChange}/>
        <label>Enter posterUrl</label>
        <FormControl type="text" name="posterUrl" onChange={handleChange}/>
        <label>Enter rating</label>
        <FormControl type="number" name="rating" max="5" min="1" onChange={handleChange}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
