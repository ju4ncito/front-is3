import { Button, Checkbox, Form } from "semantic-ui-react";
import React, { useState } from "react";

const options = [
  { key: "b", text: "Bought", value: "bought" },
  { key: "s", text: "Sold", value: "sold" },
];

const Create = () => (
  <Form className="create-form">
    <Form.Field>
      <label>NFT</label>
      <input placeholder="NFT" />
    </Form.Field>
    <Form.Field>
      <label>Price</label>
      <input type="number" step="0.01" placeholder="Price" />
    </Form.Field>
    <Form.Select fluid label="Status" options={options} placeholder="Status" />
    <Button type="submit">Submit</Button>
  </Form>
);

export default Create;
