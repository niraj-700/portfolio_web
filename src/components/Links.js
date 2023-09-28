import React from "react";

export const Links = () => {
  return (
    <section className="link" id="links">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Links</h2>
              <div>
              <button role='link' onClick={() => window.open("")}>Linkedin</button>
              <button role='link' onClick={() => window.open("")}>Github</button>
              <button role='link' onClick={() => window.open("")}>Leetcode</button>
              <button role='link' onClick={() => window.open("")}>Gmail</button>
              </div>
              <div>
              <button role='link' onClick={() => window.open("")}>Linkedin</button>
              <button role='link' onClick={() => window.open("")}>Github</button>
              <button role='link' onClick={() => window.open("")}>Leetcode</button>
              <button role='link' onClick={() => window.open("")}>Gmail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
