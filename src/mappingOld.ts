import { BigInt } from "@graphprotocol/graph-ts"
import {
  AddStakeCall,
} from "../generated/ContractOld/Contract"
import { StakeOld } from "../generated/schema"

export function handleAddStake(call: AddStakeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new StakeOld(id)

  entity.contractAddress = call.inputs._stakedContractAddress
  entity.staker = call.inputs._stakerAddress
  entity.amount = call.inputs._amount
  entity.blockNumber = call.block.number
  entity.blockTimestamp = call.block.timestamp

  entity.save()
}
