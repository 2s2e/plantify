// drag drop file component
import './style.css'; 
import React from 'react';


export function ImageUploader() {
    // drag state
    const [dragActive, setDragActive] = React.useState(false);
    const [file, setFile] = React.useState(null);
    // ref
    const inputRef = React.useRef(null);
    

    const handleFiles = async function(files) {
      // handle files
      setFile(files[0]);
      const formData = new FormData();
      formData.append('file', files[0]);
      fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('response: ', data)
          if (data.success) {
            const predictions = data.predictions;
            console.log('predictions: ', predictions)
          }
        })
    };
    // handle drag events
    const handleDrag = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };
    
    // triggers when file is dropped
    const handleDrop = function(e) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFiles(e.dataTransfer.files);
      }
      
    };
    
    // triggers when file is selected with click
    const handleChange = function(e) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        console.log('handle change')
        handleFiles(e.target.files);
      }
    };
    
  // triggers the input when the button is clicked
    const onButtonClick = () => {
      inputRef.current.click();
    };
    
    return (
      <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
          <div>
            <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
            <p className='button-subtitle'> or drop a file</p>
          </div>

        </label>
        { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
      </form>

    );
  };