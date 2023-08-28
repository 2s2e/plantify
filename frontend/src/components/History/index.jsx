import React from 'react';
import historyButton from "../../assets/history-item-button.svg"
import styles from './styles.css'
{/* THIS IS A STUB*/ }
export function History() {
    return(
    <div className='history-container'>
        <div className="history-item" >
            <img src={historyButton} alt="history-button" width="25" />
            <p>Rose</p>
        </div>
        <div className="history-item" >
            <img src={historyButton} alt="history-button" width="25" />
            <p>Palm Tree</p>
        </div>
        <div className="history-item" >
            <img src={historyButton} alt="history-button" width="25" />
            <p>Poison Ivy</p>
        </div>
        <div className="history-item" >
            <img src={historyButton} alt="history-button" width="25" />
            <p>Redwood Tree</p>
        </div>
    </div>
    );
}