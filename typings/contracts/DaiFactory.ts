/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { Dai } from "./Dai";

export class DaiFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(chainId_: BigNumberish): Promise<Dai> {
    return super.deploy(chainId_) as Promise<Dai>;
  }
  getDeployTransaction(chainId_: BigNumberish): UnsignedTransaction {
    return super.getDeployTransaction(chainId_);
  }
  attach(address: string): Dai {
    return super.attach(address) as Dai;
  }
  connect(signer: Signer): DaiFactory {
    return super.connect(signer) as DaiFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Dai {
    return new Contract(address, _abi, signerOrProvider) as Dai;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId_",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4"
      },
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "LogNote",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "wards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address"
      }
    ],
    name: "rely",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address"
      }
    ],
    name: "deny",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "push",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "pull",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "move",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516112223803806112228339818101604052602081101561003357600080fd5b5051336000908152602081905260409081902060019055518060526111d08239604080519182900360520182208282018252600e83526d2230b49029ba30b13632b1b7b4b760911b6020938401528151808301835260018152603160f81b908401528151808401919091527f0b1461ddc0c1d5ded79a1db0f74dae949050a7c0b28728c724b24958c27a328b818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c090940190528251920191909120600555506110a9806101276000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80637ecebe00116100b8578063a9059cbb1161007c578063a9059cbb146103e0578063b753a98c1461040c578063bb35783b14610438578063bf353dbb1461046e578063dd62ed3e14610494578063f2d5d56b146104c257610142565b80637ecebe00146103065780638fcbaf0c1461032c57806395d89b41146103865780639c52a7f11461038e5780639dc29fac146103b457610142565b8063313ce5671161010a578063313ce5671461025e5780633644e5151461027c57806340c10f191461028457806354fd4d50146102b257806365fae35e146102ba57806370a08231146102e057610142565b806306fdde0314610147578063095ea7b3146101c657806318160ddd1461020657806323b872dd1461022057806330adf81f14610256575b600080fd5b61014f6104ee565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561018b578082015183820152602001610173565b50505050905090810190601f1680156101b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f2600480360360408110156101dc57600080fd5b506001600160a01b038135169060200135610516565b604051901515815260200160405180910390f35b61020e610588565b60405190815260200160405180910390f35b6101f26004803603606081101561023657600080fd5b506001600160a01b0381358116916020810135909116906040013561058e565b61020e6107db565b6102666107ff565b60405160ff909116815260200160405180910390f35b61020e610804565b6102b06004803603604081101561029a57600080fd5b506001600160a01b03813516906020013561080a565b005b61014f6108f1565b6102b0600480360360208110156102d057600080fd5b50356001600160a01b031661090c565b61020e600480360360208110156102f657600080fd5b50356001600160a01b03166109ba565b61020e6004803603602081101561031c57600080fd5b50356001600160a01b03166109ce565b6102b0600480360361010081101561034357600080fd5b506001600160a01b038135811691602081013590911690604081013590606081013590608081013515159060ff60a0820135169060c08101359060e001356109e2565b61014f610cfc565b6102b0600480360360208110156103a457600080fd5b50356001600160a01b0316610d19565b6102b0600480360360408110156103ca57600080fd5b506001600160a01b038135169060200135610dc4565b6101f2600480360360408110156103f657600080fd5b506001600160a01b038135169060200135610fde565b6102b06004803603604081101561042257600080fd5b506001600160a01b038135169060200135610ff2565b6102b06004803603606081101561044e57600080fd5b506001600160a01b03813581169160208101359091169060400135611002565b61020e6004803603602081101561048457600080fd5b50356001600160a01b0316611013565b61020e600480360360408110156104aa57600080fd5b506001600160a01b0381358116916020013516611027565b6102b0600480360360408110156104d857600080fd5b506001600160a01b038135169060200135611049565b60405160408082019052600e81526d2230b49029ba30b13632b1b7b4b760911b602082015281565b336000908152600360205281604082206001600160a01b038516600090815260209190915260409020556001600160a01b038316337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405190815260200160405180910390a35060015b92915050565b60015481565b6001600160a01b0383166000908152600260205281604082205410156105f55760405162461bcd60e51b81526020600482015260186024820152774461692f696e73756666696369656e742d62616c616e636560401b604482015260640160405180910390fd5b6001600160a01b038416331480159061063957506001600160a01b038416600090815260036020526000199060409020336000908152602091909152604090205414155b15610718576001600160a01b03841660009081526003602052829060409020336000908152602091909152604090205410156106bb5760405162461bcd60e51b815260206004820152601a60248201527f4461692f696e73756666696369656e742d616c6c6f77616e6365000000000000604482015260640160405180910390fd5b6001600160a01b038416600090815260036020526106ee9060409020336000908152602091909152604090205483611054565b6001600160a01b038516600090815260036020526040902033600090815260209190915260409020555b6001600160a01b0384166000908152600260205261073b90604090205483611054565b6001600160a01b0385166000908152600260205260409020556001600160a01b0383166000908152600260205261077790604090205483611064565b6001600160a01b0384166000908152600260205260409020556001600160a01b038084169085167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405190815260200160405180910390a35060019392505050565b7fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb81565b601281565b60055481565b336000908152602081905260409020546001146108625760405162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015260640160405180910390fd5b6001600160a01b0382166000908152600260205261088590604090205482611064565b6001600160a01b0383166000908152600260205260409020556001546108ab9082611064565b6001556001600160a01b03821660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405190815260200160405180910390a35050565b6040516040808201905260018152603160f81b602082015281565b336000908152602081905260409020546001146109645760405162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015260640160405180910390fd5b6001600160a01b0381166000908152602081905260019060409020555961012081016040526020815260e0602082015260e060006040830137602435600435336001600160e01b03196000351661012085a45050565b600260205280600052604060002054905081565b600460205280600052604060002054905081565b6005546000907fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb8a8a8a8a8a60405160208101969096526001600160a01b03948516604080880191909152939094166060860152608085019190915260a084015290151560c083015260e090910190516020818303038152906040528051906020012060405161190160f01b6020820152602281019290925260428201526062016040516020818303038152906040528051906020012090506001600160a01b038916610aed5760405162461bcd60e51b815260206004820152601560248201527404461692f696e76616c69642d616464726573732d3605c1b604482015260640160405180910390fd5b60018185858560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610b4a573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b031614610bad5760405162461bcd60e51b815260206004820152601260248201527111185a4bda5b9d985b1a590b5c195c9b5a5d60721b604482015260640160405180910390fd5b851580610bba5750854211155b610bff5760405162461bcd60e51b815260206004820152601260248201527111185a4bdc195c9b5a5d0b595e1c1a5c995960721b604482015260640160405180910390fd5b6001600160a01b03891660009081526004602052604090208054600181019091558714610c665760405162461bcd60e51b81526020600482015260116024820152704461692f696e76616c69642d6e6f6e636560781b604482015260640160405180910390fd5b600085610c74576000610c78565b6000195b6001600160a01b038b16600090815260036020529091508190604090206001600160a01b038b16600090815260209190915260409020556001600160a01b03808a16908b167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405190815260200160405180910390a350505050505050505050565b60405160408082019052600381526244414960e81b602082015281565b33600090815260208190526040902054600114610d715760405162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015260640160405180910390fd5b6001600160a01b0381166000908152602081905260408120555961012081016040526020815260e0602082015260e060006040830137602435600435336001600160e01b03196000351661012085a45050565b6001600160a01b03821660009081526002602052819060409020541015610e2c5760405162461bcd60e51b81526020600482015260186024820152774461692f696e73756666696369656e742d62616c616e636560401b604482015260640160405180910390fd5b6001600160a01b0382163314801590610e7057506001600160a01b038216600090815260036020526000199060409020336000908152602091909152604090205414155b15610f4f576001600160a01b0382166000908152600360205281906040902033600090815260209190915260409020541015610ef25760405162461bcd60e51b815260206004820152601a60248201527f4461692f696e73756666696369656e742d616c6c6f77616e6365000000000000604482015260640160405180910390fd5b6001600160a01b03821660009081526003602052610f259060409020336000908152602091909152604090205482611054565b6001600160a01b038316600090815260036020526040902033600090815260209190915260409020555b6001600160a01b03821660009081526002602052610f7290604090205482611054565b6001600160a01b038316600090815260026020526040902055600154610f989082611054565b60015560006001600160a01b0383167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405190815260200160405180910390a35050565b6000610feb33848461058e565b9392505050565b610ffd33838361058e565b505050565b61100d83838361058e565b50505050565b600060205280600052604060002054905081565b6003602052816000526040600020602052806000526040600020549150829050565b610ffd82338361058e565b8082038281111561058257600080fd5b8082018281101561058257600080fdfea265627a7a72315820470a2729e4dd3bdea31b90c0b3471bf0d7c4c1d8e83672e7494c0b73f8198c8464736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";