import React from 'react'

function Header(props) {
  return (
    <>
            {/* <!-- offcanvas --> */}
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
      <div className="offcanvas-header">
        
      </div>
      <div className="offcanvas-body d-flex justify-content-end align-items-center">
        <ul className="pT-120">
          <li>INSPIRING GREATNESS</li>
          <li>MODELS</li>
          <li>BESPOKE</li>
          <li>OWNERSHIP</li>
          <li>PROVENANCE</li>
          <li>BOUTIQUE</li>
          <li>MUSE ARTS PROGRAMME</li>
        </ul>
      </div>
    </div>
    {/* <!-- offcanvas --> */}
    <header>
      <div className="container">
        <div className="row">
          <div className="d-flex flex-wrap main-nav align-items-center p-3">
            <div className="col-4 d-flex justify-content-start align-items-center">
              <button
                className="btn1 p-2"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"
                onClick={() => props.onClick()}>
                <i className="fa-solid fa-bars icon-1" id="toggleIcon"></i><span className="p-2" id="menuText">MENU</span>
              </button>
            </div>
            <div className="col-4 logo d-flex justify-content-center align-items-center">
              <img src="image/image-removebg-preview.png" />
            </div>
            <div className="col-4 d-flex FdeLer justify-content-end align-items-center">
              <span><i className="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;FIND ADEALER</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header