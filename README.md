## Quartz - 0xb9E05B4C168B56F73940980aE6EF366354357009

    - distribute rewards
        - launcher address
        - airdrop address
    - transfer operator - treasury

## QSHARE - 0xFa4b16b0f63F5A6D0651592620D585D308F749A4

    - set allocations
        - _communityAllocation 7000000000000000000000
        - _devAllocation 1750000000000000000000
        - _team1Allocation 1750000000000000000000
    - distribute rewards
        - _farmingIncentiveFund qsharewardpool
    - claim rewards
    - transfer operator - treasury

## QBOND - 0x5A12bc3Ad86c674a50fae82510DcB03751ab218b

    - transfer operator - treasury

## QShareRewardPool - 0x1da194F8baf85175519D92322a06b46A2638A530

    - add -
        - last reward time - 0
        - alloc point - 35500 - quartz-ust
        - alloc point - 24000 - qshare-ust
    - update
        - as duas

## tax oracle - 0x24866b121217F391b0079348146Ea139d7Fd77c7

    - set wavax (ust)
    - set pair

## treasury - 0xFc0B7c105A6dd49Fd956b607CA8c8f00Ed159353

    - initialize
        - oracle - oracle
        - _startTime - mesmo que as farms
    - set extra funds
        - dao 1500
        - devfund 250
        - teamfund 250
    - set minting factor 15000??
    - allocate seignorage (6h)

## boardroom - 0xE1E48d3476027af9dC92542b3a60F2D45A36e082

    - initialize
    - set operator - treasury

## oracle - 0x543AB16f3EDe6dDD26a7C182869a282618B0891C

    - period 21600
    - pair ust-quartz

## xquartz - 0xCa1dd590C3ceBa9F57E05540B91AB3F0Ed08580a

########################################################

ust - 0x224e64ec1BDce3870a6a6c777eDd450454068FEC
quartz-one - 0x8142d1b6a32e40c62b8ada3685475924578a804c
quartz-ust - 0x90a48cb3a724ef6f8e6240f4788559f6370b6925
qshare-one - 0x157e2e205b8d307501f1aad1c5c96c562e6f07c5
qshare-ust - 0x363167828bafb7cddf01475613df72917f75fbde

##################### FE STUFF ####################

- ADD METAMASK IMAGES

```
if (depositTokenName.startsWith('QUARTZ')) {
    // make this real allocation
    return rewardPerSecond.mul(41650).div(59500);
} else {
    return rewardPerSecond.mul(17850).div(59500);
}
```

##################### WALLETS #########################
deployer - 0x6b2FD2BD34676E4c312cA2F8a472e7C2d9e380e7 - metamask
dao fund - 0xEE07b8Ee4D827F7EDAC3FFA7bf1a84B8c816623A - ledger
dev wallet - 0xB182b5b0Cf6bDB738e9157D6a21B02d92dbf5C38 - ledger
team wallet - 0xc4A0A5D5B50BAB1Ee3D37769e94cAe5B9023f1d3 - barbaças
##################### WALLETS #########################
