import { useState } from 'react'


const useAlert = () => {

    const [alert, setAlert] = useState({ show: false, text: '', type: '' });
  
  
  
    const showAlert = (alert) => {
  
      setAlert(alert);
  
    };
  
  
  
    const hideAlert = () => {
  
      setAlert({ show: false, text: '', type: '' });
  
    };
  
  
  
    return { alert, showAlert, hideAlert };
  
  };
  
  
  
  export default useAlert;
  