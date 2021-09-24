import React, {useEffect, useState} from 'react';
import {PopupProps} from "./Popup.props";
import {Css} from "./Popup.css";

export const Popup = ({setShouldClosePopup}: PopupProps): JSX.Element => {


    const [input1Value, setInput1Value] = useState("")
    const [input2Value, setInput2Value] = useState(-1)

    const [input3Value, setInput3Value] = useState("")
    const [input4Value, setInput4Value] = useState(-1)

    useEffect(() => {
        setInput2Value(getRandom())
        setInput4Value(getRandom())
    }, []);

    const getRandom = () => {
        return Math.floor(Math.random() * 100)
    }

    const submit = () => {
        if (input1Value === "" && input3Value === "") {
            window.alert('both inputs are empty')
            if (setShouldClosePopup) {
                setShouldClosePopup(true)
            }
        } else {
            console.log("input 1 value %s, input 2 value %s", input1Value, input3Value)
        }
    }

    return (
        <div className="container">
            <style>
                {Css}
            </style>
            <div>
            <table id="t0">
                <tbody>
                <tr>
                    <td><p>Title 1</p></td>
                    <td><p>Title 2</p></td>
                    <td><p>Title 3</p></td>
                    <td><p>Title 4</p></td>
                </tr>
                <tr>
                    <td>
                        <button>Sub</button>
                    </td>
                    <td><p>45</p></td>
                    <td><p>54</p></td>
                    <td><p>5</p></td>
                </tr>
                <tr>
                    <td><p>7</p></td>
                    <td><p>9</p></td>
                    <td><p>5</p></td>
                    <td><p>3</p></td>
                </tr>
                <tr>
                    <td><input value={input1Value} onChange={e => setInput1Value(e.target.value)}/></td>
                    <td><p>{input2Value}</p></td>
                    <td><input value={input3Value} onChange={e => setInput3Value(e.target.value)}/></td>
                    <td><p>{input4Value}</p></td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className = "submit">
                <button className = "submit_button" onClick={submit}>Submit</button>
            </div>
        </div>
    );
}

export default Popup;