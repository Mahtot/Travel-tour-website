import React from 'react';
import Select, { components } from 'react-select';
import { CiSearch } from 'react-icons/ci';

// Custom control component
const CustomControl = ({ children, ...props }) => {
  return (
    <components.Control {...props}>
      {props.hasValue ? (
        <div className="flex items-center gap-2">
          <CiSearch />
          {children}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <CiSearch />
          <span className="placeholder">Destination</span>
        </div>
      )}
    </components.Control>
  );
};

export default CustomControl;
