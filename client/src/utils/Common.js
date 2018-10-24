import React from 'react';

export const PageHeader = (props) => {
    return (
        <div
            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h4">{props.header}</h1>
        </div>
    )
}
