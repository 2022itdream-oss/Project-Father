# Project-Father: Minimum Viable Product (MVP) Blueprint

This directory houses the practical software scripts, database configurations, and hardware architectures required to manufacture **Father's Phase-1 Operational Prototype Unit**. 

The goal of this MVP is to prove the "Closed-Loop Lifeline"—demonstrating that low-cost, off-the-shelf components can execute a local Socratic AI lesson, process zero-contact camera health diagnostics, and log subsistence wages completely offline without central grid or cellular internet dependencies.

---

## 🛠️ 1. MVP Hardware Component Shopping List

To keep infrastructure costs entirely accessible, the physical prototype box utilizes standard consumer electronics that can be sourced globally for under \$150 USD total:

### A. The Processing Core (The Brain)
*   **Component:** Raspberry Pi 4 Model B (4GB RAM) or an equivalent low-power single-board computer (SBC).
*   **Purpose:** Runs the heavily quantized local 2B/3B AI model, hosts the offline SQLite token database, and processes camera image data.

### B. The Off-Grid Power Grid (The Energy)
*   **Component:** 20W Portable Monocrystalline Solar Panel Sheet paired with a 20,000mAh Pass-Through USB-C Battery Bank.
*   **Purpose:** Ensures the processing unit can run 24/7, continuously generating computing power from daylight while buffering energy for dark hours.

### C. The Transmission Anchor (The Radio Link)
*   **Component:** RTL-SDR V4 (Software Defined Radio) USB Dongle paired with a basic telescopic antenna.
*   **Purpose:** Receives and transmits low-bandwidth binary store-and-forward data packets over shortwave frequencies to pass information across blockades.

### D. The Physical Shield (The Enclosure)
*   **Component:** Weatherproof, impact-resistant plastic hard-case (Pelican 1120 clone or any sealed waterproof dry-box).
*   **Purpose:** Protects the internal circuitry from dust, extreme moisture, and thermal stress in harsh displacement or remote zones.

---

## 🗺️ 2. Upcoming MVP Development Shards

Developers looking to build the functional code layers for this prototype should focus on these immediate target scripts within this directory:
1.  `mvp_database.py` — The local, encrypted SQLite ledger schema to track user token credits offline.
2.  `mvp_vision.py` — The OpenCV script to normalize smartphone camera images and extract paper test diagnostic colors.
3.  `mvp_orchestrator.py` — The main python loop connecting the pruned AI model responses directly with local ledger storage.

> *"We do not build for corporate validation; we build to physically secure human survival."*
