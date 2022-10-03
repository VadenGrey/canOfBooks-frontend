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
    const booksResponse = await axios.get(`${baseUrl}/books`);
    const books = booksResponse.data;
    console.log(books);
    this.setState({books:books});
  }

  render() {

    /* TODO: render all the books in a Carousel */
    

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Carousel className='h-50' >
          {this.state.books.length ? (
            this.state.books.map((book, i) => 
              <Carousel.Item>
                <Book 
                  key={book._id} 
                  title={book.title}
                  description={book.description}
                  status={book.status}
                />
              </Carousel.Item>   
            )
          ) : (
            <h3>No Books Found :(</h3>
          )}
        </Carousel>
      </>
    )
  }
}

export default BestBooks;
