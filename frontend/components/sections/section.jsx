import React from 'react';
import FeaturedExpanderContainer from "../expanders/featured_container";
import MiniExpanderContainer from "../expanders/mini_container";

const Section = props => {
  if (!props.items) return false;
  return (
    <div className="section">
      <label>{props.label}</label>
      <FeaturedExpanderContainer items={[props.items[0], props.items[1]]}/>
      <div className="mini-expander-container">
        {
          props.items.slice(2).map(item => (
            <MiniExpanderContainer item={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  );
};

export default Section;