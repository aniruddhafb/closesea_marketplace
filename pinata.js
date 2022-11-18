import axios from "axios";

export const uploadJSONToIPFS = async (JSONBody) => {
  const url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
  return axios
    .post(url, JSONBody, {
      headers: {
        "pinata_api_key": process.env.NEXT_PUBLIC_PINATA_KEY,
        "pinata_secret_api_key": process.env.NEXT_PUBLIC_PINATA_SECRET,
      },
    })
    .then((response) => {
      return {
        success: true,
        pinataURL:
          "https://gateway.pinata.cloud/ipfs/" + response.data.ipfsHash,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};
export const uploadFileToIPFS = async (file) => {
  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

  let data = new FormData();
  data.append("file", file);

  const metadata = JSON.stringify({
    name: "MY NFT COLLECTION",
    keyValues: {
      customKey: "customValue",
      customKey2: "customValue2"
    },
    pinataOptions: {
      cidVersion: 0
    }
  });

  data.append("pinataMetadata", metadata);

  const pinataOptions = JSON.stringify({
    cidVersion: 0
  });
  data.append("pinataOptions", pinataOptions);

  return axios
    .post(url, data, {
      maxBodyLength: "Infinity",
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        "pinata_api_key": process.env.NEXT_PUBLIC_PINATA_KEY,
        "pinata_secret_api_key": process.env.NEXT_PUBLIC_PINATA_SECRET,
      },
    })
    .then((response) => {
      console.log("image uploaded", response.data.ipfsHash);
      return {
        success: true,
        pinataURL:
          "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};
