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
  const postData = () => {
    console.log(nft);
    console.log(price);
    console.log(nftstatus);
  };
  return (
    <Form className="create-form">
      <Form.Field>
        <label>NFT</label>
        <input placeholder="NFT" onChange={(e) => setNFT(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Price</label>
        <input
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
        onChange={(e) => setStatus(e.target.value)}
      />
      <Button onClick={postData} type="submit">
        Submit
      </Button>
    </Form>
  );
}
