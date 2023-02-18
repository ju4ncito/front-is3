const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";

export async function postTx(nft, price, nftstatus) {
  const body = {
    nft: nft,
    price: Number(price),
    status: nftstatus.toLowerCase(),
  };

  const url = new URL("/transaction", backendURL);
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });
  console.log(res.status);
  const data = await res.text();
  console.log(data);
}
