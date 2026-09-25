// =========================================================================
// PROJECT-FATHER // TRACK 01: CORE LEDGER & TOKENOMICS
// MODULE: AUTOMATED ANTI-HOARDING ENGINE & DYNAMIC PPP REWARD ROUTER
// =========================================================================

use father_crypto::{ZeroKnowledgeProof, Nullifier};
use father_governance::{AxiomGuard, RankTier};

// Core Hardlocked Constants (Layer-0 Constitutional Axioms)
const LUXURY_THRESHOLD_MAX: u128 = 50_000_000_000; // Hardlocked token saturation ceiling
const STABILITY_DECAY_RATE_LAMBDA: f64 = 0.05;    // Continuous token decay slope (5% per epoch block)
const MINIMUM_SUBSISTENCE_BASE: u128 = 100;        // Base R_base value for survival task execution

pub struct WalletState {
    pub balance: u128,
    pub last_interaction_timestamp: u64,
    pub verified_human_nullifier: Nullifier,
    pub user_iq_growth_delta: f64,
}

pub struct CitadelTreasuryVault {
    pub balance: u128,
    pub space_exploration_allocation: u128,
    pub local_nutrient_printing_allocation: u128,
}

/// Computes the dynamic task reward adjusted for localized cost-of-living (PPP)
/// without revealing the user's exact coordinate data via Zero-Knowledge parameters.
pub fn calculate_dynamic_ppp_reward(
    zk_cpi_proof: ZeroKnowledgeProof,
    global_avg_cpi: u128,
    user_state: &WalletState
) -> u128 {
    // Verify the ZK-Proof to securely unpack the local Consumer Price Index index (CPI_local)
    let local_cpi = match zk_cpi_proof.verify_and_extract_cpi() {
        Ok(cpi) => cpi,
        Err(_) => panic!("CRITICAL EXCEPTION: Malicious or manipulated geolocation packet detected."),
    };

    // Calculate baseline adjusted reward ratio
    let ppp_ratio = (local_cpi as f64) / (global_avg_cpi as f64);
    
    // R_local = R_base * PPP_ratio * (1 + delta_IQ)
    let dynamic_multiplier = ppp_ratio * (1.0 + user_state.user_iq_growth_delta);
    let final_reward = (MINIMUM_SUBSISTENCE_BASE as f64 * dynamic_multiplier) as u128;

    return final_reward;
}

/// Enforces the continuous, smart-contract-driven Luxury Decay Tax.
/// Automatically executes a capital drain if a wallet hoards resources past human security needs,
/// routing 100% of the decay surplus directly to the Citadel Treasury public good pools.
pub fn enforce_anti_hoarding_decay_tax(
    user_wallet: &mut WalletState,
    treasury_vault: &mut CitadelTreasuryVault,
    current_timestamp: u64
) -> Result<(), &'static str> {
    
    // Check if the current user wallet balance breaches the absolute Luxury Threshold Cap
    if user_wallet.balance > LUXURY_THRESHOLD_MAX {
        let elapsed_blocks = current_timestamp - user_wallet.last_interaction_timestamp;
        let excess_capital = user_wallet.balance - LUXURY_THRESHOLD_MAX;
        
        // Calculate continuous mathematical decay: dW/dt = -λ(W - T_max)
        let decay_amount_f64 = (excess_capital as f64) * (1.0 - (-STABILITY_DECAY_RATE_LAMBDA * elapsed_blocks as f64).exp());
        let total_decay_slashed = decay_amount_f64 as u128;

        if total_decay_slashed > 0 {
            // Deduct from the hoarding account balance
            user_wallet.balance -= total_decay_slashed;
            user_wallet.last_interaction_timestamp = current_timestamp;

            // Route the seized resources directly to the sovereign global public goods pools
            treasury_vault.balance += total_decay_slashed;
            
            // Hardlocked routing formula: 50% to Space Exploration Exploration, 50% to Local Biological Survival 
            treasury_vault.space_exploration_allocation += total_decay_slashed / 2;
            treasury_vault.local_nutrient_printing_allocation += total_decay_slashed / 2;

            return Ok(());
        }
    }
    
    Err("Wallet is within stable equilibrium parameters. No decay tax required.")
}
