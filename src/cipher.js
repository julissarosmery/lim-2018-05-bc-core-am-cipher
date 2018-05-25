window.cipher = {
  encode: (string, offset)=>{
    debugger
  let suma=(string.charCodeAt(0)-65+offset)%26+65;
  return String.fromCharCode(suma);
  

    
  }
  };

