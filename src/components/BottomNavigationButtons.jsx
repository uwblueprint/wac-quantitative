import React from "react";

const BottomNavigationButtons = ({decrement, increment}) => {
    return (<div>
        <button className="secondary bottom-button" onClick={() => decrement()}>
            Previous
        </button>
        <button className="primary bottom-button next-button" onClick={() => increment()}>
            Next
        </button>
    </div>);
}

export default BottomNavigationButtons;
