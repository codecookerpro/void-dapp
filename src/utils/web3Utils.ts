export async function readAddress() {
    const method = "eth_requestAccounts";
  
    const accounts = await window.ethereum.request<string[]>({
      method
    });
  
    return accounts[0];
  }
  