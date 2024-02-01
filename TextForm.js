import React from 'react'
import { useState } from 'react'

const TextForm = (props) => {

    const [data, setdata] = useState("")

    const handleOnChange = (event) => {
        setdata(event.target.value);
    }

    const onClickForUpperCase = () => {
        let newData = data.toUpperCase();
        setdata(newData);
        props.showAlert("Convered in to UpperCase", "success");
    }
    const onClickForLowerCase = () => {
        let newData = data.toLowerCase();
        setdata(newData);
        props.showAlert("Convered in to LowerCase", "success");
    }
    const onClickForClear = () => {
        let newData = ''
        setdata(newData);
        props.showAlert("Clear the box", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(data);
        props.showAlert("Copy to Clipboard", "success");
    }
   

    return (
        <>
            {/* <div className="container  mb-3" style = {{color: props.mode === 'dark'?'white':'black'}}> */}
            <div className={`App container mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} /* style = {{color: props.mode === 'dark'?'white':'black'}} */>
                <h1>{props.text}</h1>
                <textarea className="form-control" value={data} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'Black' }} placeholder='Paste your text here...' id="mybox" rows="10"></textarea>
            </div>
            <div className="App">
                <button disabled={data.length === 0} className="btn btn-primary mx-2 mt-1" onClick={onClickForUpperCase}>UpperCase</button>
                <button disabled={data.length === 0} className="btn btn-primary mx-2 mt-1" onClick={onClickForClear}>Clear</button>
                <button disabled={data.length === 0} className="btn btn-primary mx-2 mt-1" onClick={onClickForLowerCase}>LowerCase</button>
                <button disabled={data.length === 0} className="btn btn-primary mx-2 mt-1" onClick={handleCopy}>Copy text</button>
                {/*<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button> */}
            </div>


            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{data.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {data.length} characters</p>
                <p>This will take {0.008 * data.split(" ").filter((element) => { return element.length !== 0 }).length} minitus to read </p>
                <h2>Preview:-</h2>
                <p>{data.length > 0 ? data : "'Nothingh to preview'"}</p>
            </div>

        </>
    )
}

export default TextForm