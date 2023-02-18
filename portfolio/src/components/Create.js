import React, { useState } from "react";
import { postTx } from "../api/Api";

const options = [
  { key: "b", text: "Bought", value: "bought" },
  { key: "s", text: "Sold", value: "sold" },
];

export default function Create() {
  const [nft, setNFT] = useState("");
  const [price, setPrice] = useState("");
  const [nftstatus, setStatus] = useState("");

  const postData = async () => {
    console.log(nft);
    console.log(Number(price));
    console.log(nftstatus.toLowerCase());

    await postTx(nft, price, nftstatus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="nft">NFT</label>
        <input
          id="nft"
          name="nft"
          type="text"
          placeholder="NFT"
          value={nft}
          onChange={(e) => setNFT(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={nftstatus}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select status</option>
          {options.map(({ key, text, value }) => (
            <option key={key} value={value}>
              {text}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
