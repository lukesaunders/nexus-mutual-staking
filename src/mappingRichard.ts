import { BigInt } from "@graphprotocol/graph-ts"
import {
  AddStakeCall,
} from "../generated/ContractRichardOne/Contract"
import { StakeRichard } from "../generated/schema"

export function handleAddStake(call: AddStakeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new StakeRichard(id)

  entity.contractAddress = call.inputs._scAddress
  entity.amount = call.inputs._amount
  entity.blockNumber = call.block.number
  entity.blockTimestamp = call.block.timestamp

  entity.save()
}
