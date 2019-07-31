import React from "react";

const BottomNavigationButtons = ({decrement, increment}) => {
    return (<div className="button-container">
        <button className="secondary" onClick={() => decrement()}>
            Previous
        </button>
        <button className="primary" onClick={() => increment()}>
            Next
        </button>
    </div>);
}

export default BottomNavigationButtons;
