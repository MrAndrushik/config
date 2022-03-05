import React from "react";

const NotAllowed = () => {
    return (
        <div className="not-allowed container">
            <div>
                <h1 className="not-allowed__title">
                    Sorry, only Desctop version
                </h1>
                <img src="img/desctop.svg" alt="" className="not-allowed-img" />
            </div>
        </div>
    );
};

export default NotAllowed;
