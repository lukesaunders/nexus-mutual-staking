import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  BurnRequested,
  Burned,
  Deposited,
  MigratedMember,
  PendingActionsProcessed,
  RewardRequested,
  RewardWithdrawn,
  Rewarded,
  Staked,
  StakersMigrationCompleted,
  UnstakeRequested,
  Unstaked,
  Withdrawn
} from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleBurnRequested(event: BurnRequested): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.contractAddress = event.params.contractAddress
  entity.amount = event.params.amount

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.MAX_EXPOSURE(...)
  // - contract.MIN_STAKE(...)
  // - contract.MIN_UNSTAKE(...)
  // - contract.UNSTAKE_LOCK_TIME(...)
  // - contract.burn(...)
  // - contract.contractStake(...)
  // - contract.contractStakerAtIndex(...)
  // - contract.contractStakerCount(...)
  // - contract.contractStakersArray(...)
  // - contract.firstReward(...)
  // - contract.hasPendingActions(...)
  // - contract.hasPendingBurns(...)
  // - contract.hasPendingRewards(...)
  // - contract.hasPendingUnstakeRequests(...)
  // - contract.initialized(...)
  // - contract.isContractStakeCalculated(...)
  // - contract.lastRewardId(...)
  // - contract.lastUnstakeRequestId(...)
  // - contract.master(...)
  // - contract.migrateStakers(...)
  // - contract.processPendingActions(...)
  // - contract.processedToStakerIndex(...)
  // - contract.rewards(...)
  // - contract.stakerContractAtIndex(...)
  // - contract.stakerContractCount(...)
  // - contract.stakerContractPendingUnstakeTotal(...)
  // - contract.stakerContractStake(...)
  // - contract.stakerContractsArray(...)
  // - contract.stakerDeposit(...)
  // - contract.stakerMaxWithdrawable(...)
  // - contract.stakerReward(...)
  // - contract.token(...)
  // - contract.tokenController(...)
  // - contract.unstakeRequestAtIndex(...)
  // - contract.unstakeRequests(...)
}

export function handleBurned(event: Burned): void {}

export function handleDeposited(event: Deposited): void {}

export function handleMigratedMember(event: MigratedMember): void {}

export function handlePendingActionsProcessed(
  event: PendingActionsProcessed
): void {}

export function handleRewardRequested(event: RewardRequested): void {}

export function handleRewardWithdrawn(event: RewardWithdrawn): void {}

export function handleRewarded(event: Rewarded): void {}

export function handleStaked(event: Staked): void {}

export function handleStakersMigrationCompleted(
  event: StakersMigrationCompleted
): void {}

export function handleUnstakeRequested(event: UnstakeRequested): void {}

export function handleUnstaked(event: Unstaked): void {}

export function handleWithdrawn(event: Withdrawn): void {}
