import { MediaRenderer } from '@thirdweb-dev/react';
import React from 'react'
import { useParams } from "react-router-dom";

function View() {
  const { id } = useParams();
  return (
    <div> {id}
      <MediaRenderer src="ipfs://QmRQm2yVowkLY1nidQ61Psu8FojTFrMV5YDfcFBQyKe5uX" />
    </div>
  )
}

export default View