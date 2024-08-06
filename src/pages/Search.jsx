import React from 'react';
import { useLocation } from 'react-router-dom';
import tourPackages from '../tourPackages.json';
import ImageBox from '../components/ImageBox';


function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const value = query.get('tour');
  
  const searchResults = tourPackages.filter(pkg => 
    pkg.name.toLowerCase().includes(value.toLowerCase()) || 
    pkg.type.toLowerCase().includes(value.toLowerCase())
  );

  if (!searchResults.length) {
    return <div className="mt-[100px]">No packages found.</div>;
  }

  return (
    <div className="flex flex-col items-center py-10 mt-[150px] w-[100%] mx-auto">
      <div className="grid grid-cols-2 785:grid-cols-3 gap-6">
        {searchResults.map((item, index) => (
          <div key={index} className="flex justify-center">
            <ImageBox id={item.id} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
