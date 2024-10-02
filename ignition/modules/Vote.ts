import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { ethers } from "hardhat";

const VotingModule = buildModule("VotingModule", (m) => {
    const deployVoting = m.contract("Voting", []);

    return { deployVoting };
});

export default VotingModule;