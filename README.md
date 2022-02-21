## Amethyst - 0xce103124aEab66272d8b7f8e70963a133a80F95d

    - distribute rewards
        - launcher address
        - airdrop address
    - transfer operator - treasury

## ASHARE - 0x1f939D42129e30b465303B43A159c65EBc3db9f5

    - set allocations
        - _communityAllocation 7000000000000000000000
        - _devAllocation 1250000000000000000000
        - _team1Allocation 1250000000000000000000
    - distribute rewards
        - _farmingIncentiveFund qsharewardpool
    - claim rewards
    - transfer operator - treasury

## ABOND - 0xd7C43f17fFE531D3c469A00414675E5e1D05F43f

    - transfer operator - treasury

## AShareRewardPool - 0x99BBD0CAc6B1cCf0a28654F2534Df69Bc3598490

    - add -
        - last reward time - 0
        - alloc point - 19834 - ames-ust
        - alloc point - 19834 - ashare-ust
        - alloc point - 19834 - 1qshare-ustc
    - update
        - as duas

## tax oracle - 0xdFd5cb44Ebf731B225A2E15ffE0C9071cdcC8FcE

    - set wavax (ust)
    - set pair

## treasury - 0xa213Df21c9064BdFbC48c7186F3edA54f4A106cc

    - initialize
        - oracle - oracle
        - _startTime - mesmo que as farms
    - set extra funds
        - dao 1500
        - devfund 250
        - teamfund 250
    - set minting factor 10000??
    - allocate seignorage (6h)

## boardroom - 0xe581E20b9e956eb7F8a83318C626e0B28bBe8946

    - initialize
    - set operator - treasury

## oracle - 0x940A8533F75E993b984c9f3e22bf5af56EeBc7Fb

    - period 21600
    - pair ust-quartz

########################################################

ust - 0x23396cF899Ca06c4472205fC903bDB4de249D6fC
ames-ust - 0xeb50f489581b0fe627f1eb083800ee474f7a4b7d
ashare-ust - 0x2f12ce9e2f919513e8be4205e6677a28bfca938b
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
