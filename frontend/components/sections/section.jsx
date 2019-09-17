import React from 'react';
import FeaturedExpanderContainer from "../expanders/featured_container";

const Section = props => {
  if (!props.items) return false;
  return (
    <div className="section">
      <label>{props.label}</label>
      <FeaturedExpanderContainer items={[props.items[0], props.items[1]]}/>
    </div>
  );
};

export default Section;