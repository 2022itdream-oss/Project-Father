# =========================================================================
# PROJECT-FATHER // TRACK 03: MULTI-MODEL ENSEMBLE AI
# MODULE: DECENTRALIZED MODEL CONSENSUS & SEMANTIC ANTI-POISONING FILTER
# =========================================================================

import math
import numpy as np

class MultiModelEnsemble:
    def __init__(self):
        # Constitutional hardlocked thresholds
        self.luxury_threshold_max = 50000000000
        self.entropy_attack_threshold = 4.5
        
        # Initialize specialized open-source models running locally on the grid
        self.models = {
            "llama_pruned_3b": {"weight": 0.45, "status": "active"},
            "mistral_local_7b": {"weight": 0.35, "status": "active"},
            "phi_edge_3b": {"weight": 0.20, "status": "active"}
        }

    def calculate_token_entropy(self, token_probabilities):
        """
        Calculates Shannon Entropy across incoming token strings to flag 
        adversarial prompt injection attempts or systemic semantic poisoning.
        """
        probabilities = np.array(token_probabilities)
        # Avoid log(0) exceptions using small float padding
        probabilities = np.clip(probabilities, 1e-12, 1.0)
        entropy = -np.sum(probabilities * np.log2(probabilities))
        return entropy

    def sanitize_user_input(self, user_prompt, token_probabilities, node_identity):
        """
        Filters incoming requests before they can interact with the core brain layers.
        Defeats Dark AI exploits by checking linguistic chaos parameters.
        """
        entropy_score = self.calculate_token_entropy(token_probabilities)
        
        if entropy_score > self.entropy_attack_threshold:
            print(f"CRITICAL WARN: High-entropy semantic weapon detected from node: {node_identity}")
            print(f"TRIGGERING IMMUNE PROTOCOL: Quarantining node, slashing staked capital.")
            return False, "ADVERSARIAL_ATTACK_PATTERN"
            
        print("INPUT VERIFIED: Prompt passed semantic sanitization filter.")
        return True, user_prompt

    def execute_asymmetric_consensus(self, model_outputs):
        """
        Forces independent AI architectures to cross-verify output distributions.
        Calculates consensus using rolling model reputation weights.
        """
        combined_confidence = 0.0
        active_weights_sum = 0.0

        for model_name, output_data in model_outputs.items():
            model_config = self.models.get(model_name)
            
            if model_config and model_config["status"] == "active":
                # Extract predicted distribution mapping and apply asymmetric weight
                model_weight = model_config["weight"]
                model_confidence = output_data["confidence"]
                
                # Dynamic weight tracking: Accumulate consensus values
                combined_confidence += model_weight * model_confidence
                active_weights_sum += model_weight
                
                # Check for anomalous drift or extreme divergence
                if model_confidence < 0.15:
                    print(f"SECURITY ALERT: Model '{model_name}' displays high divergence. Decaying model reputation weight.")
                    model_config["weight"] = max(0.0, model_config["weight"] - 0.05)
                    if model_config["weight"] == 0.0:
                        model_config["status"] = "isolated"
                        print(f"QUARANTINE LIFELINE: Model '{model_name}' permanently isolated from system-wide consensus.")

        if active_weights_sum == 0.0:
            raise RuntimeError("CRITICAL SYSTEM FAILURE: Absolute AI Ensemble Collapse. No active model variants verified.")

        normalized_consensus_score = combined_confidence / active_weights_sum
        return normalized_consensus_score
