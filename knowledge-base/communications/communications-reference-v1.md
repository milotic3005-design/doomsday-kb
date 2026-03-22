# Communications Survival Knowledge Base
## Comprehensive Reference for Emergency & Off-Grid Communications
*Compiled March 2026 — Intended for use without internet access*

---

# TABLE OF CONTENTS

1. [Ham Radio License-Free Emergency Operation (FCC Part 97.403)](#1-ham-radio-license-free-emergency-operation-fcc-part-97403)
2. [APRS — Automatic Packet Reporting System](#2-aprs--automatic-packet-reporting-system)
3. [Mesh Networking — Meshtastic & LoRa Off-Grid Communications](#3-mesh-networking--meshtastic--lora-off-grid-communications)
4. [Crystal Radio Construction (No Power Required)](#4-crystal-radio-construction-no-power-required)
5. [EMP Hardening & Faraday Cage Construction](#5-emp-hardening--faraday-cage-construction)
6. [One-Time Pad Encryption for Field Use](#6-one-time-pad-encryption-for-field-use)
7. [NVIS Antenna Theory & Construction](#7-nvis-antenna-theory--construction)
8. [HF Propagation Prediction Without Internet](#8-hf-propagation-prediction-without-internet)
9. [Baofeng UV-5R Programming for Emergency Use](#9-baofeng-uv-5r-programming-for-emergency-use)
10. [Winlink — Email Over Ham Radio](#10-winlink--email-over-ham-radio)

---

# 1. HAM RADIO LICENSE-FREE EMERGENCY OPERATION (FCC PART 97.403)

## 1A. The Core Rule — Exact Regulatory Text

**47 CFR § 97.403 — Safety of Life and Protection of Property:**

> *"No provision of these rules prevents the use by an amateur station of any means of radiocommunication at its disposal to provide essential communication needs in connection with the immediate safety of human life and immediate protection of property when normal communication systems are not available."*

**47 CFR § 97.405 — Station in Distress:**

> *"No provision of these rules prevents the use by an amateur station in distress of any means at its disposal to attract attention, make known its condition and location, and obtain assistance."*

Additionally: *"No provision of the rules prevents the use by a station, in that exceptional circumstance, of any means of radiocommunications at its disposal to assist a station in distress."*

---

## 1B. What This Means Practically

### When an Unlicensed Person MAY Transmit
The following conditions must ALL be true:
1. There is **immediate** danger to human life or property
2. **Normal communication systems are not available** (cell phones dead, no 911 access)
3. The transmission is **essential** to the emergency
4. Licensed operators are **not available** to take over

This is NOT a blanket license to use ham radio freely. It is a narrow safety valve for genuine life-or-death situations.

### Who May Transmit Under 97.403
- Unlicensed persons operating someone else's licensed amateur station
- Unlicensed persons operating a licensed station when licensed operator directs them
- Anyone in genuine life-threatening emergency when all else has failed

### Priority Hierarchy on All Amateur Frequencies
At all times, on all frequencies:
1. **Emergency communications (highest priority)**
2. Communications for imminent safety
3. Regular licensed amateur operations
4. Training drills and tests (RACES)

All licensed operators must yield to emergency traffic.

---

## 1C. RACES (Radio Amateur Civil Emergency Service)

- Established under Part 97 Subpart E
- Civil defense communications service
- Activated during war, national emergency, or disaster by government authority
- RACES operators must hold amateur license AND be enrolled in local civil defense organization
- RACES stations may operate on any amateur frequency with certain operational restrictions

---

## 1D. Emergency Calling Frequencies

Memorize these before you need them:

| Band | Frequency | Use |
|---|---|---|
| 2 meters (VHF) | **146.520 MHz** | National FM simplex calling frequency |
| 70 cm (UHF) | **446.000 MHz** | National UHF simplex calling |
| 40 meters (HF) | **7.290 MHz** | Emergency/maritime voice |
| 40 meters (HF) | **7.200 MHz** | Emergency voice |
| 20 meters (HF) | **14.300 MHz** | International Maritime Net / emergency |
| 20 meters (HF) | **14.325 MHz** | International Amateur Radio Hurricane Net |
| 80 meters (HF) | **3.985 MHz** | Regional emergency voice |
| 80 meters (HF) | **3.750 MHz** | ARRL Emergency net |
| 160 meters (HF) | **1.900 MHz** | Emergency (limited range) |

### Repeater Access (General U.S.)
Most local 2-meter repeaters use:
- **Offset:** +600 kHz (transmit 600 kHz above listed frequency)
- **Standard CTCSS tone:** 100 Hz (PL tone — required on most repeaters)
- Common busy repeaters cluster around 146.940, 147.195, 147.330 MHz

---

## 1E. Phonetic Alphabet (NATO Standard)

Used to spell callsigns, addresses, and critical information letter by letter:

| Letter | Phonetic | Letter | Phonetic |
|---|---|---|---|
| A | Alpha | N | November |
| B | Bravo | O | Oscar |
| C | Charlie | P | Papa |
| D | Delta | Q | Quebec |
| E | Echo | R | Romeo |
| F | Foxtrot | S | Sierra |
| G | Golf | T | Tango |
| H | Hotel | U | Uniform |
| I | India | V | Victor |
| J | Juliet | W | Whiskey |
| K | Kilo | X | X-ray |
| L | Lima | Y | Yankee |
| M | Mike | Z | Zulu |

Numbers: Zero, One, Two, Tree (3), Four, Fife (5), Six, Seven, Eight, Niner (9)

---

## 1F. Standard Prowords and Emergency Protocol

**Key Procedure Words:**
- **MAYDAY:** International distress call (life-threatening emergency) — say three times
- **MAYDAY RELAY:** Relaying someone else's distress call
- **PAN PAN:** Urgency call (serious situation, not yet life-threatening)
- **BREAK:** Separating message from header
- **OVER:** Transmission complete; response expected
- **OUT:** Transmission complete; no response expected
- **ROGER:** Message received and understood
- **WILCO:** Will comply
- **SAY AGAIN:** Repeat your transmission

**Mayday Call Format:**
```
MAYDAY MAYDAY MAYDAY
This is [callsign or description] [callsign] [callsign]
MAYDAY [callsign]
Position: [location]
Nature of emergency: [brief description]
Number of persons: [count]
Any other pertinent information
OVER
```

**Monitor 146.520 MHz (VHF) for response. Transmit on that frequency and wait.**

---

## 1G. Legal Considerations & Risks

Real legal precedent exists: A California ham was prosecuted for transmitting on a Sheriff's Office administrative channel while calling for help for a mountain biker who fell — even though it was a genuine emergency. The prosecution was for using a non-amateur frequency without authorization, not for the emergency transmission itself.

**Key point:** Part 97.403 specifically covers **amateur radio frequencies**. Transmitting on police, fire, or other licensed services' channels without authorization is a separate regulatory issue even in emergencies.

**FCC enforcement in actual disasters:** Enforcement action against genuinely distressed, good-faith emergency transmissions is extremely rare. The risk of prosecution is real but small; the risk of dying without communication is immediate.

---

# 2. APRS — AUTOMATIC PACKET REPORTING SYSTEM

## 2A. What APRS Is

APRS (Automatic Packet Reporting System), developed by Bob Bruninga (WB4APR), is a real-time digital communications system for amateur radio that transmits position data, weather information, text messages, and other tactical information. It is NOT merely a tracking system — it is a full two-way tactical digital network.

**Capabilities:**
- Real-time GPS position reporting and map display
- Short text messages (person-to-person or broadcast)
- Weather station data (temperature, wind, pressure)
- Object reporting (mark locations of interest on map)
- RF-to-email gateway
- Direction finding bearings
- Telemetry data

---

## 2B. Frequencies

| Region | VHF Frequency | Notes |
|---|---|---|
| North America | **144.390 MHz** | Primary; FM; 1200 baud |
| Europe | **144.800 MHz** | Primary |
| Australia/NZ | **145.175 MHz** | Primary |
| Japan | **144.640 MHz** | Primary |
| ISS (worldwide) | **145.825 MHz** | International Space Station digipeater |

**HF APRS (longer range, lower bandwidth):**
| Band | Frequency | Baud Rate |
|---|---|---|
| 30 meters | 10.147.60 MHz | 300 baud |
| 40 meters | 7.034 MHz | 300 baud |

HF APRS requires a TNC capable of 300-baud operation and SSB radio (not FM).

---

## 2C. Network Architecture

```
Mobile/Portable Station
       |
       | (RF — 144.390 MHz)
       |
  DIGIPEATER ←→ Other Digipeaters (RF relay network)
       |
   IGATE station
       |
       | (Internet)
       |
  APRS-IS backbone
       |
     APRS.fi (web display)
```

**Digipeaters:** Receive APRS packets and retransmit to extend range. Any APRS station can act as digipeater.
**IGates:** Internet-connected stations that bridge RF network to APRS-IS internet backbone.

**In a grid-down scenario with no internet:** The RF network continues to function peer-to-peer. Digipeaters still relay. You just cannot reach the internet display (APRS.fi). All direct RF APRS functions work.

---

## 2D. Path Settings

Path determines how far your packets are relayed through digipeaters:

| Path | Meaning | Use Case |
|---|---|---|
| WIDE1-1,WIDE2-1 | 1 fill-in + 2 wide-area hops | Standard mobile/portable |
| WIDE2-2 | 2 wide-area hops max | Fixed home station |
| WIDE1-1 | 1 fill-in hop only | Dense urban area |
| (none) | No digipeating | Local direct only |
| WIDE2-1 | 1 wide-area hop | Low-traffic areas |

**Rule:** Never use unnecessarily long paths — each hop consumes finite network capacity. In congested areas, shorter paths are better.

---

## 2E. Station Identifiers (SSID)

Your callsign should have an SSID (secondary identifier) to indicate station type:

| SSID | Station Type |
|---|---|
| -0 | Home/primary station |
| -1 | Digi (digipeater) |
| -2 to -5 | Various fixed stations |
| -6 | Satellite operation |
| -7 | Handheld radio |
| -8 | Boat |
| -9 | Mobile (vehicle) |
| -14 | Truck |
| -15 | Grid square |

Example: W1AW-9 = station W1AW operating as a mobile station

---

## 2F. Equipment Options

### All-in-One Radios with Built-in APRS TNC
- **Kenwood TM-D710G / TH-D74A:** Full APRS implementation including IGate capability
- **Yaesu FTM-400XDR / FT3DR:** Built-in APRS
- **Advantage:** No external TNC needed; GPS often integrated

### Separate TNC + Radio
- **Radio:** Any 2-meter FM radio with 9600 baud data capability (many Kenwood, Icom, Yaesu)
- **TNC options:**
  - **Mobilinkd:** Bluetooth TNC; connects to radio audio jacks; interfaces with smartphone
  - **Dire Wolf (software):** Free PC/Raspberry Pi software TNC; uses sound card
  - **TNC-Pi:** Raspberry Pi HAT for a complete digipeater/igate

### Smartphone Apps (With External TNC)
- **APRSdroid (Android):** Full APRS client; works with Bluetooth TNCs or built-in audio TNC
- **PocketPacket (iOS):** Similar capability

---

## 2G. Beacon Interval Recommendations

| Station Type | Suggested Interval | Reason |
|---|---|---|
| Moving vehicle | Every 30–60 seconds | Position changes rapidly |
| Slow moving (on foot) | Every 2–3 minutes | Balance position accuracy vs. channel load |
| Fixed station | Every 10–30 minutes | Infrequent updates sufficient |
| Emergency tracker | Every 30 seconds | Highest priority situation |

**Smart beaconing:** Better systems use speed and direction to auto-adjust interval — beacon more frequently when turning or accelerating; less when stationary or traveling straight.

---

## 2H. APRS Message Format

For person-to-person messages:
```
:CALLSIGN-#: Message text here{001
```
The `{001` is a message number; the recipient's station sends acknowledgment `:YOURCALL:ack001`

To broadcast to all stations (bulletin):
```
:BLN1     :Bulletin text goes here
```

Weather object format:
```
@092345z3748.62N/12228.28W_270/010g015t068r000...
```
(This is auto-generated by weather stations and software)

---

# 3. MESH NETWORKING — MESHTASTIC & LORA OFF-GRID COMMUNICATIONS

## 3A. What Meshtastic Is

Meshtastic is an open-source off-grid mesh networking protocol using LoRa (Long Range) radio technology. It enables encrypted text messaging and location sharing without cellular, WiFi, or internet infrastructure. The mesh is self-healing — messages route around failed nodes automatically.

**Key specifications:**
- Radio technology: LoRa (spread spectrum, chirp modulation)
- Frequencies: 915 MHz (US), 868 MHz (EU), 433 MHz (Asia/EU alternate)
- Range per hop: 2–20+ km depending on terrain and antenna
- Max hops: configurable; default 3
- Encryption: AES-256 per channel
- Power consumption: Very low — weeks on small battery
- License required: None for US 915 MHz ISM band at stock power levels

---

## 3B. Hardware Platforms

| Device | Form Factor | Price (approx.) | Notes |
|---|---|---|---|
| LILYGO T-Beam | Board with GPS | $30–$50 | GPS built-in; good for tracking |
| Heltec LoRa 32 | Small board | $15–$25 | Compact; OLED display |
| RAK WisBlock | Modular | $20–$50 | Rugged; good for outdoor install |
| LILYGO T-Echo | Handheld | $40–$60 | E-ink display; battery included |
| Meshtastic T-Deck | Full keyboard device | $60–$80 | Best standalone UX |

---

## 3C. Frequency Regions and Channels

**You must set your region before use — devices will NOT communicate if regions differ.**

| Region | Frequency Band | Notes |
|---|---|---|
| US | 902–928 MHz (~915 MHz center) | ISM band; no license |
| EU_868 | 869.4–869.65 MHz | Duty cycle limit: 10%/hour |
| EU_433 | 433.05–434.79 MHz | Also duty cycle limited |
| ANZ (Australia/NZ) | 915–928 MHz | Similar to US |
| KR (Korea) | 920–923 MHz | |
| TW (Taiwan) | 920–925 MHz | |
| IN (India) | 865–867 MHz | |

---

## 3D. Modem Presets (Speed vs. Range Trade-off)

| Preset | Range | Speed | Best Use |
|---|---|---|---|
| SHORT_TURBO | Shortest | Fastest | Dense urban; many nodes |
| SHORT_FAST | Short | Fast | Urban |
| SHORT_SLOW | Short | Slower | Urban with obstacles |
| MEDIUM_FAST | Medium | Medium | Suburban |
| MEDIUM_SLOW | Medium | Slower | Suburban/rural |
| **LONG_FAST** | Long | Moderate | **Default; good balance** |
| LONG_MODERATE | Longer | Slower | Rural |
| LONG_SLOW | Longest | Slowest | Maximum range applications |
| VERY_LONG_SLOW | Maximum | Very slow | Extreme range; few messages |

**All nodes on the same mesh must use identical preset (or identical custom LoRa settings).**

---

## 3E. Initial Configuration Steps

### Via Android App
1. Download Meshtastic app (Google Play)
2. Power on node; pair via Bluetooth
3. Tap "SET YOUR REGION" when prompted
4. Navigate: Settings → LoRa → select Region
5. Set device role: CLIENT (standard), CLIENT_MUTE (near a router), ROUTER (for fixed relay nodes)
6. Set callsign/name in Settings → User

### Via Serial Terminal (Without Smartphone)
Connect device via USB; use Python meshtastic CLI:
```
pip install meshtastic
meshtastic --set lora.region US
meshtastic --set-owner "CALLSIGN"
meshtastic --info
```

### Channel Security
1. Default channel "LongFast" with key "AQ==" is PUBLIC — do not share location on default channel
2. Create private channel: generate random PSK (Pre-Shared Key)
3. All members must enter identical channel name AND PSK
4. Share channel settings via QR code or manual entry

**PSK generation (offline):** Roll dice to generate random numbers; convert to base64; enter as custom key. Minimum 128-bit (16 character) key.

---

## 3F. Node Roles

| Role | Behavior | Best Used For |
|---|---|---|
| CLIENT | Send, receive, and repeat messages intelligently | Most users |
| CLIENT_MUTE | Send and receive ONLY — never repeats | Handheld near a router node |
| ROUTER | Prioritizes repeating; minimal local processing | Fixed relay stations on hilltops |
| ROUTER_CLIENT | Router with client capability | Fixed nodes that also need messaging |
| REPEATER | Maximum repeating; no display use | Dedicated infrastructure node |

---

## 3G. Range Expectations

| Environment | Typical Range (LONG_FAST) |
|---|---|
| Open rural (flat) | 10–20+ km |
| Suburban | 3–8 km |
| Dense urban | 0.5–3 km |
| Inside buildings | 0.1–1 km |
| Mountain hilltop to valley | 30–50+ km |

**Improving range:**
- Elevate node (every doubling of height increases range ~40%)
- Use external antenna (stock PCB antennas are poor; SMA quarter-wave vertical costs $5–$15)
- Clear the Fresnel zone (first Fresnel zone should be 60%+ clear of obstructions)

---

## 3H. GoTenna and Other Alternatives

| Product | Freq | Range | Encryption | Cost | Status |
|---|---|---|---|---|---|
| Meshtastic (DIY) | 915 MHz | 2–20 km | AES-256 | $20–$80 | Open source; active |
| goTenna Mesh | 902–928 MHz | ~6 km | AES-256 | Discontinued | No longer manufactured |
| Beartooth | 902–928 MHz | ~2 km | Yes | Discontinued | No longer sold |
| GMRS/FRS radios | 462–467 MHz | 1–5 km | None | $20–$100 | Legal; widely available |
| LoRa direct (custom) | Any ISM band | Varies | Optional | Varies | Requires programming |

**Note:** As of early 2026, Meshtastic with DIY hardware is the most actively maintained option with the largest community.

---

# 4. CRYSTAL RADIO CONSTRUCTION (NO POWER REQUIRED)

## 4A. Theory of Operation

A crystal radio requires no power source — it extracts energy directly from the radio waves it receives. The antenna collects radio energy from AM broadcast stations; the tuned circuit (coil + capacitor) selects one station; the diode detector converts the amplitude-modulated signal to audio; the earphone converts audio current to sound. Energy requirements are so small that the antenna acts as the power supply.

**Frequency range:** AM broadcast band, 530–1700 kHz (medium wave)
**Range:** Local stations within 30–50 miles; distant stations at night under good conditions
**Power required:** Zero

---

## 4B. Components Required

| Component | Specification | Notes |
|---|---|---|
| Coil (inductor) | ~200–300 µH for AM band | Wind your own; see below |
| Variable capacitor | 10–500 pF range | OR use fixed 365 pF + coil taps |
| Germanium diode | 1N34A, OA90, OA91, BAT81, BAT85 | MUST be germanium; silicon won't work |
| Crystal earpiece | Piezoelectric; 8k–100k ohm impedance | Standard telephone earpiece works |
| Antenna wire | 50–100 feet of insulated wire | Longer = stronger signal |
| Ground wire | 10–20 feet | Connect to cold water pipe or earth rod |
| Coil former | Cardboard tube (toilet paper roll, PVC pipe) | Any 1–2" diameter non-metallic tube |
| Magnet wire | 22–26 AWG enameled copper wire | 100–150 feet needed |

**Why Germanium, NOT Silicon:**
- Silicon diodes have 0.6V forward voltage threshold — AM signals are too weak to overcome this
- Germanium diodes have 0.15–0.2V threshold — suitable for weak signals
- Germanium part numbers: 1N34A (most common), OA90, OA91, BAT85
- Test: Put a standard multimeter on diode setting; germanium diodes measure ~150–250 mV

---

## 4C. Coil Winding Instructions

### Basic Coil (Toilet Roll Former)
**Materials:** Cardboard tube (approximately 1.5" diameter × 4" long), 150 feet of 22 AWG or 26 AWG enameled copper wire

**Procedure:**
1. Make two small holes at one end of tube, ½ inch apart; thread 6 inches of wire through and tie off as anchor
2. Wind wire TIGHTLY and EVENLY around tube, keeping each turn pushed against the previous one — NO GAPS
3. Wind 80 turns total for basic coil
4. At turns 10, 20, 30, 40, 50, 60, 70: form a small loop ("tap") by twisting wire back on itself — this creates access points for tuning without a variable capacitor
5. After 80 turns, make final anchor holes and tie off with 6-inch lead
6. Total: you have a coil with taps every 10 turns

**Sanding the leads:** Enameled wire has insulating lacquer — sand the ends with fine sandpaper until bare copper shows before making any connections.

### High-Performance Coil (Litz Wire)
- Litz wire (stranded, individually-insulated conductors) reduces high-frequency resistance
- Significantly improves selectivity and sensitivity
- Wind 60–80 turns on 2" ferrite rod (from AM antenna bar) for best AM reception
- Ferrite rod concentrates magnetic field — use for portable directional operation

---

## 4D. Complete Schematic Description

```
ANTENNA
  |
  |----[COIL]----+-----[EARPIECE]----+
  |              |                   |
  |         [VARIABLE CAP]      [DIODE]--+
  |              |                   |   |
GROUND-----------+-------------------+---+
```

**Connection details:**
1. One end of coil → antenna wire
2. Other end of coil → ground
3. Variable capacitor connected in PARALLEL with coil (one terminal to each end of coil)
4. Diode connected across the coil+capacitor (one end to antenna-side of coil, other end to ground)
5. Earpiece connected in PARALLEL with the diode

**Component orientation:**
- Diode has a polarity — the banded end (cathode) connects to the ground side
- If no signal, try reversing the diode
- Capacitor and earpiece have no polarity in this circuit

---

## 4E. Antenna and Ground System

### Antenna
The antenna is the most critical factor in reception quality:
- **Minimum effective:** 30 feet of wire
- **Good:** 50–100 feet of wire
- **Best:** 100+ feet elevated as high as possible
- **Orientation:** Wire strung horizontally catches more AM broadcast signal
- **Type:** Any insulated wire; thicker is better (lower resistance)
- **Elevation:** Every additional foot of height helps — attic, rooftop, or tree-suspended wire ideal

### Ground Connection
A solid earth ground is essential — without it, the circuit has no reference point:
- **Best:** Metal cold water pipe (confirmed earth-grounded)
- **Good:** 6-foot copper rod driven into moist earth
- **Emergency:** Tin can buried in damp soil with wire attached
- **Do not use:** Gas pipes, neutral electrical wires (dangerous)

**Wet soil substantially improves ground quality.** In dry conditions, pour water around ground rod.

---

## 4F. Tuning and Reception

### With Variable Capacitor
1. Slowly rotate the capacitor from maximum to minimum capacitance
2. At each strong station, you'll hear an increase in signal
3. Station frequency approximately = 1/(2π√(LC)) — for L=230µH, C=277pF → 630 kHz

### With Coil Taps (No Variable Capacitor)
1. Connect earpiece/diode to different tap points on the coil
2. Fewer turns connected = higher frequency; more turns = lower frequency
3. Experiment to find your local AM stations

### Improving Weak Reception
- Extend antenna length first (biggest single improvement)
- Try different ground connections
- Rotate the coil physically (for ferrite rod coils) to find direction of best reception
- Night-time reception dramatically better — AM stations skip much farther after dark
- Add a second winding on same coil to create an "impedance matching transformer" for high-impedance earphone

---

## 4G. Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| No sound at all | Broken connection; wrong diode type | Check all connections; verify germanium diode |
| Very faint sound | Poor antenna or ground | Extend antenna; improve ground |
| Multiple stations at once | Coil inductance too low; too few turns | Add more turns; use ferrite rod |
| Can't separate stations | Tuning too broad | Add tuning capacitor; use Litz wire coil |
| One station only | Antenna very long; strong local station | Add series resistor (1k ohm) to reduce overloading |

---

# 5. EMP HARDENING & FARADAY CAGE CONSTRUCTION

## 5A. Understanding EMP Threats

An electromagnetic pulse (EMP) can originate from:
1. **Nuclear high-altitude burst (HEMP):** Most severe; affects all electronics over thousands of square miles; three phases: E1 (very fast, destroys semiconductors), E2 (similar to lightning), E3 (long duration, damages transformers)
2. **Non-nuclear EMP device (e-bomb):** Localized; affects specific target area
3. **Solar storm / geomagnetic disturbance:** Primarily affects long conductors and power grid; slower than nuclear EMP

**What gets damaged:**
- Transistors, integrated circuits, microprocessors — all vulnerable
- Long conductors (power lines, antennas) act as collection antennas and deliver energy to connected electronics
- Mechanical/vacuum tube devices largely immune

**What survives better:**
- Older mechanical devices (no electronics)
- Pre-1980 vehicles (minimal electronics)
- Vacuum tube radio equipment
- Simple crystal radios (no semiconductors at all)

---

## 5B. Faraday Cage Theory

A Faraday cage is a conductive enclosure that blocks external electromagnetic fields. When electromagnetic energy strikes a conductor, the free electrons redistribute to create an opposing field, canceling the external field inside.

**Three mechanisms:**
1. Reflection of incident electromagnetic energy
2. Absorption within the conductor material
3. Re-radiation of energy in opposing phase

**Key requirements:**
- The enclosure must be **continuous conductive material** — no gaps
- The enclosure must completely surround the protected item
- Protected item must NOT touch the conductive enclosure (insulation required)
- For the E1 phase of nuclear EMP, shielding effectiveness of 60–80 dB minimum is needed

---

## 5C. DIY Faraday Cage Methods

### Method 1 — Galvanized Metal Trash Can (Best DIY Option)

**Materials:**
- Steel galvanized trash can with tight-fitting lid (30–50 gallon)
- Cardboard or foam for interior lining
- Aluminum HVAC foil tape (conductive adhesive)
- Items to protect

**Construction:**
1. Line interior completely with cardboard (~1/4 inch thick) — this is the insulating layer; items inside must not touch metal
2. Line lid interior with cardboard as well
3. Place items to protect inside — wrap each item individually in plastic bag for additional moisture protection
4. Place lid on can
5. Run aluminum foil tape completely around the seam where lid meets can — no gaps
6. Optional: apply second layer of tape 90° to first layer
7. Test: Place an FM radio inside, seal, verify radio loses signal

**Effectiveness:** Good protection against moderate to severe EMP for most electronics

### Method 2 — Nested Ammo Can (High Performance)

**Materials:**
- Military surplus steel ammo can (30-caliber or 50-caliber)
- Conductive gasket material (copper mesh tape, conductive foam)
- Fine-grit sandpaper

**Construction:**
1. Remove the rubber gasket from the lid — it is non-conductive and breaks the shielding
2. Sand paint off all mating surfaces (where lid meets body) — bare metal-to-metal contact required
3. Install conductive gasket: cut copper mesh tape to length; press into groove where rubber gasket was; lid should compress it on closing
4. Test continuity with multimeter: probes on lid and body — should read near 0 ohms
5. Line interior with foam or cardboard (5mm minimum thickness)
6. Place items inside; close and latch

**Effectiveness:** Military specification equivalent when correctly built

### Method 3 — Aluminum Foil Wrapping (Portable)

**Construction:**
1. Wrap item in plastic bag (electrical insulation)
2. Wrap with 3 layers of heavy-duty aluminum foil
3. Between each foil layer, add a layer of paper, plastic, or cardboard (prevents layers from shorting to each other and the inner item)
4. Final layer: additional plastic bag to protect foil
5. Each layer independently wraps completely — no seam alignment between layers

**Effectiveness:** Moderate; suitable for portable use or backup protection of small items

---

## 5D. Items to Prioritize for EMP Protection

**Tier 1 (Critical — Protect First):**
- Handheld radios (Baofeng, walkie-talkies)
- Solar charge controllers
- Inverters
- Battery management systems
- Communication equipment
- Flashlights with LED/electronics (older incandescent may survive)

**Tier 2 (Important):**
- Laptop computers with useful offline data
- Spare ignition modules for vehicles
- Medical equipment (insulin pumps, glucose meters)
- Portable power stations

**Tier 3 (Helpful):**
- Backup hard drives with manuals/data
- Calculator
- Seed catalogs, reference books (paper is immune)

**Not worth protecting (either immune or replaceable mechanically):**
- Old mechanical clocks and watches
- Non-electronic hand tools
- Paper books, maps, documents — store these outside cage

---

## 5E. Testing Your Protection

**Simple test:**
1. Place active FM radio inside sealed cage
2. Try to tune to a strong local station
3. If you receive any signal, the cage has a gap

**Better test:**
1. Place cell phone inside sealed cage
2. Call the phone from another device
3. If phone rings, cage fails (but note: cell signals are much weaker than EMP — passing this test does not guarantee EMP protection)

**Important caveat:** Consumer electronics signals are 50–100 dB weaker than an EMP. A cage that blocks your phone may not block EMP. For critical items, use nested protection (multiple layers/cages).

---

## 5F. Grid-Connected Equipment Warning

Electronics plugged into the power grid at the time of an EMP event may be damaged even inside a Faraday cage — because the power lines act as antennas delivering EMP energy directly to the device via its power cord.

**Rule:** Items inside Faraday cage protection must be UNPLUGGED from the grid, antennas, and all external connections. The cage only protects from external field exposure, not conducted energy.

---

## 5G. Grounding Debate

Whether to ground a Faraday cage is debated among experts:
- **Pro-grounding:** Provides a path for induced charge to dissipate safely
- **Anti-grounding:** Grounding wire itself can act as an antenna, conducting EMP into the cage

**Pragmatic answer for field use:** For portable protection (wrapped items, ammo cans), don't ground. For permanent installed room-sized shields, professional engineering guidance recommends grounding to a dedicated ground rod with very short, direct connection.

---

# 6. ONE-TIME PAD ENCRYPTION FOR FIELD USE

## 6A. What Makes the OTP Unbreakable

The One-Time Pad is the ONLY cryptographic system mathematically proven to be unbreakable (information-theoretically secure). It was used by intelligence services throughout the Cold War and remains valid today.

**Four absolute requirements — ALL must be met:**
1. Key must be **at least as long** as the message
2. Key must be **truly random** (not pseudo-random, not computer-generated without hardware randomness)
3. Key must **never be reused** — not in part, not in whole
4. Key must be **kept completely secret** by both parties

If any single requirement is violated, the system degrades or completely fails.

---

## 6B. How Encryption and Decryption Work

### For Letter-Based Messages (Field Use)

**Convert letters to numbers:**
```
A=0, B=1, C=2, D=3, E=4, F=5, G=6, H=7, I=8, J=9, K=10, L=11, M=12,
N=13, O=14, P=15, Q=16, R=17, S=18, T=19, U=20, V=21, W=22, X=23, Y=24, Z=25
```

**Encryption formula:** C = (P + K) mod 26

Where:
- C = ciphertext letter number
- P = plaintext letter number
- K = key letter number
- mod 26 = divide by 26 and take the remainder

**Decryption formula:** P = (C - K + 26) mod 26

### Worked Example

Plaintext: ATTACK
Key:       LEMON X (use only 6 characters of key)

```
Letter:   A    T    T    A    C    K
P value:  0   19   19    0    2   10
K value: 11    4   12   14   13   23
P+K:     11   23   31   14   15   33
mod 26:  11   23    5   14   15    7
Cipher:   L    X    F    O    P    H
```

Ciphertext: LXFOPH

**Decryption:**
```
Cipher:   L    X    F    O    P    H
C value: 11   23    5   14   15    7
K value: 11    4   12   14   13   23
C-K:      0   19   -7    0    2  -16
+26:      0   19   19    0    2   10
mod 26:   0   19   19    0    2   10
Plain:    A    T    T    A    C    K
```

---

## 6C. Generating Keys in the Field

### Method 1 — Coin Flipping (Binary)
1. Assign Heads=0, Tails=1
2. Flip coin 8 times; record binary byte (e.g., 10110100 = 180)
3. Convert 180 to letter: 180 mod 26 = 24 = Y
4. Repeat for each letter of key needed
5. This generates true randomness from quantum mechanical processes (air turbulence determining coin path)

### Method 2 — Dice Rolling (Best Field Method)
1. Use one 6-sided die; or preferably one 26-sided die (available at game stores)
2. **For standard d6:** Roll die and record value; roll again; combine as base-6 number; convert to letter
   - Two d6 rolls give values 0–35; reject 26–35 (re-roll); remaining 0–25 map to A–Z
   - This method ensures uniform distribution
3. **For d26 (or d30):** Roll directly; values 1–26 = A–Z; reject 27–30

**Key generation rate with dice:** Approximately 10 letters per minute; generate pads in advance

### Method 3 — Radioactive Decay Counter
- Geiger counter click intervals are genuinely random (quantum mechanical)
- Record time between clicks in milliseconds; last digit of each interval = random digit
- Convert stream of random digits to letters using modular arithmetic

### Method 4 — Playing Card Deck
1. Shuffle deck thoroughly (7+ riffle shuffles for statistical randomness)
2. Draw cards one at a time; record value (Ace=0 through King=12 = 13 values per suit)
3. Combined suit + value gives more than 26 possibilities; apply modular reduction to A–Z
4. Return card to deck or keep pulled — do not duplicate key values

### NEVER Use These Methods
- Pseudorandom number generators (any computer algorithm without hardware entropy)
- Patterns, memorable phrases, or sequences
- Predictable distributions (rolling a single die 1–6 = only 6 values; insufficient without combination)
- Anything from a website or app without understanding its entropy source

---

## 6D. Practical Field Key Distribution

**The fundamental problem:** Both parties need identical key pads BEFORE they separate. Keys cannot be securely transmitted over insecure channels.

**Distribution methods (ranked by security):**
1. **In-person physical exchange:** Most secure; exchange pads in person before separation
2. **Trusted courier:** Pad physically delivered by person known to both parties
3. **Prearranged dead drop:** Physical location known to both parties; pad left for pickup
4. **Split key delivery:** Half of key delivered by one trusted route; other half by separate route; both halves needed for reconstruction

**Key material format options:**
- Small notepad with letters printed in groups of 5
- Laminated card (waterproof)
- Microfilm (for very small key size)
- Memorized key (very short messages only — human memory is unreliable for long random sequences)

---

## 6E. Operational Security (OPSEC) for OTP Use

### Destruction After Use
- Each key section must be destroyed immediately after use
- Preferred methods: burn completely; shred + dissolve in water; eat the paper (this was done historically)
- Historical note: OTP sheets were printed on nitrocellulose (flash paper) — ignites completely with no residue
- If using digital key: securely erase file with multi-pass overwrite; then physically destroy storage medium

### Key Numbering System
Maintain discipline about which key page/section was used:
```
[KEY ID][PAGE NUMBER][STARTING POSITION]
Example: PAD-ALPHA-07-014
```
Both parties must record which sections have been used and destroyed.

### Never Reuse Under Any Circumstances
If the same key is used to encrypt two messages, an adversary can XOR the two ciphertexts together. The result equals the XOR of the two plaintexts — and natural language patterns in that result allow both plaintexts to be recovered. This is called the "two-time pad" attack and completely defeats OTP security.

---

## 6F. Message Formatting for Field Use

### Standard Format
1. Key identifier (tells receiver which pad to use)
2. Message length (tells receiver when message ends)
3. Groups of 5 ciphertext characters (standard military format)
4. Authentication code (if pre-arranged)

**Example message structure:**
```
FROM: BRAVO-6
TO: ALPHA-3
KEY: PAD-7, POS 040
MSG LEN: 030 CHARS

LXFOP HZQRS TUVWX YZABC DEFGH IJKLM
```

### Authentication Without Compromising Key
- Pre-arrange a specific plaintext word or phrase that appears somewhere in every legitimate message
- If this word is absent after decryption, message is likely not from the claimed source
- Do not make the position predictable — vary its location

---

# 7. NVIS ANTENNA THEORY & CONSTRUCTION

## 7A. What NVIS Does

Near Vertical Incidence Skywave (NVIS) enables regional HF radio coverage — 0 to 650 km (0–400 miles) — without any repeaters or infrastructure. It fills the gap between:
- **Ground wave** (effective out to ~80 km / 50 miles)
- **Standard skywave** (effective from ~500 km to thousands of km)

The "skip zone" between these ranges has no coverage with standard antennas — NVIS eliminates this gap.

**How it works:** Radio waves are transmitted nearly straight up (>75° elevation angle) → ionosphere refracts them back downward → they land in a circular pattern centered on the transmitter → typical coverage circle: 300–650 km radius

---

## 7B. Optimal Frequencies for NVIS

NVIS works ONLY when the transmission frequency is **below the ionospheric critical frequency (foF2)**. If the frequency is too high, signals punch through the ionosphere and are lost in space.

### Frequency Bands Used for NVIS

| Band | Frequency Range | Best Conditions |
|---|---|---|
| 160 meters | 1.8–2.0 MHz | Night only; very limited daytime use |
| 80 meters | 3.5–4.0 MHz | Best nighttime NVIS band; good daytime in solar minimum |
| **60 meters** | **5.330–5.405 MHz** | **Excellent day/night NVIS; channelized** |
| **40 meters** | **7.0–7.3 MHz** | **Best daytime NVIS; primary emergency band** |
| 30 meters | 10.1–10.15 MHz | Upper limit of NVIS; works in high solar activity |

**Practical rule:**
- **Daytime:** Use 40 meters (7 MHz) as primary NVIS frequency
- **Nighttime:** Use 80 meters (3.5 MHz) or 60 meters (5 MHz)
- **High solar activity (sunspot maximum):** Can use up to 10 MHz for NVIS
- **Low solar activity (sunspot minimum):** Critical frequency may drop to 5–7 MHz; 40m NVIS may be marginal during day

### 60-Meter Band Channels (US, Channelized)
These are shared with federal government users — use only with proper license and in emergency:
| Channel | Frequency (kHz) | Notes |
|---|---|---|
| Ch 1 | 5330.5 | USB voice, 60W max |
| Ch 2 | 5346.5 | USB voice |
| Ch 3 | 5357.0 | USB voice |
| Ch 4 | 5371.5 | USB voice |
| Ch 5 | 5403.5 | USB voice |

---

## 7C. Antenna Height: The Critical Variable

For NVIS, antenna height determines radiation angle. You want radiation at angles ABOVE 75° from horizontal (nearly straight up).

**Height vs. Radiation Angle (horizontal dipole):**
| Height (fraction of wavelength) | Main Radiation Angle | NVIS Effectiveness |
|---|---|---|
| 0.05λ | ~87° | Excellent NVIS |
| 0.10λ | ~83° | Very good NVIS |
| **0.15λ** | **~80°** | **Optimal per military sources** |
| 0.25λ | ~75° | Good NVIS; upper practical limit |
| 0.50λ | ~60° | Mixed NVIS and skywave |
| 1.0λ | ~30° | Standard DX angle; poor NVIS |

**For 40 meters (7.1 MHz):**
- 1 wavelength = 42 meters (138 feet)
- 0.10λ = 4.2 meters (13.8 feet) above ground — good NVIS height
- 0.15λ = 6.3 meters (20.7 feet) — optimal

**For 80 meters (3.5 MHz):**
- 1 wavelength = 85 meters (280 feet)
- 0.10λ = 8.5 meters (28 feet) — good height
- 0.15λ = 12.8 meters (42 feet) — optimal

**Key point:** Counterintuitively, a LOW antenna is BETTER for NVIS than a high one.

---

## 7D. NVIS Antenna Types

### Type 1: Simple Horizontal Dipole (Recommended — Simplest)

**Construction for 40-meter NVIS:**
1. Cut two equal lengths of wire: each **20.25 feet** (total: 40.5 feet for 7.1 MHz)
   - Formula: Each leg = **468 / (freq in MHz) / 2** feet
   - For 7.1 MHz: 468/7.1/2 = 32.9 feet per leg? — No. Total = 468/7.1 = 65.9 feet; per leg = 32.95 feet
   - Correction: 468/7.1 = 65.9 feet total; each leg = 32.9 feet
2. Connect both legs at center to coax feed (RG-58 or RG-8)
3. Hang at 10–20 feet above ground (not higher) — suspend from two trees or poles
4. Connect coax shield to earth ground at antenna feedpoint (or use a 1:1 choke balun)
5. Connect coax to radio

**80-meter NVIS dipole:**
- Each leg = 468/3.75/2 = 62.4 feet (or 468/3.75 = 124.8 feet total)
- Hang at 20–30 feet

### Type 2: Inverted-V Dipole

Same as horizontal dipole but center point elevated (peak of inverted V) and ends hang down at angles:
- Center at 15–25 feet
- End angle: 120° total (60° each side from center) — ends hang to ground at 120° included angle
- This is easier to support with a single center mast
- Radiation pattern slightly lower angle than flat dipole; still acceptable for NVIS

### Type 3: Horizontal Dipole with Reflector (Best Performance)

Adds a ground-plane reflector below the dipole for 3–6 dB gain improvement:

**Construction:**
1. Build horizontal dipole per Type 1 instructions
2. Cut a second wire 5% LONGER than the dipole total: 69.2 feet (for 7.1 MHz)
3. Lay this wire on the ground directly below the dipole — exact alignment
4. Connect reflector wire ends to nothing (it is a passive parasitic element)
5. The reflector wire redirects radiation back upward, increasing gain toward zenith

**Result:** The 2-element system (dipole + reflector) provides 3–6 dB more signal than dipole alone — equivalent to quadrupling your transmitter power output

---

## 7E. Feed Line and Connections

- **Coax:** RG-58 (small, lightweight) or RG-8X (lower loss) for runs under 100 feet; RG-8 for longer runs
- **Balun:** Use a 1:1 current balun (choke) at the feedpoint — prevents feed line radiation which distorts pattern
  - DIY choke balun: Wind 10 turns of coax around a 4-inch ferrite toroid (type 61 or 43)
- **Impedance:** Horizontal dipole at NVIS heights presents impedance lower than 75 ohms (typically 30–60 ohms) — matching is imperfect with 50-ohm coax but acceptable; SWR typically 1.5:1 or less
- **Antenna tuner:** An antenna tuner (ATU) corrects any impedance mismatch; most HF radios include one

---

## 7F. Practical NVIS Operating Tips

1. **Use SSB (single sideband) voice:** LSB below 10 MHz (standard), USB above
2. **Power:** 100 watts is excellent for NVIS; even 25–50 watts achieves strong regional coverage
3. **Net frequency:** Establish a prearranged frequency for regular check-ins
4. **Skip zone confusion:** Someone 30 miles away may hear you perfectly; someone 100 miles away may not — this is normal NVIS behavior
5. **Night vs. day:** On 80 meters, your coverage area expands dramatically at night; stations 500+ miles can hear you on a frequency that barely covers 100 miles by day

---

# 8. HF PROPAGATION PREDICTION WITHOUT INTERNET

## 8A. The Ionosphere Layers

Understanding these layers allows prediction without tools:

| Layer | Altitude | Exists | Function |
|---|---|---|---|
| D layer | 60–90 km | Day only | Absorbs HF signals (increases LUF); eliminates at night |
| E layer | 90–120 km | Day (stronger) | Can reflect signals at lower HF frequencies |
| F1 layer | 150–220 km | Day only | Merges with F2 at night |
| F2 layer | 220–800 km | Day and night | Primary long-distance HF reflection layer |

**The critical insight:** D-layer disappears at night. This eliminates high absorption of lower HF frequencies (160m, 80m) at night, dramatically increasing their range.

---

## 8B. Key Propagation Parameters

### Maximum Usable Frequency (MUF)
The highest frequency that will be reflected by the ionosphere for a given path at a given time.

**Rule of thumb:** MUF = Critical frequency (foF2) × 3 to 5 (depending on path geometry)

If you cannot measure foF2 directly, estimate it from conditions:
- Solar flux (SFI) > 150 (active sun): foF2 during day may reach 10–14 MHz; MUF for 1000-km path may be 30–50 MHz
- Solar flux 70–100 (quiet sun): foF2 may reach 5–8 MHz during day; MUF for 1000-km path = 15–40 MHz
- Nighttime: foF2 drops to 2–4 MHz; MUF for 1000-km path = 6–20 MHz

### Lowest Usable Frequency (LUF)
The minimum frequency that penetrates the D-layer absorption enough for usable communication.
- Daytime LUF: typically 5–10 MHz
- Nighttime LUF: drops to 1–3 MHz (D-layer gone)
- Can be improved by using more power or better antennas

### Optimum Working Frequency (OWF / FOT)
**OWF = MUF × 0.85**
This gives 90% reliability (MUF only gives 50% reliability). Always operate near OWF for most reliable contacts.

---

## 8C. Predicting Conditions Without Internet

### Method 1: Monitor Beacon Signals
Standard beacon networks exist on known frequencies. If you can HEAR a beacon, propagation to that location is open:

**ARRL/IARU Propagation Beacons:**
| Frequency | Notes |
|---|---|
| 14.100 MHz | 20-meter beacon network (global) |
| 18.110 MHz | 17-meter beacons |
| 21.150 MHz | 15-meter beacons |
| 24.930 MHz | 12-meter beacons |
| 28.200 MHz | 10-meter beacons |

Listen on 14.100 MHz: If you hear IDs (e.g., 4U1UN, W6WX, KH6RS, ZL6B, VK6RBP, etc.), the 20-meter band is open between you and those locations.

### Method 2: Time-of-Day Rules

| Time | Expected Conditions |
|---|---|
| Pre-dawn | Long-path openings may exist; 80m/40m excellent |
| Sunrise (your location) | 40m DX fades; 20m begins to open |
| Mid-morning | 20m and 17m opening; 10m/15m possible in high solar activity |
| Midday | High bands (10m-20m) optimal; 40m/80m poor |
| Afternoon | High bands still good; 40m improving |
| Sunset (your location) | 40m excellent; 20m fading; 80m improving |
| Night | 80m/160m best; 40m remains open; high bands closed |

### Method 3: 11-Year Sunspot Cycle
Estimate where you are in the solar cycle:
- Count sunspots visible on solar image (or recall from last known data)
- Solar maximum: all HF bands from 10–40 meters viable; NVIS may work up to 30 MHz
- Solar minimum: reliable bands narrow to 40–80m; high bands (10m, 15m) essentially dead

**Last solar maximum (Solar Cycle 25):** Peaked approximately 2024–2025. In 2026, we are likely in declining phase — conditions remain generally good on 20m and lower.

### Method 4: The Gray Line
The terminator (day/night boundary on Earth's surface) creates exceptional propagation. Stations on both sides of the gray line get simultaneous signal boosts:
- Look up gray line crossing time for your location and target location
- Gray line times correspond to local sunrise and sunset
- Best propagation often occurs 30 minutes before/after sunrise or sunset

### Method 5: Geomagnetic Assessment (Field Observable)
Aurora visible at your location = geomagnetic storm = poor HF propagation. Aurora indicates high K-index (>4), which can absorb or scatter HF signals, particularly above about 50° latitude.
- Clear night, no aurora → likely K<2 → good conditions
- Active aurora → K>4 → expect poor to no propagation on high bands

---

## 8D. Band-by-Band Quick Reference

| Band | Freq Range | Typical Distance | Best Time | Notes |
|---|---|---|---|---|
| 160m | 1.8–2.0 MHz | 0–500 km | Night | Requires very long antenna; much noise |
| 80m | 3.5–4.0 MHz | 0–3,000 km | Night/NVIS | Best regional night band; noisy from lightning |
| 60m | 5.3–5.4 MHz | 0–2,000 km | Day & night | Limited channels; excellent NVIS |
| 40m | 7.0–7.3 MHz | 0–5,000 km | Day NVIS; night DX | Most versatile emergency band |
| 30m | 10.1–10.15 MHz | 2,000–8,000 km | Daytime | CW/digital only (no voice); narrow band |
| 20m | 14.0–14.35 MHz | 3,000–15,000 km | Daytime | Most reliable global DX band |
| 17m | 18.068–18.168 MHz | 5,000+ km | Daytime | Less crowded than 20m |
| 15m | 21.0–21.45 MHz | Global | Daytime, high SFI | Closes at solar minimum |
| 10m | 28.0–29.7 MHz | Global | Solar maximum only | Exceptional when open |

---

## 8E. Memorize These Key Numbers

- **Critical frequency (foF2) maximum (solar max):** ~12 MHz tropics, ~9 MHz mid-latitudes
- **Critical frequency minimum (solar min):** ~2–4 MHz nighttime, ~5–7 MHz daytime
- **MUF = foF2 × 3–5** (multiply by ~5 for 1,000-km paths, ~3.5 for 500-km paths)
- **OWF = MUF × 0.85** (best operating frequency for 90% reliability)
- **D-layer absorption cutoff:** Disappears within 30 minutes after local sunset
- **28-day solar rotation:** Sunspot conditions repeat roughly every 28 days
- **Solar cycle:** ~11 years peak-to-peak

---

# 9. BAOFENG UV-5R PROGRAMMING FOR EMERGENCY USE

## 9A. Radio Specifications

| Specification | Value |
|---|---|
| VHF Range | 136–174 MHz (transmit and receive) |
| UHF Range | 400–520 MHz (transmit and receive) |
| Power Output | 4–5W High / 1W Low |
| Battery | 7.4V Li-ion, 1800 mAh typical |
| Channel Memory | 128 channels (0–127) |
| CTCSS/DCS | Yes (PL tones) |
| FM Radio | 65–108 MHz receive |
| Display | Dual-display; both bands visible simultaneously |
| Weight | ~250g with battery |

---

## 9B. Key Frequencies to Pre-Program

### Emergency and Priority Frequencies

| Ch | Frequency | Use | Tone |
|---|---|---|---|
| 1 | 146.520 MHz | 2m national simplex calling | None |
| 2 | 446.000 MHz | UHF national simplex | None |
| 3 | 155.340 MHz | **National Fire/Emergency Interop** | None |
| 4 | 155.475 MHz | **Law enforcement interop** | None |
| 5 | 156.800 MHz | **Marine Channel 16 — International distress** | None |
| 6 | 162.400 MHz | NOAA Weather WX1 | Receive only |
| 7 | 162.425 MHz | NOAA Weather WX2 | Receive only |
| 8 | 162.450 MHz | NOAA Weather WX3 | Receive only |
| 9 | 162.475 MHz | NOAA Weather WX4 | Receive only |
| 10 | 162.500 MHz | NOAA Weather WX5 | Receive only |
| 11 | 162.525 MHz | NOAA Weather WX6 | Receive only |
| 12 | 162.550 MHz | NOAA Weather WX7 | Receive only |
| 13 | 151.940 MHz | **MURS Ch. 4 (no license needed)** | None |
| 14 | 151.880 MHz | **MURS Ch. 3** | None |
| 15 | 462.5625 MHz | **GMRS/FRS Ch. 1** | None |
| 16 | 462.5875 MHz | **GMRS/FRS Ch. 2** | None |
| 17 | 462.6125 MHz | **GMRS/FRS Ch. 3** | None |
| 18 | 462.6375 MHz | **GMRS/FRS Ch. 4** | None |
| 19 | 462.6625 MHz | **GMRS/FRS Ch. 5** | None |
| 20 | 462.6875 MHz | **GMRS/FRS Ch. 6** | None |
| 21 | 462.7125 MHz | **GMRS/FRS Ch. 7** | None |

**Note on MURS and FRS:** These require NO amateur license to operate. FRS is limited to low power (0.5W on some channels, 2W on others). The UV-5R exceeds FRS power limits — use only in genuine emergencies if unlicensed.

### Common CTCSS (PL) Tones for Repeaters
Most common tones used by public/emergency repeaters nationally:
- 100.0 Hz (most common default)
- 103.5 Hz
- 107.2 Hz
- 110.9 Hz
- 114.8 Hz
- 118.8 Hz
- 123.0 Hz
- 131.8 Hz

---

## 9C. Manual Keypad Programming (Without Computer)

**Step-by-step for each channel:**

1. Press **[VFO/MR]** to enter VFO (frequency) mode — confirm top display is active (A side)
2. Press **[A/B]** to select the **A side (top display)** — programming only works on A side
3. Press **[BAND]** to select frequency band: 136 MHz for VHF, 470 MHz for UHF
4. Disable dual watch (TDR): **[MENU]** → **7** → **[MENU]** → use arrows to select **OFF** → **[MENU]** → **[EXIT]**
5. Enter desired frequency using keypad (example: 146.520 = press **1 4 6 5 2 0**)
6. If frequency requires a CTCSS tone:
   - **[MENU]** → **13** (T-CT) → **[MENU]** → use arrows to find your tone → **[MENU]** → **[EXIT]**
7. For repeater offset: **[MENU]** → **26** (SFT-D) → **[MENU]** → select +/- offset direction → **[MENU]** → **[EXIT]**
   - Then: **[MENU]** → **27** (OFFSET) → **[MENU]** → enter offset (600 for 600 kHz) → **[MENU]** → **[EXIT]**
8. To save to channel: **[MENU]** → **27** (MEM-CH) on some firmware versions OR hold **[MENU]** 2 seconds
   - Actually: press **[MENU]** → type **27** → **[MENU]** → enter channel number (e.g., 001) → **[MENU]** → **[EXIT]**
9. Display should now show CH number when you press **[VFO/MR]** to return to memory mode

**Common UV-5R Menu Numbers:**
| Menu # | Function |
|---|---|
| 1 | STEP (frequency step) |
| 5 | WN (wide/narrow bandwidth) |
| 6 | ABR (backlight) |
| 7 | TDR (dual watch) — set OFF when programming |
| 10 | DTMF ST |
| 13 | T-CT (transmit CTCSS tone) |
| 15 | DCS (transmit DCS code) |
| 16 | PTT-ID |
| 21 | MEM-CH (save to memory) |
| 25 | STE (squelch tail eliminate) |
| 26 | SFT-D (shift direction: +/-) |
| 27 | OFFSET (offset frequency) |
| 28 | MEM-CH (confirm save) |

---

## 9D. Programming with CHIRP Software

### What CHIRP Does
CHIRP is free open-source software that allows programming the UV-5R from a computer. It provides:
- Spreadsheet-style interface for all 128 channels
- Named channels (UV-5R display shows name instead of frequency)
- Import from repeater directories
- Save/load channel lists as files (backup before field deployment)

### Steps
1. **Download:** chirp.danplanet.com → download latest version for your OS
2. **Connect:** USB programming cable (FTDI chip type required — avoid counterfeit cables); plug into radio audio jacks
3. **Turn radio ON**
4. **In CHIRP:** Radio menu → Download from Radio → Select port (usually highest COM number) → Vendor: Baofeng → Model: UV-5R → OK
5. Wait for download (takes ~30 seconds)
6. Edit channels in spreadsheet view:
   - Frequency, offset direction, offset amount, CTCSS/DCS tones, channel name, mode (FM/NFM), power
7. **Upload:** Radio menu → Upload to Radio → OK
8. Power cycle radio

### Saving a Channel List (Do This Before Field Deployment)
File → Save As → save as .img file. This file can be reloaded if you need to reprogram later.

---

## 9E. Radio Settings Checklist (Menu Setup)

For emergency use, configure these settings:

| Setting | Recommended Value | Location |
|---|---|---|
| Squelch (SQ) | 5 (default) | Menu 0 |
| Bandwidth | Wide (25 kHz) for most ham; Narrow for FRS/MURS | Menu 5 |
| Dual watch (TDR) | OFF when using in emergencies | Menu 7 |
| Voice announcement | OFF | Menu 14 |
| Roger beep | OFF | Menu 39 |
| Power save | OFF (for emergency monitoring) | Menu 35 |
| TOT (time-out timer) | 0 (off) or 120 seconds | Menu 9 |
| Backlight | Auto or ON | Menu 6 |

---

## 9F. Antenna Notes

The stock UV-5R antenna is mediocre. For better performance:
- **Nagoya NA-771:** Dual-band whip; significant improvement over stock; ~$10–$15
- **Nagoya NA-701:** Shorter; slightly less gain; more portable
- For base station use: any SMA female to SO-239 adapter + external antenna dramatically improves range

**Antenna length reference:**
- Quarter-wave 2m (146 MHz): 19.1 inches (48.5 cm)
- Quarter-wave 70cm (446 MHz): 6.3 inches (16 cm)
- A piece of wire cut to these lengths and plugged in (with adapter) = basic field antenna

---

# 10. WINLINK — EMAIL OVER HAM RADIO

## 10A. What Winlink Is

Winlink Global Radio Email (WL2K) is a worldwide radio messaging system allowing licensed amateur radio operators to send and receive email — including attachments — via radio instead of the internet. The network operates completely without the internet when needed.

**Critical uses:**
- Email when internet is down or unavailable
- Position reporting and welfare messages during disasters
- Weather bulletins reception
- ICS-213 forms and other structured emergency management forms
- Bridge between radio operators and the non-ham public (email to/from any address)

---

## 10B. System Architecture

```
Your Station
    |
    | (Radio — HF SSB or VHF Packet)
    |
RMS Gateway (Radio Message Server)
    |
    | (Internet when available; RF when not)
    |
CMS (Cloud Message Server — AWS)
    |
    | (Internet)
    |
Recipient's email address (any provider)
```

**Grid-down operation:** If an RMS gateway loses internet, it can still forward messages to other RMS stations via HF radio — the network is self-healing and mesh-like.

---

## 10C. What You Need

### Hardware
- HF transceiver capable of SSB (e.g., Icom IC-7300, Yaesu FT-450D, or older tube-era transceivers)
- Sound card interface (SignaLink USB, RigBlaster, or DIY audio cable)
  - DIY interface: 3.5mm cable from radio speaker jack to computer microphone input; 3.5mm from computer headphone output to radio mic/data input; PTT line from serial port or VOX
- Computer running Windows (Winlink Express is Windows-only; Linux has alternatives)
- Valid amateur radio license (General class or higher for HF operation)

### Software
- **Winlink Express:** Free; Windows only; primary client
- **Pat:** Open source; Linux/Mac/Windows; command-line and web UI
- **Airmail:** Older; still functional

---

## 10D. Winlink Modes of Operation

| Mode | Frequency | Speed | License Required |
|---|---|---|---|
| PACTOR (HF) | HF bands | 200–5,600 bps | General or Extra |
| ARDOP (HF) | HF bands | 200–4,200 bps | General or Extra; free/open source |
| VARA HF | HF bands | Up to 8,500 bps | General or Extra; shareware |
| VARA FM | VHF/UHF FM | Higher speed | Technician (VHF/UHF) |
| Packet (AX.25) | VHF/UHF | 1,200 or 9,600 bps | Technician |
| Telnet | Internet | Full speed | Any (uses internet) |

**Recommended for new users:** Start with **VARA HF** (free trial version adequate for basic use) or **Packet (VHF)** if near an RMS gateway

---

## 10E. HF Gateway Frequencies (Common U.S. RMS Channels)

RMS gateways listen on multiple frequencies simultaneously. Common calling frequencies:

| Band | Frequencies (USB) |
|---|---|
| 80 meters | 3590, 3608.5, 3625 kHz |
| 40 meters | 7101, 7103.5, 7171 kHz |
| 30 meters | 10147.5 kHz |
| 20 meters | 14101, 14109.5 kHz |
| 17 meters | 18105.5 kHz |
| 15 meters | 21395 kHz |
| 10 meters | 28395 kHz |

**To find active RMS stations:** Before grid-down, download the RMS channel list from winlink.org/RMSChannels and save offline. The list shows which gateways are active and their frequencies.

**Note:** RMS gateways can only accept ONE connection at a time. If frequency is busy, try another gateway or try again in a few minutes.

---

## 10F. Setting Up Winlink Express

### First-Time Setup
1. Download and install Winlink Express
2. Launch program; setup wizard prompts for:
   - **Callsign:** Your licensed amateur callsign
   - **Recovery email:** Non-Winlink email for account recovery
   - **Password:** Winlink account password
3. Registration is automatic if you connect via Telnet (internet) first

### Configuring a Channel Session
1. Main screen → "Open Session" → select mode (ARDOP HF, VARA HF, etc.)
2. New session window opens
3. Set:
   - Serial port for CAT control (radio control) — or enter frequency manually on radio
   - Bandwidth setting (500 Hz, 1000 Hz, 2000 Hz — start with 500 Hz)
   - PTT method (VOX, CAT, or serial RTS)
4. Click "Scan" to have software try multiple gateway frequencies automatically, OR
5. Enter specific RMS callsign and frequency manually

### Sending a Message
1. Winlink Express main screen → "Message" → "New Message"
2. Fill in:
   - **To:** Any email address OR another Winlink callsign
   - **Subject:** Brief description
   - **Message body:** Keep messages short — HF is slow
3. Attach files if needed (keep small — 1 MB max recommended on HF)
4. Click "Post to Outbox"
5. Messages transmit automatically next time a session connects

### Message Size Guidance
| Mode | Max Practical Message Size |
|---|---|
| HF ARDOP/VARA | 10–50 KB (keep under 20 KB) |
| HF PACTOR | 5–20 KB |
| VHF Packet | 100 KB or less |
| Plain text message | <1 KB — ideal |

---

## 10G. Radio Settings for Winlink

**Critical:** Winlink requires a clean, unprocessed audio signal. Turn OFF:
- Speech processor / compressor
- Noise reduction
- Automatic gain control (AGC) — set to OFF or SLOW
- Notch filters
- TX equalization

**Audio levels:**
- Transmit audio: Adjust until ALC (Automatic Level Control) meter shows minimal deflection — avoid driving ALC hard
- Receive audio: Set to moderate level; Winlink software has its own AGC

**Mode:** USB (Upper Sideband) on HF for all data modes except where LSB is specified
**Power:** 25–100W; moderate power preferred — very high power can cause intermodulation

---

## 10H. Privacy Notice

Per FCC regulations, all amateur radio transmissions must be unencrypted and identifiable. **Winlink messages are NOT private.** They are transmitted in the clear and can be monitored by anyone with appropriate receiving equipment. Do not transmit:
- Passwords
- Financial information
- Personally identifying information you wish to keep private
- Any material prohibited from amateur radio (commercial content, intentional obscenity)

Use Winlink for: Welfare messages, logistics coordination, position reports, requests for assistance, tactical information.

---

## 10I. Offline Reference — Standard Welfare Message Format

When internet/phone is down and you want to let family know you are safe, use this standard format:

```
To: [recipient email address]
From: [your Winlink callsign]@winlink.org
Subject: WELFARE - [Your Name] is safe - [Date]

Message:
I am safe at [general location, not exact address].
[One or two sentences of relevant information.]
Do not try to reach me by phone - lines are down.
I will send another message in [X] days.

[Your name]
[Callsign]
```

Keep total message under 500 characters for fastest transmission on HF.

---

## APPENDIX A: CRITICAL FREQUENCIES QUICK REFERENCE

### Voice Emergency Calling
| Frequency | Band | Use |
|---|---|---|
| 146.520 MHz | 2m VHF | National FM simplex calling |
| 446.000 MHz | 70cm UHF | National UHF calling |
| 14.300 MHz | 20m HF | International distress/maritime |
| 14.325 MHz | 20m HF | Hurricane net |
| 7.290 MHz | 40m HF | Emergency voice |
| 3.985 MHz | 80m HF | Regional emergency |
| 156.800 MHz | Marine | Channel 16 (international distress) |

### Digital/Data
| Frequency | Use |
|---|---|
| 144.390 MHz | APRS North America |
| 145.825 MHz | APRS via ISS |
| 14.300 MHz | Winlink/Pactor gateway (20m) |
| 7.103.5 kHz | Winlink/Pactor gateway (40m) |

### Weather (Receive Only)
| Frequency | Station |
|---|---|
| 162.400 MHz | NOAA WX1 |
| 162.425 MHz | NOAA WX2 |
| 162.450 MHz | NOAA WX3 |
| 162.475 MHz | NOAA WX4 |
| 162.500 MHz | NOAA WX5 |
| 162.525 MHz | NOAA WX6 |
| 162.550 MHz | NOAA WX7 |

---

## APPENDIX B: ANTENNA LENGTH QUICK CALCULATOR

**Quarter-wave antenna length (feet) = 234 / Frequency (MHz)**
**Half-wave dipole total length (feet) = 468 / Frequency (MHz)**

| Frequency | Band | Quarter Wave | Half Wave (dipole total) |
|---|---|---|---|
| 3.75 MHz | 80m | 62.4 ft | 124.8 ft |
| 5.36 MHz | 60m | 43.7 ft | 87.3 ft |
| 7.1 MHz | 40m | 32.9 ft | 65.9 ft |
| 10.1 MHz | 30m | 23.2 ft | 46.3 ft |
| 14.2 MHz | 20m | 16.5 ft | 33.0 ft |
| 21.3 MHz | 15m | 11.0 ft | 22.0 ft |
| 28.5 MHz | 10m | 8.2 ft | 16.4 ft |
| 50.1 MHz | 6m | 4.7 ft | 9.3 ft |
| 146.5 MHz | 2m | 1.6 ft (19.2") | 3.2 ft (38.4") |
| 446.0 MHz | 70cm | 0.52 ft (6.3") | 1.05 ft (12.6") |

---

## APPENDIX C: PROWORDS AND Q-CODES REFERENCE

### Common Q-Codes (Used in CW and voice operations)
| Code | Meaning (question) | Meaning (answer/statement) |
|---|---|---|
| QRM | Is there interference? | There is interference |
| QRN | Is there static? | There is static |
| QRO | Shall I increase power? | Increase power |
| QRP | Shall I decrease power? | Decrease power |
| QRS | Shall I send more slowly? | Send more slowly |
| QRT | Shall I stop sending? | Stop sending / closing station |
| QRV | Are you ready? | I am ready |
| QRZ | Who is calling me? | You are being called by ___ |
| QSB | Is my signal fading? | Your signal is fading |
| QSL | Can you acknowledge receipt? | I acknowledge receipt |
| QSO | Can you communicate with ___? | I can communicate with ___ |
| QSY | Shall I change frequency? | Change frequency to ___ |
| QTH | What is your location? | My location is ___ |

---

*End of KB_Communications.md — Communications Survival Knowledge Base*
*This document covers 10 major communications topics compiled for offline reference.*
*All amateur radio operations require valid FCC license except as specified under 47 CFR § 97.403.*
*Always comply with local regulations and operate within legal power limits.*
