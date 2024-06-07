import React from 'react'
import { Container, Row } from 'react-bootstrap'
function NormalText({btn1text}) {
    return (
        <>
            <Container >
                <Row>
                    <div className='d-flex flex-wrap justify-content-center align-items-center text'>
                        <div className='text-center col-6'>
                            <h3 className='py-5'>
                                PURE EXPRESSION
                            </h3>
                            <p className='py-5'>Ghost presents a world of boundless potential. Its purity liberates the imagination,
                                inviting you to craft a motor car that is a complete original.
                                There are no limits to what Ghost can become — all one has to do is imagine.</p>
                            <div className='p-5'>
                                <section className="buttons col-12">
                                    <button className="draw main-btn ">MAKE AN ENQURY <i class="fa-solid fa-arrow-right"></i></button>
                                </section>
                            </div>
                            <p className='py-5'>NEDC * (combined): CO2 emission: 343 g/km; Fuel consumption: 18.8 mpg / 15.0 l/100km
                                TWLTP # (combined): CO2 emission: 359-347 g/km; Fuel consumption: 17.9–18.6 mpg / 15.8-15.2 l/100km</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default NormalText
