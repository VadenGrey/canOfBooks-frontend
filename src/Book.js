import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

class Book extends React.Component {
    render() {
        return (
            <>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/600x400/673a8a/e0e0e0"
                    alt="book cover"
                />
                <Carousel.Caption>
                    <h3>{`${this.props.title}`}</h3>
                    <p>{this.props.description}</p>
                    <Button variant="primary" onClick={this.props.handleDelete}>
                        Delete Entry
                    </Button>
                    <p>{this.props.status}</p>
                </Carousel.Caption>
            </>
        )
    }
}

export default Book;