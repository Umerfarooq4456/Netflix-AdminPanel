import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";


const MultiSelectDropdown = ({data,array,type}) => {
    
  const options = data  ?.map((d)=>
  (
    type === 'category' ?
  { 
   label: d?.title,
   value: d?.title 
  }:
  { 
    label: d?.language,
    value: d?.language 
   }
  
  )) 
    
      
  const [selected, setSelected] = useState([]);
  
  var selectedCategories = selected?.map(function (e) {
    return e.value;
  }).join(', ');
  
   useEffect(() => {
    array(selectedCategories)
   }, [selectedCategories])
   

  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default MultiSelectDropdown;