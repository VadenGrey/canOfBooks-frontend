import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Book from './Book.js';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  async componentDidMount() {
    const baseUrl = process.env.REACT_APP_SERVER;
    const books = await axios.get(`${baseUrl}/books`);
    this.setState({books:books});
  }

  render() {

    /* TODO: render all the books in a Carousel */
    

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Carousel>


          {this.state.books.length ? (
            this.state.books.map((book, i) => <Book key={i} data={book}></Book>)
          ) : (
            <h3>No Books Found :(</h3>
          )}
        </Carousel>
      </>
    )
  }
}

export default BestBooks;
