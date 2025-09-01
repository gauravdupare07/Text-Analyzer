import React, {useState} from 'react'


export default function TextForm(props) {
    // const [text, setText] = useState('enter text here');
        const [text, setText] = useState('');



    const handleUpClick = ()=>{
        // console.log("upper case was click"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(": Converted to Uppercase!", "success");
    }
    const handleLoClick = ()=>{
        // console.log("upper case was click"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(": Converted to Lowercase!", "success");
    }
    // const handleRemoveClick = ()=>{
    //     // console.log("upper case was click"+ text);
    //     let newText = text.replace();
    //     setText(newText)
    // }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert(": text was Clear!", "success");

    }

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const handleCopyClick = (event)=>{
        // console.log("on change");
        navigator.clipboard.writeText(text);
        props.showAlert(": text was Copied!", "success");
    }


    const handleRemoveSpaces = () => {
        let newText = text.replace(/\s+/g, " ").trim();
        setText(newText);
        props.showAlert(": Extra white Spaces was removed!", "success");
    };


  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#1e2327ff'}}> 
    <h1>{props.heading}</h1>
    <div className="mb-3">
        
    <textarea className="form-control" placeholder="Leave a Comment Here" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
    </div>

    <div className="d-flex justify-content-between mt-2">
    <div>
    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleRemoveSpaces}>remove extra white space</button>

    <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div >
    <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleCopyClick}>Copy Text</button>
    </div>
    </div>
    </div>
        <div disabled={text.length===0} className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>

            <p>
                {
                    text.trim().length === 0
                        ? 0
                        : text.trim().split(/\s+/).length
                } words and {text.length} characters
            </p>

            <p>
                {0.008 * (text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)} Minutes to read
            </p>

            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Nothing To Preview Here"}</p>
        </div>

    </>
  )
}
