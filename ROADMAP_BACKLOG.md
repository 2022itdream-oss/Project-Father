# Project-Father: Engineering Issue Task Queue & Backlog

This document maintains the active, open-source task backlog required to transition the Father protocol from a structural design specification into compiling production software layers. Developers can claim these tasks by opening an onboarding application issue.

---

## 🏛️ Track 01: Core Ledger & Cryptography Tasks

*   **Task 01-01: Implement Fixed-Point Math Loops**
    *   *Directory:* `/track-01-core-ledger/anti_hoarding_engine.rs`
    *   *Description:* Replace the existing conceptual floating-point decay function (`.exp()`) with safe, high-precision fixed-point math integers to prevent micro-rounding errors or ledger exploits across node platforms.
    *   *Skills Required:* `Rust`, `Fixed-Point Math`, `Financial Engineering`.

*   **Task 01-02: Zero-Knowledge CPI Attestation Mock**
    *   *Directory:* `/track-01-core-ledger/`
    *   *Description:* Implement a test interface using a Zero-Knowledge framework (like ZoKrates or halo2) to prove a user's local Consumer Price Index coordinates fall within a valid range without leaking their exact GPS geolocation.
    *   *Skills Required:* `Cryptography`, `ZKP`, `Rust`.

---

## 📡 Track 02: Delay-Tolerant Networking (DTN) Tasks

*   **Task 02-01: Network Byte-Order Handshake Serialization**
    *   *Directory:* `/track-02-dtn-mesh/dtn_packet_router.cpp`
    *   *Description:* Implement strict network byte-order serialization (`htons`/`htonl`) handling inside the binary header logic to guarantee smooth cross-platform packet routing between Linux single-board computers and Android devices.
    *   *Skills Required:* `C++`, `Network Engineering`, `Binary Protocols`.

*   **Task 02-02: Reed-Solomon Error Correction Integration**
    *   *Directory:* `/track-02-dtn-mesh/`
    *   *Description:* Integrate an open-source Reed-Solomon parity block library into the payload generator to recover lost data bytes from noisy, jammed shortwave frequencies.
    *   *Skills Required:* `C++`, `Signal Processing`, `SDR`.

---

## 🤖 Track 03: Multi-Model Ensemble AI Tasks

*   **Task 03-01: ONNX/GGUF Local Inference Binding**
    *   *Directory:* `/track-03-ensemble-ai/ai_consensus_engine.py`
    *   *Description:* Write the Python orchestration loops to execute asynchronous local inference calls using tiny, 4-bit quantized model runtimes (like `llama.cpp` or ONNX runtime).
    *   *Skills Required:* `Python`, `Machine Learning Optimization`, `Inference Engines`.

---

## 🧪 Track 04: Hardware Autarky & MVP Integration Tasks

*   **Task 04-01: Local SQLite Data-Sync Scripts**
    *   *Directory:* `/project-father-mvp/mvp_database.py`
    *   *Description:* Implement local data-dump verification scripts to securely read, append, and clear the air-gapped `father_local_vault.db` SQLite outbox cache once a shortwave radio connection is established.
    *   *Skills Required:* `Python`, `SQLite`, `Data Synchronization`.

*   **Task 04-02: OpenCV Brightness Matrix Calibration**
    *   *Directory:* `/project-father-mvp/mvp_vision.py`
    *   *Description:* Implement localized white-balance bounding box targets to test the CLAHE lighting filter against simulated phone pictures taken under heavy room shadows.
    *   *Skills Required:* `Python`, `OpenCV`, `Computer Vision`.

---

> *"A vision without a concrete technical backlog is just an abstract dream. Pick a task and commit code."*
