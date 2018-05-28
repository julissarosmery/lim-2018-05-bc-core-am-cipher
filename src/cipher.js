  window.cipher = {

    encode:  (string, offset) => {
      //pasrseIn para especificar numeros enteros
      offset=parseInt(offset);
       //mostrar cifra codificada
      let codCipher='';
      //esto se lee i=va a comensar en 0 i= va a ser mayor o igual que  i= va a avanzar de uno en uno.
      for (let i=0; i<string.length; i++){
        //a es el codigo ascii
        let a=string.charCodeAt(i);
        //if= si..a es mayor o igual y menor o igual que
        if (a>=65 && a<=90){
        //x = mayusculas
        let x=(a-65+offset)%26+65;
        codCipher = codCipher+String.fromCharCode(x);//parapasarlo de numeros a letras 
        }
        //if= si..a es mayor o igual y menor o igual que
        if (a>=97 && a<=122){
          //y =ninusculas 
          let y=(a-97+offset)%26+97;
           codCipher=codCipher+String.fromCharCode(y);//parapasarlo de numeros a letras 
        }
         //si es igual
        if(a==32){
          let space="";
          codCipher+=space;
        }
        }
        //regresa
        return codCipher;
      
      },
      decode:  (string, offset) => {
        //pasrseIn para especificar numeros enteros
        offset=parseInt(offset);
        //mostrar cifra decodificada
        let decodCipher='';
        //for= para ..esto se lee i=va a comensar en 0 i= va a ser mayor o igual que  i= va a avanzar de uno en uno.
        for (let i=0; i<string.length; i++){
          //a es codigo asccii
          let a=string.charCodeAt(i);
          //if= si..a es mayor o igual y menor o igual que
          if(a>=65 && a<=90){
            //x=mayusculas
          let x=(a+65-offset)%26+65;
          decodCipher = decodCipher+String.fromCharCode(x);//parapasarlo de numeros a letras 
          }
           //if= si..a es mayor o igual y menor o igual que
          if(a>=97 && a<=122){
            //y =ninusculas
            let y=(a+97-offset-12)%26+97;
            decodCipher=decodCipher+String.fromCharCode(y);//parapasarlo de numeros a letras
          }
          //si es igual
          if(a==32){
            let space="";
            decodCipher+=space;
          }
          }
          //regresa
          return decodCipher;
        }
      };