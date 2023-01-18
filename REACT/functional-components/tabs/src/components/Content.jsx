import React from 'react';

const Content = (props) => {
    return (
        <div>
            {
                props.tab ?
                    <p>{props.tab} content is showing here.</p> : ""
            }
        </div>
    )
}


export default Content;