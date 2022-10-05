import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class Addform extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
        };
    };

    closeModal = () => {
        this.setState({showModal: false})
    };

    openModal = () => {
        this.setState({showModal: true})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleBookCreate({
            title: e.target.title.value,
            description: e.target.description.value,
            status: e.target.status.checked,
        });
        this.closeModal();
    }

    render() {
        return ( 
            <>
            <Button onClick={this.openModal}>Add new book</Button>
            <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Header closeButton></Modal.Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId='title'>
                        <Form.Label>title</Form.Label>
                        <Form.Control type="text" placeholder="Book title" />
                        <Form.Text className="text-muted">
                            new book description
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='status'>
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal>
            </>
        )
    }
}

export default Addform;