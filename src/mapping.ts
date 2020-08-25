import { BigInt } from "@graphprotocol/graph-ts"
import {
  Staked,
  UnstakeRequested,
  Unstaked,
} from "../generated/Contract/Contract"
import { Stake, UnstakedRequest, Unstake } from "../generated/schema"

export function handleStaked(event: Staked): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  entity = new Staked(id)

  entity.contractAddress = event.params.contractAddress
  entity.staker = event.params.staker
  entity.amount = event.params.amount
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp

  entity.save()
}

export function handleUnstakeRequested(event: UnstakeRequested): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  entity = new UnstakeRequest(id)

  entity.contractAddress = event.params.contractAddress
  entity.staker = event.params.staker
  entity.amount = event.params.amount
  entity.unstakeAt = event.params.unstakeAt
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp

  entity.save()
}

export function handleUnstaked(event: Unstaked): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  entity = new Unstake(id)

  entity.contractAddress = event.params.contractAddress
  entity.staker = event.params.staker
  entity.amount = event.params.amount
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp

  entity.save()
}
