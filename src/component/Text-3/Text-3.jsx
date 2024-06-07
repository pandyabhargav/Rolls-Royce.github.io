import React from 'react'

function Text3({text}) {
  return (
    <>
    <div className='d-flex flex-wrap justify-content-center align-items-center text1 Text'>
        <div className='col-6 text-center'>
            <h2> 
                {text}
            </h2>
            <div className='p-5'>
                <section className="buttons col-12">
                    <button className="draw main-btn "> CONFIGER YOURS<i class="fa-solid fa-arrow-right"></i></button>
                </section>
            </div>
        </div>
    </div>
    </>
  )
}

export default Text3