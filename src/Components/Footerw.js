import React from 'react'


const footerStyle = {
    backgroundColor: "black",
    fontSize: "18px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "10px",
    width: "100%"
};

const phantomStyle = {
    display: "block",
    padding: "10px",
    width: "100%"
};

function Footerw() {
    return (
        <div>
            <div style={phantomStyle} />
            <div style={footerStyle}> <span>Author: Aakash Kharche</span></div>
        </div>
    )
}
export default Footerw;