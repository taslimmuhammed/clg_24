import React, { useState } from "react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import Button from 'react-bootstrap/Button';


function LendingPage() {
  const [file, setfile] = useState(null);
  const storage = new ThirdwebStorage({
    clientId: "d38b4842e9d041746be46984e4baab53", // You can get one from dashboard settings
  });
  const uploadToIpfs = async () => {
    try {
      // const url = await upload({
      //   data: [file],
      //   options: {
      //     uploadWithGatewayUrl: true,
      //     uploadWithoutDirectory: true,
      //   },
      // });
      const uri = await storage.upload({
        data: [file],
      });
      console.log(uri);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setfile(e.target.files[0]);
            }
          }}
        />
        <button onClick={uploadToIpfs}>Upload</button>
      </div>


    </>
  )
}
export default LendingPage;