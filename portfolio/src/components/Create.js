import React, { useState } from "react";

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

    const body = {
      nft: nft,
      price: Number(price),
      status: nftstatus.toLowerCase(),
    };

    const res = await fetch("http://localhost:8080/transaction", {
      method: "POST",
      body: JSON.stringify(body),
    });
    console.log(res.status);
    const data = await res.text();
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label for="nft">NFT</label>
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
        <label for="price">Price</label>
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
        <label for="status">Status</label>
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
