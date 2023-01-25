import React from 'react';
import {Modal, Container, Form, Button} from 'react-bootstrap';

class BookFormModal extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
                    <Modal.Header closeButton>📓 Add New Book 📓</Modal.Header>
                    <Modal.Body>
                        <Container className="mt-5">
                            <Form onSubmit={this.props.handleBookSubmit}>
                                <Form.Group controlId="title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="img_URL">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="status">
                                    <Form.Check type="checkbox" label="Available" />
                                </Form.Group>
                                <Button type="submit">Add Book</Button>
                            </Form>
                        </Container>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default BookFormModal;