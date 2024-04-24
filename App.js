import React, { useState } from "react";
import "./App.css";

import backGround from "./background-brown-vintage-royalty-free-.png";
import statue from "./patination-removebg-preview.png";

// import {row, col} from "bootstrap"
import { Row, Col } from "react-bootstrap";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Row>
        <Col lg={2}>
          <div className="header">
            <button className="toggle-btn" onClick={toggleSidebar}>
              Toggle Sidebar
            </button>

            <div className="text-pg" style={{}}>
              <h3 className="main-text" style={{ flexWrap: "wrap-reverse" }}>
                {" "}
                MAITREYA BUDDHA <br></br> IN GESTRE OF <br></br> FEARLESSNESS{" "}
                <br></br>(ABHAYA MUDRA)
              </h3>

              <img src="" />
              <img src="" />
              <img src="" />

              <p> Dynasty:Ahichchhatra</p>
              <p> Period: 200CE</p>
              <p> Material:Sandstone</p>
              <p> Location: National Museum</p>

              <h4>Description</h4>
              <p className="description-text">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia porro sunt culpa, illo doloremque sint dolor mollitia
                voluptates corrupti quis aut optio quae quas dolores hic
                aspernatur explicabo nam amet iste? Similique expedita vitae
                quidem animi laborum magnam. Aliquam deleniti perferendis
                pariatur! Eveniet doloremque incidunt deleniti quibusdam
                possimus rerum sunt autem earum excepturi, dignissimos ad.
               {" "}
              </p>
            </div>

            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          {/*          
<div className='text-pg'  style={{marginTop:70}}>
  <h3>ndckfvfvjogitdb dnvkhgckljgibpupbp9kgboprbvjrug0tuu

  </h3>
</div>
    </div>
   <header className="header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
     <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        
      </div>
      </header>


         
<div className='text-pg'  style={{marginTop:70}}>
  <h3>ndckfvfvjogitdb dnvkhgckljgibpupbp9kgboprbvjrug0tuu

  </h3>
</div> */}
          {/* <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
     <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        
      </div> */}
        </Col>

        <Col lg={4}>
          <div className="main-content">
            <div className="image-container">
              <img src={backGround} alt="Grey Background" className="grey-bg" />
              <img src={statue} alt="Statue" className="statue" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
