import React, { useState, useContext } from "react"
import Loader from "../Components/Loader";
import { EthersContext } from "../Context/EthersContext";
import '../Styles/Create.css'
import { useStorage } from "@thirdweb-dev/react";
import { useStorageUpload } from "@thirdweb-dev/react";
function Create() {
    const {  } = useContext(EthersContext)

    const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
    const inputStyle = "my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    const [Name, setName] = useState(null)
    const storage = useStorage();
    const { mutateAsync: upload, isLoading:uploading } = useStorageUpload();
    const [Files, setFiles] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    // const storage = new ThirdwebStorage({
    //     secretKey: "ExTZrf-HBZHOqJpRNGhr1BzTjSbDphNHQe4Ni3RGi4_qIBmZgBf8RA_hrvjLBAFClQYCqSHp2sJIoFqX5dteuA", // You can get one from dashboard settings
    // });
    const handleSubmit = async () => {
        setIsLoading(true)
        await uploadData()
        // const uri = await storage.upload(Files);
        // // // This will log a URL like ipfs://QmWgbcjKWCXhaLzMz4gNBxQpAHktQK6MkLvBkKXbsoWEEy/0
        // console.info(uri);
        setIsLoading(false)
        

        // // Here we a URL with a gateway that we can look at in the browser
        // const url = await storage.resolveScheme(uri);
        // // This will log a URL like https://ipfs.thirdwebstorage.com/ipfs/QmWgbcjKWCXhaLzMz4gNBxQpAHktQK6MkLvBkKXbsoWEEy/0
        // console.info(url);

        // // You can also download the data from the uri
        // const data = await storage.downloadJSON(uri);
        // if (cid) {
        //     const count = await createCase(cid,Name)
        //     if (count == null) {
        //         alert("Sorry, faced some technichal issues please try again later")
        //     }
        //     else { alert(`Upload Succeful . Please note the Id for your case : ${count}`) }
        //     console.log(count)
        // }
    }

    const uploadData = async() => {
        // Get any data that you want to upload

        // And upload the data with the upload function
        if(Files==null) return alert("No files selected")
        try {
            const uris = await upload({ data: [Files[0]], options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true }, });
            console.log(uris);
            // console.log(Files);
            // const phototURI = await storage?.upload(Files)
            // const metaData = {
            //     "name": "Test",
            //     "description": "Test",
            //     "file": phototURI
            // }
            // const uri = await storage?.upload(metaData)
            // console.log(uri)
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <div className='gradient-bg-welcome flex w-full min-h-screen justify-center items-center'>
            <div className="container1">
                <h2>Create</h2>
                <div className="p-5  flex flex-col justify-start items-center text-left blue-glassmorphism  border-gray-400">
                    <div>
                        <div className="">
                            <div className="text-white w-full text-sm mt-3">Name of your work  </div>
                            <input placeholder="Name of your work" className={inputStyle} type="text" onChange={(e) => { setName(e.target.value) }} />
                            <div className="text-white w-full text-sm mt-3">Upload files (* including large documents, designs, musics, photos etc ) </div>
                            <input className={inputStyle} type="file" multiple onChange={(e) => { setFiles(e.target.files) }} />
                            <div className="h-[1px] w-full bg-gray-400 my-2" />
                            {isLoading
                                ? <Loader />
                                : (
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                                    >
                                        Proceed to create
                                    </button>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create 