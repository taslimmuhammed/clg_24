import React from 'react'
import { useParams } from "react-router-dom";
function SearchPage() {
    const { searchText } = useParams();
  return (
      <div>{searchText}</div>
  )
}

export default SearchPage