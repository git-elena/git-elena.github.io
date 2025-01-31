import React from 'react';
import ListItem from './ListItem';
import DesignItem from './DesignItem';

const DesignList = ({ data }) => {
  return (
    <ol>
      {data.map((section) => (

        <DesignItem 
            key={section.key}
            title={section.title} 
            text={section.text}
            result={section.result}
            List={(<ul>
                     {section.items.map((item) => (
                        <ListItem 
                            key={item.key} 
                            text={item.text} 
                            title={item.title} 
                        />
            ))}
            </ul>)}
        />

        // <div key={section.key}>
        //   <h2>{section.title}</h2>
        //   <p>{section.text}</p>
        //   <ul>
        //     {section.items.map((item) => (
        //       <ListItem key={item.key} text={item.text} title={item.title} />
        //     //   <li key={item.key}>
        //     //     <strong>{item.title}</strong>: {item.text}
        //     //   </li>
        //     ))}
        //   </ul>
        //   <p><strong>Result:</strong> {section.result}</p>
        // </div>
      ))}
    </ol>
  );
};

export default DesignList;
