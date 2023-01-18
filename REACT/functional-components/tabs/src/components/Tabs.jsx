import React, {useState} from 'react';

const Tabs = (props) => {

    const changeTab = (e) => {
        props.setTab(e.target.value);
    }
    return (
        <div>
            {
                props.tabSize.map((item,i) =>
                    <button key = {i} onClick = {changeTab} value = {item}>{item}</button>)
            }
        </div>
    )
}

export default Tabs;