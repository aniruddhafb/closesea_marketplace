import axios from "axios";

const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;

export const uploadJSONToIPFS = async (JSONBody) => {
  const url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
  return axios
    .post(url, JSONBody, {
      headers: {
        "pinata_api_key": "1dc7b286f1b4e76e67b3",
        "pinata_secret_api_key": "80a361eee5dc4ccecd6fbb08d608dad4366471235668888ddd3a5b57088f2d3e",
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
    name: "closeseaNFTMetadata",
    keyValues: {
      "name": "closesea_nft1",
      "teamSize": "2",
      "project": "first",
    },
  });

  data.append("pinataMetadata", metadata);

  const pinataOptions = JSON.stringify({
    cidVersion: 0,
    customPolicy: {
      regions: [
        {
          id: "FRA1",
          desiredReplicationCount: 1,
        },
        {
          id: "NYC1",
          desiredReplicationCount: 2,
        },
      ],
    },
  });
  data.append("pinataOptions", pinataOptions);

  return axios
    .post(url, data, {
      maxBodyLength: "Infinity",
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        "pinata_api_key": "1dc7b286f1b4e76e67b3",
        "pinata_secret_api_key": "80a361eee5dc4ccecd6fbb08d608dad4366471235668888ddd3a5b57088f2d3e",
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
