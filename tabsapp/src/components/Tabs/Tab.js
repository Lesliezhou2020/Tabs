import React, {useState} from 'react';

const Tab = ({tabs, setTabs, index}) => {

    const focused = tabs[index].onfocus;
    const header = tabs[index].header;

    const onClick = (e) => {
        e.preventDefault();
        console.log("Click");
        setTabs( () => {
            return tabs.map((val, i) => {
                return {
                    "header": val.header,
                    "content": val.content,
                    "onfocus": i === index
                }
            })
        })
    }

    return(
        <div>
            {focused ?
            <h2 style={{background:'black', color:'white'}}>{header}</h2> :
            <h2 onClick={onClick}>{header}</h2>
            }
        </div>
    )
}

export default Tab;