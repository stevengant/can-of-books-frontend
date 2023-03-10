import React from 'react';
import axios from 'axios';
import { Carousel, Button } from 'react-bootstrap';
import BookFormModal from './BookFormModal.js'
import BookUpdateModal from './BookUpdateModal.js'
import './BestBooks.css'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      showUdateModal: false,
      bookToUpdate: {}
    }
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleOpenUpdateModal = () => {
    this.setState({
      showUdateModal: true,
    });
  }

  handleCloseUpdateModal = () => {
    this.setState({
      showUdateModal: false
    });
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      //console.log(url);
      let bookData = await axios.get(url);
      //console.log(bookData);
      this.setState({
        books: bookData.data
      });

    } catch (error) {
      console.log(error.message);
    }
  }

   // *** Create cat 2 handlers: 1 to handle the form submission & 1 to post to DB ***
   handleBookSubmit = (event) => {
    event.preventDefault();

    // TODO: BUILD A BOOK OBJECT FROM MY FORM VALUES
    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      img_URL: event.target.img_URL.value,
      status: event.target.status.checked
    };

    console.log('new Book from form>>>', newBook);

    // TODO: post my cat to DB using my 2nd handler
    this.postBook(newBook);
    this.handleCloseModal();
   }

   // *** 2nd Handler to post to DB
   postBook = async (bookObj) => {
    try 
    {
      // TODO: Create the url for axios to send book obj to server
      let url = `${process.env.REACT_APP_SERVER}/books`;

      // 2 args on a post: 1st is the url, 2nd is the data to send
      let createdBook = await axios.post(url, bookObj);

      this.setState({
        books: [...this.state.books, createdBook.data]
      })

    } 
    catch (error) 
    {
      console.log(error.message);
    }
   }

   deleteBook = async (id) => {
    try {
      // TODO: use axios to send the ID to the server on the path param
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      console.log(url);

      await axios.delete(url);

      // TODO: update state to remove the deleted cat
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      console.log(updatedBooks);

      this.setState({
        books: updatedBooks
      });
    } 
    catch (error) {
      console.log(error.message)
    }
   }


   // ! UPDATE NEEDS THE WHOLE BOOK
   updateBook = async (bookToUpdate) => {
    try 
    {
      // TODO: URL SET FOR AXIOS
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;

      let updatedBook = await axios.put(url, bookToUpdate);

      // TODO: UPDATE STATE WITH THAT RETURN FROM AXIOS
      let updatedBookArr =this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id ? updatedBook.data : existingBook;
      });

      this.setState({
        books: updatedBookArr
      });

    } 
    catch (error) 
    {
      console.log(error.message);
    }
   }

  // REACT LIFECYCLE METHOD
  componentDidMount() {
    this.getBooks();
  }

  render() {
    //console.log(this.state.books);

    /* TODO: render all the books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button variant="dark" onClick={this.handleOpenModal}>??? Book</Button>

        <BookFormModal 
          showModal ={this.state.showModal}
          handleCloseModal ={this.handleCloseModal}
          handleBookSubmit = {this.handleBookSubmit}
        />

        <BookUpdateModal 
          showUdateModal ={this.state.showUdateModal}
          handleCloseUpdateModal ={this.handleCloseUpdateModal}
          handleBookSubmit = {this.handleBookSubmit}
          bookToUpdate = {this.state.bookToUpdate}
          updateBook = {this.updateBook}
          
        />

        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map((bookElem, idx) => {
                return(
                  <Carousel.Item key={idx}>
                  <img
                    className='d-block w-100'
                    src={bookElem.img_URL}
                    alt={bookElem.description}
                  />
                  <Carousel.Caption>
                    <h3 style={{
                      backgroundColor: '#212529',
                      borderRadius: '5px',
                      width: 'max-content',
                      margin: 'auto',
                      padding: '5px'
                    }}
                    >
                      {bookElem.title}
                    </h3>
                    <Button variant="success" onClick={()=> {this.handleOpenUpdateModal(); this.setState({bookToUpdate: bookElem})}}>Update</Button>
                    <Button variant="danger" onClick={()=>{this.deleteBook(bookElem._id)}}>Delete</Button>
                  </Carousel.Caption>
                  
                </Carousel.Item>
                );

            })};
          </Carousel>
        ) : (
          <h3>???? No Books Found ????</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
