## Amethyst - 0xb9E05B4C168B56F73940980aE6EF366354357009

    - distribute rewards
        - launcher address
        - airdrop address
    - transfer operator - treasury

## ASHARE - 0xFa4b16b0f63F5A6D0651592620D585D308F749A4

    - set allocations
        - _communityAllocation 7000000000000000000000
        - _devAllocation 1250000000000000000000
        - _team1Allocation 1250000000000000000000
    - distribute rewards
        - _farmingIncentiveFund qsharewardpool
    - claim rewards
    - transfer operator - treasury

## ABOND - 0xa4F976f7099a0d7F096615DBcbcf5F9d977Ca235

    - transfer operator - treasury

## AShareRewardPool - 0x1da194F8baf85175519D92322a06b46A2638A530

    - add -
        - last reward time - 0
        - alloc point - 19834 - ames-ust
        - alloc point - 19834 - ashare-ust
        - alloc point - 19834 - 1qshare-ustc
    - update
        - as duas

## tax oracle - 0x2110Aa29292B44B142DD20de45dE6C418Aa28092

    - set wavax (ust)
    - set pair

## treasury - 0x3234F20Ff819dB353f702C44337E5b3c0982a4aB

    - initialize
        - oracle - oracle
        - _startTime - mesmo que as farms
    - set extra funds
        - dao 1500
        - devfund 100
        - teamfund 100
    - set minting factor 10000??
    - allocate seignorage (6h)

## boardroom - 0xC183b26Ad8C660AFa7B388067Fd18c1Fb28f1bB4

    - initialize
    - set operator - treasury

## oracle - 0x298be24C55BF89B114FE66972C787ec78530fCd7

    - period 21600
    - pair ust-quartz

########################################################

ust - 0x23396cF899Ca06c4472205fC903bDB4de249D6fC
ames-ust - 0x6f78a0d31adc7c9fb848850f9d2a40da5858ad03
ashare-ust - 0x39846550Ef3Cb8d06E3CFF52845dF42F71Ac3851
1qshare-ust - 0x61503f74189074e8e793cc0827eae37798c2b8f7

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
