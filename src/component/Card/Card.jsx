import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
function Cards() {
    return (
        <section className='bg-colr'>
            <Container >
                <Row>
                    <div className='d-flex flex-wrap justify-content-center '>
                        <div className='col-12'>
                            <h5 className='text-center text-white pt-5 pb-2'>CONTINUE YOUR JOURNEY</h5>
                            <p className='text-center text-white pb-5'> You may also like the following related articles </p>
                        </div>
                        <div className='col-12  col-sm-12 col-md-4'>
                            <Card className='bg-card m-2'>
                                <div className='wrap'>
                                    <Card.Img variant="top" src="image\card1.webp" />
                                </div>
                                <Card.Body style={{ height: "200px" }}>
                                    <Card.Title><h4> GHOST PRISM</h4></Card.Title>
                                    <Card.Text>
                                        Ghost Prism draws inspiration from the world of contemporary design, where the interplay of bold accents and dark tones is a striking form of self-expression.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-12  col-md-4'>
                            <Card className='bg-card m-2'>
                                <div className='wrap'>
                                    <Card.Img variant="top" src="image\card-2.webp" />
                                </div>
                                <Card.Body style={{ height: "200px" }}>
                                    <Card.Title><h4>Ghost - In Detail</h4></Card.Title>
                                    <Card.Text>
                                        <p>Pure and pristine. The ultimate foundation for infinite self-expression.</p>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-12 col-md-4'>
                            <Card className='bg-card m-2'>
                                <div className='wrap'>
                                    <Card.Img variant="top" src="image\card-3.webp" />
                                </div>
                                <Card.Body style={{ height: "200px" }}>
                                    <Card.Title><h4>Commission Your Ghost</h4></Card.Title>
                                    <Card.Text>
                                        <p>Envision an original with Bespoke services.</p>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div>
                        <div className='col-12 d-flex justify-content-center foter pt-5'>
                            <h6>
                                INSPIRING GREATNESS
                            </h6>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>

    );
}

export default Cards;
