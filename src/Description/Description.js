import React from "react";
import "./Description.css";

const Description = () => {
    return (
        <div className="describe__box">
            <h1> 
                {/* First part of the heading */}
                <nav className="nav1">The best offer</nav> 

                {/* Second part of the heading */}
                <nav className="nav2"> for your business </nav>
            </h1>
            <div className="para">
                <p>
                {/* Paragraph */}
                 Aute pariatur quis nulla irure veniam mollit voluptate duis est.
                 Deserunt id Lorem proident Lorem.Nulla excepteur proident mollit 
                 aute quis excepteur sunt irure eiusmod elit.Dolor Lorem voluptate 
                 ut qui eiusmod aliquip.Officia sit aute cillum adipisicing anim et 
                 sit tempor sint ullamco voluptate cupidatat.
                </p>
            </div>
        </div>
    )
}

export default Description;