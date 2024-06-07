import React from 'react'
import { Container, Row } from 'react-bootstrap'
function Text({ text }) {
    return (
        <>
            <Container >
                <Row>
                    <div className='d-flex flex-wrap justify-content-center align-items-center text1 Text'>
                        <div className='col-6 text-center'>
                            <h2>
                                {text}
                            </h2>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Text
