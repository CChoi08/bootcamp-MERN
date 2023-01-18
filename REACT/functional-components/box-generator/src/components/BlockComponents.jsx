import React, {useState} from 'react';
import styles from './css/BlockComponent.module.css';

const BlockComponents = (props) => {

    const[color, setColor] = useState("");
    const[blocks, setBlocks] = useState([]);

    const handleColor = (e) => {
        setColor(e.target.value);
    }
    const handleColorAdd = (e) => {
        e.preventDefault();
        blocks.push(color);
        setBlocks([...blocks]);
    }
    const blockStyle = (oneColor) => {
        let blockStyling = {
            border: "1px solid black",
            height: "100px",
            width: "100px",
            backgroundColor: oneColor
        }
        return blockStyling;
    };

    return (
        <div>
            <form action = "" onSubmit = {handleColorAdd}>
                <div className={styles.flex}>
                    <label htmlFor = 'Color'>Color</label>
                    <input type = "text" htmlFor = "Color" onChange = {handleColor}/>
                </div>
                <div className = {styles.center}>
                    <button>Add</button>
                </div>
            </form>
            <div className = {styles.flex}>
                {
                    blocks.map(
                        (item, i ) =>
                            <div key = {i} style = {blockStyle(item)}></div>
                        )
                }
            </div>
        </div>
    );
}

export default BlockComponents;