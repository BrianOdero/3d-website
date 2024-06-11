import React, {useState} from 'react'


const useAlert = () => {

    const [alert, setAlert] = useState({show: false, text: '', type: 'danger'});

    //function that will modify the contents of the alert hook

    const showAlert = ({ text , type='danger'}) => setAlert({ //default type will be true
        show: true,
        text,
        type
    });

    //function that will hide the alert

    const hideAlert = () => setAlert({
        show: false,
        text: '',
        type: 'danger'
    });


  return ( alert , showAlert , hideAlert)
}

export default useAlert;