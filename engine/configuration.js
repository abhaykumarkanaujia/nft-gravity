/* 
       ___  ___    _  _  ___  _____   __  __             _         _   
 _ _  |_  )|   \  | \| || __||_   _| |  \/  | __ _  _ _ | |__ ___ | |_ 
| ' \  / / | |) | | .` || _|   | |   | |\/| |/ _` || '_|| / // -_)|  _|
|_||_|/___||___/  |_|\_||_|    |_|   |_|  |_|\__,_||_|  |_\_\\___| \__|
                                                                    
Update values accordingly
xxnft is the NFT SmartContract Address
xxmarket is the NFT MarketPlace Address
xxresell is the NFT MarketResell Address
xxnftcol is the already create NFT Collection Address
*/

/*
Private Key Encryption
Replace ethraw with your private key "0xPRIVATEKEY" (Ethereum and other EVM)
Replace hhraw with your private key "0xPRIVATEKEY" (Hardhat)
*/

import SimpleCrypto from "simple-crypto-js"
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const ethraw = "2109a319f4fc679ea02f80a55d6189138720fecadcf973076424e1e7a90fc73b";
const hhraw = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
export const cipherHH = simpleCrypto.encrypt(hhraw)

/*
IPFS Client Setup
*/

import { create as ipfsClient } from 'ipfs-http-client';
const projectId = '2FkWfi7XsLZ0WbH0vB32nkaWqB6';
const projectSecret = 'fa68ca516f966dbed983566838dd62a2';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

export const client = ipfsClient({
    host: 'infura-ipfs.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

//export const client = ipfsHttpClient('https://infura-ipfs.io:5001/api/v0');

/*
const ipfsClient = require('ipfs-http-client');

const projectId = '2FkWfi7XsLZ0WbH0vB32nkaWqB6';
const projectSecret = 'fa68ca516f966dbed983566838dd62a2';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

export const client = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

 client.pin.add('QmeGAVddnBSnKc1DLE7DLV9uuTqo5F7QbaveTjr45JUdQn').then((res) => {
     console.log(res);
});
/*
Add the wallet address used to deploy the contracts below:
*/
export var bridgeWallet = "0xC4cE6a8F6571d59441a078D2Ba5A09688e8D719B";


/*
HardHat Testnet
*/

export var hhresell = "0x44007F64fb73ad3b3937bbf2b06Dc7d91707Fe97";
export var hhnftcol = "0xE44c39fCE89eB91Ee82c1b94dc1E74798B2da07b";
export var hhnft = "0xE4F3a74e9A98c30aea08C4E8eFdD72E51A66e966";
export var hhmarket = "0x5a8399d4B33912757A967F6d06A2Ca8499AD9a07";
export var hhrpc = "https://rpc.ankr.com/eth_goerli";
export var mainnet = hhrpc

/*
Goerli Testnet
*/
export var goeErc20 = "0xBB848f3134Ed4Dc82B19717C7F00ed3C706Cb109";
export var goeCustody = "0x2546bAA4383851713F21C59a04B938B4e8Ff515d";
export var goeresell = "0x44007F64fb73ad3b3937bbf2b06Dc7d91707Fe97";
export var goenftcol = "0xE44c39fCE89eB91Ee82c1b94dc1E74798B2da07b";
export var goenft = "0x1EF62cc5b8C3e19e42F67422327F13b6fEaf256f";//"0xE4F3a74e9A98c30aea08C4E8eFdD72E51A66e966";
export var goemarket = "0x823b38329C000166beFA80E1CBa0Ad8eaC781f8c";
export var goerpc = "https://rpc.ankr.com/eth_goerli";

/*
BSC Testnet
*/
export var bsctErc20 = "0x675FB7D7B63068FA5C8454Fd3562c27fb32B9c06";
export var bsctCustody = "0x0Fd62256a913c9Abe216A5DeE98adb7c5fb29c55";
export var bsctresell = "0x9f3070cE2c15D39810b2E27FE48dd116b11600EA";
export var bsctnftcol = "0x7ea91C5E327d98cc0889dCd139f03AaA2A0577B4";
export var bsctnft = "0x4E827DA806cc43a8ACdE327ae7B7833520D31F24";
export var bsctmarket = "0xbDdD6fDc9f184032Ece1519595b279A642503D76";
export var bsctrpc = "https://data-seed-prebsc-1-s1.binance.org:8545/";

/*
Mumbai Testnet
*/
export var mumErc20 = "0x086cE6290e2F2Ec37E88479e5835eA531E0992cF";
export var mumCustody = "0xe7c9C5373c2dc56AAF116C3D3099FF6Fc7Ab7D28";
export var mmresell = "0x9d1fc977D7D1fDd327c4a80033B8e3Bcc45241f6";
export var mmnftcol = "0x4c11BA2441071Ec020EC9a99A83e73e728201F51";
export var mmnft = "0x96BB593048499743D3720E1fEcBA8Eb88BD61024";//"0x4238F466B2ceC21cff93A3C90D735C9D7E267968";
export var mmmarket = "0x4DA9736332536e68684369fD4A5511b037b3aa7c";
export var mmrpc = "https://matic-testnet-archive-rpc.bwarelabs.com";
