import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNoToInt, HexToDateString } from "./convertions";

export const BlockFunctions = {
    storage: new ThirdwebStorage({
        clientId: "d38b4842e9d041746be46984e4baab53", // You can get one from dashboard settings
    }),
    uploadToIPFS: async (Files, Name, Creator, Description) => {
        if (Files == null) return null;
        if (Files == null) return alert("No files selected")
        try {

            const uri = await BlockFunctions.storage?.upload(
                {
                    name: Name,
                    creator: Creator,
                    descreption: Description,
                    time: Date.now(),
                    files: Files,
                }
            )
            return uri;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    getIPData: async (ip) => {
        try {
            let data = await BlockFunctions.storage.downloadJSON(ip.uri);
            data.currentOwner = ip.currenOwner
            data.id = ip.id
            data.selling = ip.buyable
            data.lending = ip.lendable
            data.lendingPrice = BigNoToInt(ip.lendingPrice)
            data.buyingPrice = BigNoToInt(ip.buyingPrice)
            data.date = HexToDateString(ip.time)
            return data;
        } catch (e) {
            return null
        }

    }
}