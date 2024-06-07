import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Container, Row } from 'react-bootstrap'
function Scale() {

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const growTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#grow",
        scrub: 1.5,
        start: "top center",
        end: "+=400",
        ease: "power1.out"
      }
    });
    growTl.to("#grow", {
      duration: 1,
      scale: 1
    });

  })
  return (
    <>
      <Container fluid >
        <Row>
          <section className=" col-12 d-flex flex-wrap">
            <section className="image col-12">
              <div className='col-12'>
                <img id="grow" className='col-12' src="\image\original.jpeg" />
              </div>
            </section>
          </section>
        </Row>
      </Container>
    </>
  )
}

export default Scale
