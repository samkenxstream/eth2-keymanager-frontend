import { ApiParams } from "./types";

export const beaconchaApiParamsMap = new Map<string, ApiParams>([
  ["mainnet", { baseUrl: "https://beaconcha.in", apiPath: "/api/v1/" }],
  ["prater", { baseUrl: "https://prater.beaconcha.in", apiPath: "/api/v1/" }],
  [
    "gnosis",
    { baseUrl: "https://beacon.gnosischain.com", apiPath: "/api/v1/" },
  ],
]);

export const beaconchaBaseUrls = new Map<string, string>([
  ["mainnet", "https://beaconcha.in"],
  ["prater", "https://prater.beaconcha.in"],
  ["gnosis", "https://beacon.gnosischain.com"],
]);

export const availableNetworks = ["mainnet", "prater", "gnosis"];
