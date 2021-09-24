import React, {useEffect, useState} from 'react';
import './App.css';
import Popup from "./Popup";
import ReactDOM from 'react-dom';


function App(): JSX.Element {
    const [popup, setPopup] = useState<Window | null>(null)
    const [shouldClosePopup, setShouldClosePopup] = useState(false)

    useEffect(() => {
        if (shouldClosePopup) {
            popup?.close()
            setShouldClosePopup(false)
        }

    }, [shouldClosePopup]);

    function openPopup() {
        if (popup == null || popup.closed) {
            let newWin = window.open("about:blank", "hello", "width=950,height=500");
            newWin?.document.write('<div id="app"></div>');

            ReactDOM.render(<Popup
                setShouldClosePopup={setShouldClosePopup}/>, (newWin as Window).document.getElementById("app"));


            setPopup(newWin);
        }
    }


    return (
        <div>
            <h1><a onClick={() => {
                openPopup()
            }}>open popup</a></h1>
        </div>
    );
}

export default App;