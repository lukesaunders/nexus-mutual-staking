import { BigInt } from "@graphprotocol/graph-ts"
import {
  AddStakeCall,
} from "../generated/ContractOld/Contract"
import { StakeOld } from "../generated/schema"

export function handleAddStake(call: AddStakeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new StakeOld(id)

  entity.contractAddress = event.params.stakedContractAddress
  entity.staker = event.params.stakerAddress
  entity.amount = event.params.amount
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp

  entity.save()
}
