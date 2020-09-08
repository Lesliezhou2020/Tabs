import React, {useState} from 'react';
import TabsDisplay from './TabsDisplay';
import Tab from './Tab';

const Tabs = (props) => {
    const [tabs, setTabs] = useState([
        {
            "header": "Tab 1",
            "content": "This is tab 1's content",
            "onfocus": false,
        },
        {
            "header": "Tab 2",
            "content": "Tab 2's content showing here",
            "onfocus": true,
        },
        {
            "header": "Tab 3",
            "content": "Tab 3 here",
            "onfocus": false,
        },
    ]);

    return(
        <div>
            <div>
                {tabs.map((val, i) => 
                    <Tab tabs={tabs} setTabs={setTabs} index={i} />
                )}
            </div>
            <TabsDisplay tabs={tabs}/>
        </div>
    )
}
export default Tabs;