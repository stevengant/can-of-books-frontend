import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;

      let bookData = await axios.get(url);
      console.log(bookData);
      this.setState({
        books: bookData.data
      });

    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.state.books);

    /* TODO: render all the books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

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
                      backgroundColor: 'grey',
                      borderRadius: '5px',
                      width: 'max-content',
                      margin: 'auto',
                      padding: '5px'
                    }}
                    >
                      {bookElem.title}
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
                );

            })};
          </Carousel>
        ) : (
          <h3>🙀 No Books Found 🙀</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
