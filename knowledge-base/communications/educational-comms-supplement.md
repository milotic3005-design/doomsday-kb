# Educational Communications Supplement
## Open Educational Reference — Radio Theory, Electronics, Signals & Information Systems

*Based on ARRL (American Radio Relay League) educational materials, Khan Academy Physics curriculum, MIT OpenCourseWare 6.003, and FCC Part 97 educational resources.*

---

## PART 1: ELECTRONICS FUNDAMENTALS

### Passive Components

**Resistors**:
- Opposition to current flow; measured in Ohms (Ω)
- **Color code** (4-band): Band1-Band2-Multiplier-Tolerance
  - Black=0, Brown=1, Red=2, Orange=3, Yellow=4, Green=5, Blue=6, Violet=7, Gray=8, White=9
  - Tolerance: Gold=±5%, Silver=±10%
  - Example: Brown-Black-Red-Gold = 10 × 100 = 1000Ω ±5%
- **Power rating**: heat dissipated = I²R; derate to 50% in RF applications
- Resistors in series: R_total = R1 + R2 + R3
- Resistors in parallel: 1/R_total = 1/R1 + 1/R2 (two equal: R_total = R/2)

**Capacitors**:
- Store electrical energy in electric field; measured in Farads (F)
- Practical units: microfarads (μF = 10⁻⁶ F), nanofarads (nF = 10⁻⁹), picofarads (pF = 10⁻¹²)
- **Reactance**: Xc = 1/(2πfC) — decreases as frequency increases (capacitors "pass" AC)
- Capacitors in series: 1/C_total = 1/C1 + 1/C2 (less capacitance than either alone)
- Capacitors in parallel: C_total = C1 + C2 (more capacitance)
- **Applications**: bypass/decoupling (filter noise from power supplies), coupling (block DC, pass AC), tuning circuits

**Inductors (Coils)**:
- Store energy in magnetic field; measured in Henries (H)
- Practical units: millihenries (mH), microhenries (μH)
- **Reactance**: XL = 2πfL — increases as frequency increases (inductors "block" AC)
- **Applications**: RF chokes (block RF), tuned circuits, transformers, filters

**LC Circuits**:
- Resonant frequency: f = 1/(2π√(LC))
- Series LC: minimum impedance at resonance (current maximum) → bandpass filter
- Parallel LC (tank circuit): maximum impedance at resonance → band-reject or tuning
- **Q factor** (Quality): Q = XL/R = sharpness of resonance; higher Q = narrower bandwidth
  - Radio tuning circuits: want high Q for selectivity (separate nearby stations)

### Active Components

**Diodes**:
- One-way current valve; silicon diode forward voltage ~0.7V; Germanium ~0.3V
- **Rectification**: convert AC to pulsating DC (diode bridge = full-wave rectifier)
- **Zener diode**: designed to operate in reverse breakdown at specific voltage → voltage regulator
- **LED**: emits light when forward biased; typical Vf = 1.8–3.5V depending on color
  - Always use current-limiting resistor: R = (Vsupply - Vf) / If (If typically 10–20mA)
- **Schottky**: very fast switching, low forward voltage (0.3V) → RF detection, power supplies

**Transistors (Bipolar — NPN type)**:
- Three terminals: Base (B), Collector (C), Emitter (E)
- Small base current controls large collector current
- **Current gain (β or hFE)**: Ic = β × Ib (typical β = 50–300)
- **Regions of operation**:
  - Cutoff (off): Vbe <0.6V → no collector current → switch OFF
  - Active (amplify): Vbe ~0.7V, linear region → amplifier mode
  - Saturation (on): both junctions forward biased → switch ON (Vce ~0.2V)
- Biasing for amplifier: Vce should be ~Vcc/2 for maximum swing

**MOSFETs**:
- Voltage-controlled (no gate current needed unlike BJT)
- N-channel enhancement: gate voltage >threshold (typically 2–4V) turns ON
- Excellent for power switching (lower on-resistance than BJT at same current)
- **IRF540**: popular 100V, 28A N-channel MOSFET for general power control
- ESD sensitive: gate oxide can be destroyed by static discharge; handle carefully

**Op-Amps (Operational Amplifiers)**:
- Very high gain (~100,000), high input impedance, low output impedance differential amplifier
- Virtually always used with feedback
- Key rules (ideal, with feedback):
  - Input voltage differential ≈ 0 (virtual short)
  - No current into inputs
- **Inverting amplifier**: gain = -Rf/Rin (output inverted)
- **Non-inverting amplifier**: gain = 1 + Rf/Rin
- **Comparator**: outputs high/low based on which input is larger (no feedback)
- **741, LM358, LM324**: classic op-amps; still widely used; single supply variants useful in field

### Power Supplies

**Linear Regulator**:
- LM7805: outputs 5V; LM7812: 12V; LM317: adjustable
- Dropout voltage: must have Vin at least 2V above Vout
- Wastes power as heat: efficiency = Vout/Vin (50% efficient at 12V input, 6V output)
- Simple, reliable, low-noise (good for RF circuits)

**Switch-Mode Power Supply (SMPS)**:
- High efficiency (85–95%) by rapidly switching transistor
- Regulator step-down (buck): Vout < Vin; efficiency ~90%
- Regulator step-up (boost): Vout > Vin; efficiency ~85–90%
- Generates switching noise (problematic near sensitive receivers without filtering)

**Battery Charging**:
- Lead-acid: constant current to gassing voltage (14.4V for 12V battery), then constant voltage
- Li-ion/LiPo: constant current (CC) then constant voltage (CV) at 4.2V/cell — NEVER exceed
- NiMH: delta-V detection (voltage drops slightly at full charge); temperature rise limit
- Overcharging lead-acid → water loss, gassing, reduced life (use proper charger)
- Overdischarging Li-ion below 3.0V/cell → permanent damage; use protection circuit

---

## PART 2: RADIO COMMUNICATIONS THEORY

### Signal Types

**Continuous Wave (CW) — Morse Code**:
- On-off keying of carrier; most efficient use of power and bandwidth
- Range: 2× SSB at same power, 4× AM, due to narrower bandwidth and our ability to detect it
- Bandwidth: ~150 Hz (vs 3000 Hz for SSB voice)
- Decodable in noise where voice is impossible
- CW receivers: simpler, no microphone issues

**AM (Amplitude Modulation)**:
- Information encoded in carrier amplitude variations
- Bandwidth: 2× audio bandwidth (voice AM ~9 kHz wide)
- Efficiency: only 33% of transmitted power carries information (carrier + sidebands)
- DSB (double-sideband): suppresses carrier, more efficient
- SSB (single sideband): removes carrier AND one sideband; 50% bandwidth of AM; best efficiency for voice

**FM (Frequency Modulation)**:
- Information encoded in carrier frequency deviations
- Narrow FM (NFM): ±5 kHz deviation — used in land mobile, amateur VHF
- Wide FM (WFM): ±75 kHz deviation — broadcast FM
- Advantages: constant amplitude (immune to amplitude noise); natural quieting effect
- Capture effect: stronger signal captures receiver, weaker completely suppressed
- Disadvantages: more bandwidth than AM; range limited to line-of-sight (mostly)

**Digital Modes**:
- FSK (Frequency Shift Keying): two or more frequencies represent 0/1
  - RTTY: 170 Hz shift, 45 or 75 baud; widely used amateur/commercial HF
- PSK31: Phase shift keying; very narrow bandwidth (~31 Hz); excellent weak signal capability
- FT8 (WSJT-X): revolutionary digital weak-signal mode; can work stations 30 dB below noise floor
  - 15-second transmit/receive cycles; decodes signals human ears cannot hear
  - Ideal for long-distance HF communication with very low power (QRP)
- APRS (Automatic Position Reporting System): GPS position + messaging via 144.39 MHz

### Frequency Selection for Communications

**HF Band Characteristics**:

| Band | Frequency | Wavelength | Best Use | Distance |
|------|-----------|-----------|---------|----------|
| 160m | 1.8–2.0 MHz | 160m | Night regional | Up to 500 miles night |
| 80m | 3.5–4.0 MHz | 80m | Night regional/DX | 100–1000 miles |
| 60m | 5.3 MHz | 56m | NVIS regional | 200–600 miles |
| 40m | 7.0–7.3 MHz | 40m | Day/night | 100–3000 miles |
| 30m | 10.1–10.15 MHz | 30m | Day reliable DX | 1000–5000 miles |
| 20m | 14.0–14.35 MHz | 20m | Day DX reliable | 1000–15000 miles |
| 17m | 18.068–18.168 | 17m | Day DX excellent | 2000–10000 miles |
| 15m | 21.0–21.45 MHz | 15m | Day DX (solar dependent) | Global |
| 10m | 28.0–29.7 MHz | 10m | Solar max dependent | Global when open |

**NVIS (Near Vertical Incidence Skywave)**:
- Low antenna → signals go nearly straight up → reflect off ionosphere → land close by
- Perfect for regional communications 50–500 miles (eliminates skip zone)
- Optimal frequencies: 3–10 MHz (depending on time of day, season, solar cycle)
- 5 MHz (60m): best all-around NVIS frequency
- NVIS antenna: horizontal dipole 10–30 feet above ground (higher provides some directivity)

**VHF/UHF Repeater Systems**:
- Repeaters: receive on one frequency, retransmit on another; located on hilltops/towers
- Offset: UHF (70 cm): ±5 MHz; VHF (2m): ±600 kHz
- CTCSS (PL tone): subaudible tone activates repeater; 67–254 Hz; prevents false activation
- Linking: IRLP, Echolink, AllStar — link repeaters via internet; still useful during regional emergencies
- Simplex backup: 146.52 MHz (2m national calling frequency); 446.00 MHz (70cm)

### Practical Antenna Construction

**Dipole Antenna (Complete Instructions)**:

Materials needed:
- Wire (14–18 AWG stranded copper)
- PL-259 coax connector or antenna connector
- 50-ohm coaxial cable (RG-8X recommended)
- Center insulator (commercial or improvised)
- End insulators (commercial or wooden dowel pieces)
- Rope for support

Construction:
1. Calculate length: each element = 234/f(MHz) feet (or 71.3/f meters)
   - Example: 40-meter band, 7.2 MHz: 234/7.2 = 32.5 feet each side = 65 feet total
2. Cut wire slightly long; trim to tune
3. Connect center of coax shield to one wire, center conductor to other
4. Seal center connection with waterproof coax seal or self-amalgamating tape
5. Suspend horizontally between two supports, minimum 20 feet high
6. Use balun (1:1) at feedpoint if available — reduces feedline radiation

**Vertical Antenna (Quarter-Wave)**:
- Length: 234/f(MHz) feet (quarter wavelength)
- Requires ground radials for efficiency
- Minimum 4 radials, ideally 32 or more at quarter-wave length
- Omnidirectional (radiates equally in all horizontal directions)
- Lower angle of radiation than dipole → better for DX

**Random Wire Antenna** (emergency, multiband):
- Wire length: any length NOT equal to half-wave of operating frequency
- Common lengths: 29 feet, 35 feet, 84 feet
- Requires antenna tuner (ATU) to match impedance
- Connect to tuner via 4:1 or 9:1 UNUN
- Add at least 25-30 feet of counterpoise wire on ground

**J-Pole Antenna** (VHF, no ground plane needed):
- 3/4 wavelength radiating element + 1/4 wave matching section (J-shape)
- For 146 MHz (2m): radiator = 19.25", matching section = 19.25", total height ~58"
- Can be built from 300-ohm twin-lead TV ribbon cable
- Feed 50-ohm coax at lower part of matching section; clip up/down to tune VSWR

**Yagi Antenna** (directional, VHF/UHF):
- Elements: driven element (dipole) + reflector + one or more directors
- Reflector: 5% longer than driven element; placed behind; spacing 0.2λ
- Directors: 5% shorter than driven element; placed in front; spacing 0.15–0.25λ
- More elements = more gain but narrower beamwidth
- 3-element Yagi: ~7 dBd gain; 5-element: ~10 dBd; 9-element: ~14 dBd

**Antenna Tuners (ATU)**:
- Match impedance mismatch between antenna feedpoint and transceiver (50 ohm)
- L-network: simplest; one inductor + one capacitor; works into wide range of loads
- T-network: most common; two capacitors + one inductor; handles higher SWR
- Operating: adjust C1, then C2, then C1 again (interactive); peak forward power, null reflected
- Keep SWR below 2:1 at tuner output; high SWR creates heat in tuner, not just antenna

---

## PART 3: EMERGENCY COMMUNICATIONS PROTOCOLS

### NET Operations

**Net Control Station (NCS) Procedures**:
1. Open net: announce net name, purpose, frequency, call sign
2. Invite check-ins: pause, listen, record all stations
3. Prioritize traffic: Emergency > Priority > Welfare > Routine
4. Relay: stations pass traffic through net in orderly fashion
5. Close net: announce all traffic handled, time, sign off

**ARRL Traffic Handling**:
- NTS (National Traffic System): hierarchical net structure; local → section → region → national
- Message format: number, precedence, handling instructions, originating station, check, place of origin, time filed, date, address, telephone, text, signature

**ARES/RACES**:
- ARES (Amateur Radio Emergency Service): voluntary; works with any agency
- RACES (Radio Amateur Civil Emergency Service): activated during civil emergencies; stricter rules
- ICS (Incident Command System): use this structure for emergency operations
  - Radio communications: follow ICS communications plan
  - Use clear text (not codes) in emergency communications (interoperability)

**Essential Frequencies to Monitor**:
| Frequency | Purpose |
|-----------|---------|
| 14.300 MHz | Maritime Mobile Net (global) |
| 14.325 MHz | Hurricane Net |
| 7.290 MHz | 40m Emergency net |
| 3.916 MHz | Pacific Seafarers Net |
| 14.275 MHz | SSB DX/Emergency calling |
| 156.800 MHz (VHF 16) | Maritime emergency/calling (marine radio) |
| 156.300 MHz (VHF 6) | Intership safety |
| 121.500 MHz | Aircraft emergency (ELT frequency) |
| 243.000 MHz | Military aircraft emergency |
| 406.028 MHz | EPIRB/PLB beacon (satellite monitored) |

### Message Handling and Ciphers

**APCO 10-Codes** (less used now; clear text preferred):
- 10-4: Acknowledged
- 10-9: Repeat
- 10-20: Location
- 10-33: Emergency
- 10-73: How copy?

**Plain Language Emergency Message Format**:
```
FROM: [Callsign/Name]
TO: [Destination callsign/name]
DATE/TIME: [UTC]
SUBJECT: [Brief description]
PRIORITY: EMERGENCY/URGENT/ROUTINE
MESSAGE TEXT:
[Keep concise — avoid ambiguous language]
AUTHENTICATION: [Agreed verification if needed]
```

**NATO Phonetic Alphabet**:
A=Alpha, B=Bravo, C=Charlie, D=Delta, E=Echo, F=Foxtrot, G=Golf, H=Hotel, I=India,
J=Juliet, K=Kilo, L=Lima, M=Mike, N=November, O=Oscar, P=Papa, Q=Quebec,
R=Romeo, S=Sierra, T=Tango, U=Uniform, V=Victor, W=Whiskey, X=X-ray, Y=Yankee, Z=Zulu

**Q-Codes** (universal shorthand, originally CW):
- QRM: man-made interference
- QRN: natural interference (static)
- QRO: increase power
- QRP: decrease power / low power operation
- QRQ: send faster
- QRS: send slower
- QRT: stop transmitting / closing station
- QRU: nothing for you
- QRV: ready to communicate
- QRZ: who is calling me?
- QSB: signal fading
- QSL: acknowledged / confirm receipt
- QSO: conversation / contact
- QST: general announcement to all amateurs
- QSY: change frequency
- QTH: location

### Morse Code

**Morse Code Chart**:
```
A .-    B -...  C -.-.  D -..   E .     F ..-.
G --.   H ....  I ..    J .---  K -.-   L .-..
M --    N -.    O ---   P .--.  Q --.-  R .-.
S ...   T -     U ..-   V ...-  W .--   X -..-
Y -.--  Z --..

0 -----  1 .----  2 ..---  3 ...--  4 ....-
5 .....  6 -....  7 --...  8 ---..  9 ----.

Period .-.-.-    Comma --..--    Question mark ..--..
SOS ...---...   AR (end of message) .-.-.   SK (end of contact) ...-.-
BT (break) -...-   KN (invitation to named station only) -.--.
```

**Learning Morse Code**:
- Koch method: start with 2 characters at full speed (20 WPM); add character when 90% accuracy
- Farnsworth method: characters at speed but with extra spacing between
- Aim: 5 WPM for emergency use; 13 WPM for US General class exam; 20+ WPM for CW nets
- Practice resource: code generators, W1AW code practice broadcasts

**Sending and Receiving Speed**:
- One word per minute = 5 characters (PARIS standard)
- 5 WPM: very slow emergency minimum
- 13 WPM: comfortable for many operators
- 20+ WPM: experienced CW operators
- Competition operators: 40+ WPM

---

## PART 4: INFORMATION THEORY AND SIGNAL PROCESSING

### Noise and Signal Quality

**Shannon-Hartley Theorem**:
- Maximum channel capacity: C = B × log₂(1 + S/N)
- C: capacity in bits/second
- B: bandwidth in Hz
- S/N: signal-to-noise ratio (linear, not dB)
- Example: 3 kHz bandwidth, 30 dB SNR (S/N = 1000): C = 3000 × log₂(1001) ≈ 30,000 bps

**Signal-to-Noise Ratio (SNR)**:
- SNR (dB) = 10 × log₁₀(Signal Power / Noise Power)
- Or: 20 × log₁₀(Signal Voltage / Noise Voltage)
- +3 dB = double the power
- +6 dB = double the voltage (4× power)
- +10 dB = 10× power
- +20 dB = 100× power

**Noise Types**:
- **Thermal (Johnson) noise**: from random electron motion; present in all resistors
  - P_noise = kTB (k=Boltzmann constant, T=Kelvin, B=bandwidth)
  - Reducing bandwidth = reducing noise (why CW outperforms SSB)
- **Atmospheric noise**: lightning, precipitation; dominates below 20 MHz
- **Man-made noise**: power lines, motors, switching supplies; can dominate in urban areas
- **Cosmic noise**: from galaxies, sun; sets floor above ~100 MHz

**Sensitivity vs Selectivity**:
- Sensitivity: ability to receive weak signals (determined by noise figure of receiver)
- Selectivity: ability to separate desired signal from adjacent signals (determined by filters)
- Both required: sensitivity useless if overwhelmed by adjacent channels

### Digital Signal Processing Basics

**Sampling Theorem (Nyquist)**:
- Must sample at least twice the highest frequency to be digitized
- Audio (0–4000 Hz): minimum sample rate 8000 Hz (telephony standard)
- Hi-fi audio (0–20,000 Hz): minimum 40,000 Hz (CD standard: 44,100 Hz)
- HF radio receive (0–3000 Hz): 6000 Hz minimum; SDR typically uses 192,000 Hz for flexibility

**Software Defined Radio (SDR)**:
- Digitize RF signal directly; process digitally
- RTL-SDR ($25 USB dongle): 24–1766 MHz; receive-only; excellent for monitoring
- HackRF: 1 MHz–6 GHz; transmit and receive; $300
- Advantages: software upgradeable; simultaneously monitor wide spectrum; flexible demodulation

**SDR Applications for Emergency Use**:
- NOAA weather satellite images (137 MHz): real-time weather maps
- Aircraft tracking (1090 MHz ADS-B): visualize aircraft positions
- Maritime AIS (162 MHz): track ship positions
- Monitor FM/AM broadcast: news in emergency
- Scan military/government frequencies: situational awareness
- APRS decode: track other amateur radio operators

---

## PART 5: PRACTICAL RADIO TROUBLESHOOTING

### Systematic Troubleshooting Approach

**Signal Path Analysis**:
RF Transmitter → Feedline → Antenna → Electromagnetic Wave → Antenna → Feedline → Receiver

Check each stage:
1. Power: does equipment have power? Fuses, circuit breakers
2. Controls: is mode correct? Frequency? Volume/squelch?
3. Antenna: connected? Coax connector good? Visible damage?
4. Feedline: continuity? Short circuit? (use multimeter — center conductor should not touch shield)
5. Transmit test: SWR meter shows power output and SWR
6. Receive test: connect dummy load, apply signal generator to antenna port

**Common Failures**:
- Won't transmit: SWR too high (antenna problem); finals blown; PTT not engaging
- No receive: squelch too tight; antenna disconnected; IF or AF stage failed
- Distorted audio: incorrect mode; audio clip; ALC problem; interference
- Frequency drift: temperature compensation problem; crystal aging; power supply variation

**Connector Repair (PL-259 Coax)**:
1. Strip outer jacket back 3/4 inch
2. Slide shell over coax
3. Fray braid, fold back over outer jacket
4. Strip center insulation to expose 5/8" of center conductor
5. Push center into connector body — braid fills space between inner and outer
6. Solder braid through holes in connector body
7. Solder center conductor to center pin
8. Screw shell onto connector body

**Field-Expedient Fixes**:
- Broken center conductor: splice with short section and solder (degrade performance minimally)
- Wet connector: spray WD-40 to displace water; contact cleaner; dry thoroughly before use
- Missing connector: strip coax, strip wire, twist together temporarily (lossy but functional)
- Broken antenna element: splice with clamp or tape for temporary use (will need re-tuning)
- Loose connections: often cause intermittent operation; check all RF connectors, internal solder joints

### Battery Management for Field Communications

**Battery Priority System**:
1. Primary communications battery: dedicated, sized for mission
2. Secondary: emergency backup; never depleted below 50%
3. Tertiary: charging reserve; provides one full primary charge

**Operating Practice**:
- Receive-only monitoring: lowest power draw; extend battery life by factor of 5–10×
- Transmit as rarely as needed: use scheduled check-ins, not continuous monitoring
- Reduce TX power to minimum needed: every 6 dB drop = 75% power reduction; range drops ~50% but battery life quadruples
- Night operation: higher ionospheric skip = lower power needed for same range
- Standby mode: reduce brightness, disable unnecessary functions

**Estimating Battery Life**:
- Know average current draw: receive + (transmit × duty cycle)
- Example: radio draws 2A receive, 15A at 100W transmit; 10% duty cycle
  - Average current = 0.9 × 2A + 0.1 × 15A = 1.8 + 1.5 = 3.3A average
  - 100Ah battery: 100/3.3 = ~30 hours operation
  - At 50% DoD (lead-acid): 15 hours safe operation

---

*Sources: ARRL Handbook for Radio Communications (100th Edition); ARRL Antenna Book; FCC Part 97 Amateur Radio Rules; FEMA IS-100 Introduction to Incident Command System; NIMS National Incident Management System; APCO International Communication Guidelines; W1AW educational bulletins; Introduction to Signals & Systems (MIT OCW 6.003)*
