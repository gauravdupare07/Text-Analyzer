import React from "react";

export default function About(props) {
  return (
    
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#1e2327ff'}}>
      <h2>About Text Analyzer</h2>
      <p>
        Welcome to <strong>Text Analyzer</strong> – a simple yet powerful tool designed 
        to help you work with text quickly and efficiently. Whether you are a student, 
        professional, or content creator, Text Analyzer provides handy features 
        to make your writing tasks easier.
      </p>

      <h4>✨ Key Features:</h4>
      <ul>
        <li>Convert text to <strong>UPPERCASE</strong> or <strong>lowercase</strong></li>
        <li>Remove extra white spaces for clean formatting</li>
        <li>Copy processed text with a single click</li>
        <li>Get instant <strong>word and character count</strong></li>
        <li>Estimate <strong>reading time</strong> for your text</li>
        <li>Preview your text in real-time</li>
      </ul>

      <p>
        Our goal is to provide a lightweight, user-friendly, and fast solution 
        for basic text operations — all in one place.  
        Switch between <strong>Light and Dark Modes</strong> (including color themes) 
        to match your preference and make text editing comfortable at any time of day.
      </p>

      <p><em>Keep writing. Keep analyzing. 🚀</em></p>
    </div>
  );
}
