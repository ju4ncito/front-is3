import { Button, Form } from "semantic-ui-react";
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
    <Form className="create-form" onSubmit={handleSubmit}>
      <Form.Field>
        <label>NFT</label>
        <input
          placeholder="NFT"
          value={nft}
          onChange={(e) => setNFT(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Price</label>
        <input
          value={price}
          type="number"
          step="0.01"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Field>
      <Form.Select
        fluid
        label="Status"
        options={options}
        placeholder="Status"
        onChange={(e) => setStatus(e.target.textContent)}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
