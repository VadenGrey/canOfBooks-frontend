import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Book from './Book.js';
import Addform from './AddForm.js'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  handleBookCreate = async (bookInfo) => {
    console.log('New book is:', bookInfo);
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER}/books`, bookInfo);
      console.log(res);
      // Don't forget .data!
      const createdBook = res.data;
      // update state and render the createdCat
      this.setState({
        books: [...this.state.books, createdBook],
      })
    } catch (error) {
      console.log("we have an error: ", error);
    }
  }

  handleDelete = async (bookToDelete) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_SERVER}/books/${bookToDelete._id}`);
      console.log('The response.status is:', response.status);
      // filter it out from state
      const filteredBooks = this.state.books.filter(book => {
        return book._id !== bookToDelete._id;
      });
      this.setState({
        books: filteredBooks,
      });
    } catch (error) {
      console.log("we have an error: ", error.response);
    }
  }

  handleUpdate = async (book) => {
    try {
      console.log('sending for update:',book);
      const _id = book._id;
      console.log(_id);
      const res = await axios.put(`${process.env.REACT_APP_SERVER}/books/${_id}`, book);
      console.log('Updated book is:', res);
      // Don't forget .data!
      const updatedBook = res.data;
      // update state and render the createdCat
      const temp = [...this.state.books];
      const i = temp.findIndex(v => v._id === updatedBook._id);
      temp[i] = updatedBook;
      this.setState({
        books: temp
      })
    } catch (error) {
      console.log("we have an error: ", error);
    }
}

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  async componentDidMount() {
    const baseUrl = process.env.REACT_APP_SERVER;
    console.log(baseUrl);
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
        <Addform handleBookCreate={this.handleBookCreate}/>
        <Carousel className='h-50' >
          {this.state.books.length ? (
            this.state.books.map((book, i) => 
              <Carousel.Item key={book._id} >
                <Book 
                  book={book}
                  handleDelete={this.handleDelete}
                  handleUpdate={this.handleUpdate}
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
