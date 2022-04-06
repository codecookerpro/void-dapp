export async function readAddress() {
    const method = "eth_requestAccounts";
  
    const accounts = await window.ethereum.request<string[]>({
      method
    });
  
    return accounts[0];
  }
  
  const isBrowser = () => typeof window !== "undefined"

  export function isMetaMaskInstalled() {
    if (isBrowser())
      return Boolean(window.ethereum);
    return false;
  }
  