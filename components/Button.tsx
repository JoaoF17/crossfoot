type Buttonprops = {
  type: 'button';
  title: string;
  icon?: string;
  href?: string;
  variant: 'btn_yellow'
}

import React from 'react'

const Button = ({ type, title, icon, href, variant}: Buttonprops) => {
  if (href) {
    return (
      <a 
        href={href} 
        className={`flexCenter gap-3 rounded border ${variant}`}
        target="_blank"
      >
        {icon && <i>{icon}</i>} {/* Render icon if provided */}
        <label className='bold-16 whitespace-nowrap'>{title}</label>
      </a>
    );
  }

  // Otherwise, render a regular button
  return (
    <button 
      className={`flexCenter gap-3 rounded border ${variant}`}
      type={type}
    >
      {icon && <i>{icon}</i>} {/* Render icon if provided */}
      <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  );
}

export default Button