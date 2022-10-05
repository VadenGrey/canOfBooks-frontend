import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Updateform from './UpdateForm';

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
                    <h3>{`${this.props.book.title}`}</h3>
                    <p>{this.props.book.description}</p>
                    <Button variant="primary" onClick={() => this.props.handleDelete(this.props.book)}> Delete Entry </Button>
                    <Updateform book={this.props.book} handleUpdate={this.props.handleUpdate} />
                    <p>{this.props.book.status}</p>
                </Carousel.Caption>
            </>
        )
    }
}

export default Book;