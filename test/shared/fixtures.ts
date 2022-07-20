// get function selectors from ABI
export async function getSelectors(contract: any) {
  const signatures = Object.keys(contract.interface.functions);
  const selectors = signatures.reduce((acc: any, val: any) => {
    if (val !== "init(bytes)") {
      acc.push(contract.interface.getSighash(val));
    }
    return acc;
  }, []);
  selectors.contract = contract;

  return selectors;
}
