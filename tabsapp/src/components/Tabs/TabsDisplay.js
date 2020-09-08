import React from 'react';


const TabsDisplay =({tabs}) => {

    return (
        <div>
            {tabs.filter( val => val.onfocus ).map((val, i) => val.content)}
        </div>
    )
}
export default TabsDisplay;