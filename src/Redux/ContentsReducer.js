const initState = {
    Contents: ["moin", "zack", "araria", "sandalpur", "Bihar", "Purnea", "Having" ,"component", "version" , "useNavigate" , "makes"],
  }
  
  
  export const ReducersContents =(store = initState, {type, payload})=>{
  
      switch(type){
          case "CONTENTS_USER" : return {Contents : payload}
        
          default : return store
      }
  }