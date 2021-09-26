import React, {useEffect, useState} from 'react';
import './App.css';
import Popup from "./Popup";
import ReactDOM from 'react-dom';


function App(): JSX.Element {
    const [popup, setPopup] = useState<Window | null>(null)
    const [shouldClosePopup, setShouldClosePopup] = useState(false)

    useEffect(() => {
        if (shouldClosePopup) {
            if (popup && !popup.closed) {
                popup?.close()
            }
    
            setShouldClosePopup(false)
        }
    
    }, [shouldClosePopup, popup]);

    function openPopup() {
        if (popup == null || popup.closed) {
            let newWin = window.open("", "", "width=800,height=600, left=50px, top=50px");
    
            if (newWin == null) {
                alert("window was blocked by browser")
                return
            }
    
            newWin?.document.write('<div id="app"></div>');
    
            ReactDOM.render(<Popup
                setShouldClosePopup={setShouldClosePopup}/>, (newWin as Window).document.getElementById("app"));
    
            setPopup(newWin);
        }
    }

    return (
        <div>
            <h1><p onClick={() => {
                openPopup()
            }}>open popup</p></h1>
        </div>
    );
}

export default App;