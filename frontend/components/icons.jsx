import React from 'react';

const Icons = () => {
  const icons = {
    "globe": "http://www.avitaldrucker.com",
    "github": "http://www.github.com/avitaldrucker",
    "linkedin-square": "http://www.linkedin.com/in/avitaldrucker"
  }

  return Object.keys(icons).map((icon, idx) => {
    return(
      <a href={icons[icon]} key={idx}>
        <i className={`fa fa-${icon}`} aria-hidden="true"></i>
      </a>
    );
  });

  // return(
  //   <figure className="icon-container">{iconTags}</figure>
  // );

}

export default Icons;
