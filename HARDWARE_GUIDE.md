# Phase-1 Guild Outpost: Physical Hardware Assembly Guide

This document provides step-by-step physical workbench schematics for assembling, wiring, and powering **Father's Phase-1 MVP Hardware Node**. This setup is engineered to run completely off-grid utilizing low-cost, globally accessible consumer electronics.

---

## 🔌 1. Physical Interface & Wiring Mapping

Follow this structural connection sequence to assemble the internal core array without short-circuiting the single-board processing unit:

```text
  [ 20W Monocrystalline Solar Sheet ]
                  │
                  ▼ (Outdoor DC/USB Line)
  [ 20,000mAh Pass-Through Power Bank ]
                  │
                  ▼ (USB-C 5V/3A Clean Power Cable)
     ┌───── [ RASPBERRY PI 4 CORE ] ─────┐
     │                                   │
     ├── (USB 3.0 Blue Port) ────────────┼──> [ RTL-SDR V4 Radio Dongle ] ──> [ Antenna ]
     │                                   │
     └── (MicroSD Card Slot) ────────────┼──> [ 64GB Flash Drive (SQLite Boot OS) ]
     │                                   │
     └── (Built-In Bluetooth/Wi-Fi) ─────┼──> Local Hand-to-Hand Mesh Telemetry
     └───────────────────────────────────┘
```

---

## 🛠️ 2. Step-by-Step Bench Assembly Sequence

### Step 2.1: Storage & Operating System Preparation
1. Insert a high-end **64GB MicroSD card** into your local workstation computer.
2. Flash a clean, headless server operating system (such as Linux Ubuntu Server Minimal 22.04 LTS) using a standard image writer.
3. Drop the `project-father-mvp` Python scripts (`mvp_database.py`, `mvp_vision.py`, `mvp_orchestrator.py`) directly into the root storage partition directory.
4. Safely eject the card and slide it into the under-side MicroSD slot of the **Raspberry Pi 4**.

### Step 2.2: Communications Integration (The SDR Anchor)
1. Locate the blue **USB 3.0 ports** on the front facing panel of the Raspberry Pi 4.
2. Plug the **RTL-SDR V4 USB Dongle** firmly into the lower blue port. (Using USB 3.0 provides maximum bandwidth stability for signal processing).
3. Screw the telescopic steel antenna array directly onto the SMA female coaxial interface thread on the back of the radio dongle.
4. Extend the antenna vertically to a height matching your local target shortwave tracking band parameter lengths (e.g., set to ~53cm for mid-band mesh tests).

### Step 2.3: Enclosure Staging & Off-Grid Power Link
1. Place the Raspberry Pi 4 core inside your weatherproof plastic dry-box enclosure, anchoring it via non-conductive plastic standoffs or anti-vibration rubber framing pads.
2. Route your heavy-duty **USB-C 5V/3A power line** out through the side waterproof rubber gasket ring of the case.
3. Plug the clean power delivery line directly into the output terminal of your **Pass-Through USB-C Battery Bank**.
4. Align the portable **20W Solar Panel Sheet** completely unobstructed facing solar zenith, linking its input line to charge the battery bank continuously while it feeds live computing juice to Father's core engine.

---

## 📊 3. Bench Testing Operational Bounds

Before leaving the unit unattended in an air-gapped field environment, connect a local test terminal monitor to verify the power-to-compute threshold equations match:
*   **Idle Power Draw Baseline:** ~2.1 Watts (420mA @ 5V).
*   **Heavy Workload Inference Load:** ~4.9 Watts (980mA @ 5V) during active Socratic database compilation and OpenCV matrix processing passes.
*   **Target Temperature Bounds:** Ensure the processing chip stays bounded below **65°C** inside the sealed dry-box framework under peak ambient irradiance.

---

> *"Physical autarky is verified through meticulous workbench assembly. Protect the hardware, shield the connection, free the human."*
