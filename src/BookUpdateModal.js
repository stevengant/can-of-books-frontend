import React from 'react';
import { Modal, Container, Form, Button } from 'react-bootstrap';

class BookUpdateModal extends React.Component {

    handleBookSubmit = (event) => {
        event.preventDefault();

        let bookToUpdate = {
        title: event.target.title.value,
        description: event.target.description.value,
        img_URL: event.target.img_URL.value,
        status: event.target.status.checked,
        _id: this.props.bookToUpdate._id,
        __v: this.props.bookToUpdate.__v
        };

         // console.log('UPDATED BOOK: ', bookToUpdate);
         this.props.updateBook(bookToUpdate);
         this.props.handleCloseUpdateModal();
    }

    render() {
        //console.log(this.props.books);
        return (
            <>
                <Modal show={this.props.showUdateModal} onHide={this.props.handleCloseUpdateModal}>
                    <Modal.Header closeButton>📗 Update Book 📗</Modal.Header>
                    <Modal.Body>
                        <Container className="mt-5">
                            <Form onSubmit={this.handleBookSubmit}>
                                <Form.Group controlId="title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" defaultValue={this.props.bookToUpdate.title} />
                                </Form.Group>
                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" defaultValue={this.props.bookToUpdate.description} />
                                </Form.Group>
                                <Form.Group controlId="img_URL">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control type="text" defaultValue={this.props.bookToUpdate.img_URL} />
                                </Form.Group>
                                <Form.Group controlId="status">
                                    <Form.Check type="checkbox" label="Available" defaultChecked={this.props.bookToUpdate.status} />
                                </Form.Group>
                                <Button variant="success" type="submit">Update Book</Button>
                            </Form>
                        </Container>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default BookUpdateModal;