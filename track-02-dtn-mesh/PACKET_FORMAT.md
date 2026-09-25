# Track 02 Specification: Shortwave Radio Binary Packet Framing

Because shortwave radio (AM/HF) networks suffer from minimal bandwidth, high noise, and extreme propagation delay, Father's data payloads must reject bloated modern web protocols (JSON/HTTPS) in favor of hyper-compressed, raw binary serialization.

## 📦 1. Binary Packet Header Schema (32 Bytes Fixed)
Every Store-and-Forward Delay-Tolerant Networking (DTN) packet transmitted over the airwaves must strictly map to this 32-byte binary structure:

| Offset (Bytes) | Size (Bytes) | Field Name | Description |
| :--- | :--- | :--- | :--- |
| `0x00` | 2 | `MAGIC_NUM` | Protocol identifier (`0xFA74` - FATH) |
| `0x02` | 1 | `VERSION` | Protocol version tracking |
| `0x03` | 1 | `PACKET_TYPE` | `0x01`=Socratic Lesson, `0x02`=Task, `0x03`=ZKP Attestation |
| `0x04` | 4 | `SEQUENCE_ID` | Monotonically increasing packet tracker |
| `0x08` | 12 | `SOURCE_HASH` | Cryptographically blinded sender nullifier |
| `0x14` | 12 | `DEST_HASH` | Cryptographically blinded destination relay hash |

## 🛰️ 2. Payload and Forward Error Correction (FEC)
*   **Payload Layer (Variable, Max 512 Bytes):** Houses heavily compressed tokenized text arrays representing Father's interactive Socratic dialogue queries or workspace execution code.
*   **FEC Layer (Reed-Solomon Error Correction):** To withstand state-sponsored jamming, background electromagnetic static, or ionospheric fading, each shortwave burst appends Reed-Solomon parity blocks, allowing local edge devices to reconstruct missing bytes without requesting a re-transmission.

## 🛠️ Implementation Checklist for Track 02 Devs
*   [ ] Write C/C++ serialization and de-serialization libraries targeting low-power microcontroller deployment.
*   [ ] Build a software-defined radio (SDR) transceiver module utilizing this framing standard.
