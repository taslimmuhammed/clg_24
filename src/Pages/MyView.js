import { MediaRenderer } from '@thirdweb-dev/react';
import React from 'react'
import { useParams } from "react-router-dom";
function MyView() {
    const { id } = useParams();
  return (
    <div>
      <MediaRenderer src="ipfs://QmV4HC9fNrPJQeYpbW55NLLuSBMyzE11zS1L4HmL6Lbk7X" />
    </div>
  )
}

export default MyView;