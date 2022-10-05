import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class Updateform extends React.Component {
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
        this.props.handleUpdate({
            title: e.target.title.value || this.props.book.title,
            description: e.target.description.value || this.props.book.description,
            status: e.target.status.checked || this.props.book.status,
            _id: this.props.book._id,
            __v: this.props.book.__v
        });
        this.closeModal();
    }

    render() {
        return ( 
            <>
                <Button onClick={this.openModal}>Update Me</Button>
                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton></Modal.Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId='title'>
                            <Form.Label>title</Form.Label>
                            <Form.Control type="text" placeholder="Book title" />
                            <Form.Text className="text-muted"> update title </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId='status'>
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit"> Submit </Button>
                    </Form>
                </Modal>
            </>
        )
    }
}

export default Updateform;