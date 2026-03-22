# Engineering & Communications Survival Knowledge Base
## Comprehensive Offline Reference — Engineering and Emergency Communications
*Compiled March 2026 — Intended for use without internet access*
*Covers: Water Wheels, Rocket Stoves, Solar Stills, Engine Troubleshooting, Blacksmithing, Rope Making, Bicycle Generators, Plumbing, Improvised Welding, Concrete Mixing, Ham Radio Emergency Ops, APRS, Mesh Networks, Crystal Radio, EMP Hardening, One-Time Pad Encryption, NVIS Antennas, Propagation, Baofeng Programming, and WINLINK*

---

# TABLE OF CONTENTS

## PART I — ENGINEERING

1. [Water Wheel & Gravity-Fed Water Systems (Micro-Hydro Power)](#1-water-wheel--gravity-fed-water-systems-micro-hydro-power)
2. [Rocket Stove Construction & Thermal Mass Heating](#2-rocket-stove-construction--thermal-mass-heating)
3. [Solar Still Construction for Water Collection](#3-solar-still-construction-for-water-collection)
4. [Engine Troubleshooting Without Electronics](#4-engine-troubleshooting-without-electronics)
5. [Blacksmithing Basics: Forge Construction & Metalworking](#5-blacksmithing-basics-forge-construction--metalworking)
6. [Rope & Cordage Making from Natural Fibers](#6-rope--cordage-making-from-natural-fibers)
7. [Bicycle-Powered Generators & Mechanical Advantage](#7-bicycle-powered-generators--mechanical-advantage)
8. [Plumbing Repairs: Copper Soldering, PEX, Well Pumps](#8-plumbing-repairs-copper-soldering-pex-well-pumps)
9. [Welding with Improvised Equipment (Car Battery Arc Welding)](#9-welding-with-improvised-equipment-car-battery-arc-welding)
10. [Concrete & Mortar Mixing Ratios & Construction](#10-concrete--mortar-mixing-ratios--construction)

## PART II — COMMUNICATIONS

11. [Ham Radio License-Free Emergency Operation (FCC Part 97.403)](#11-ham-radio-license-free-emergency-operation-fcc-part-97403)
12. [APRS — Automatic Packet Reporting System](#12-aprs--automatic-packet-reporting-system)
13. [Mesh Networking — Meshtastic, LoRa, and AREDN](#13-mesh-networking--meshtastic-lora-and-aredn)
14. [Crystal Radio Construction (No Power Required)](#14-crystal-radio-construction-no-power-required)
15. [EMP Hardening & Faraday Cage Construction](#15-emp-hardening--faraday-cage-construction)
16. [One-Time Pad Encryption for Field Use](#16-one-time-pad-encryption-for-field-use)
17. [NVIS Antenna Theory & Construction](#17-nvis-antenna-theory--construction)
18. [HF Propagation Prediction Without Internet](#18-hf-propagation-prediction-without-internet)
19. [Baofeng UV-5R Programming for Emergency Use](#19-baofeng-uv-5r-programming-for-emergency-use)
20. [Winlink — Email Over Ham Radio](#20-winlink--email-over-ham-radio)

---

# 1. WATER WHEEL & GRAVITY-FED WATER SYSTEMS (MICRO-HYDRO POWER)

## 11A. Fundamental Concepts

Micro-hydro power is one of the most consistent renewable energy sources available. A flowing stream or river with even modest elevation change can generate continuous electricity — unlike solar or wind, which are intermittent. Systems up to 100 kW are classified as "micro-hydro." A 10 kW system can power a large home or small farm.

**Key principle:** Power = (Head × Flow × Efficiency × 9.81) / 1000 in kilowatts
Where:
- Head = vertical drop in meters
- Flow = water volume in cubic meters per second
- Efficiency = 0.50 to 0.85 depending on system type

**Rule of thumb:** A system with 50–70% efficiency (typical) can be estimated with simpler tables.

---

## 11B. Assessing Your Site: Head & Flow

### Head (Elevation Drop)
- **Ultralow head:** Less than 10 feet (3 meters) — very difficult, probably not feasible for power
- **Low head:** Under 66 feet (20 meters) — possible with waterwheels or Archimedes screws
- **High head:** Over 66 feet — use Pelton or Turgo impulse turbines
- **Minimum viable:** 2 feet (0.6 meters) of vertical drop; 13 inches of stream depth for submersible micro-turbines

### Measuring Head
1. Use a surveyor's level or a simple garden hose water-level method
2. For the garden hose method: fill a long hose with water, hold one end at the water source, lower the other end until water flows freely — measure the height difference

### Measuring Flow (Bucket Method)
1. Dam the stream temporarily with a board
2. Divert all flow through a pipe into a bucket
3. Time how long it takes to fill a known volume (e.g., 5-gallon bucket)
4. Flow (gallons/minute) = Volume / Time in seconds × 60

### Flow (Float Method for Larger Streams)
1. Measure a straight channel section: 10–20 feet long
2. Measure the cross-section area (width × average depth in square feet)
3. Float an orange on the surface, time it traveling the measured distance
4. Velocity (ft/sec) = Distance / Time
5. Flow (cubic feet/sec) = Area × Velocity × 0.85 (correction for surface vs. average velocity)
6. Convert: 1 cubic foot/second = 448.8 gallons/minute

---

## 11C. Turbine & Waterwheel Types

### High-Head Systems (>66 ft): Impulse Turbines

**Pelton Wheel**
- Best for: High head (50–1,800+ feet), lower flow
- How it works: One or more water jets strike cup-shaped buckets on the wheel rim; gravity-fed high-velocity jet drives rotation
- Efficiency: Up to 90%
- Typical setup: Penstock pipe from intake pool, pressure nozzle directing jet at wheel

**Turgo Wheel**
- Similar to Pelton but jet strikes at an angle; handles higher flows at medium-high head
- Efficiency: 85–90%

### Low-Head Systems (<20 ft): Reaction Turbines & Wheels

**Overshot Waterwheel**
- Water delivered to top of wheel; weight of water drives rotation
- Efficiency: Up to 85% (best of all wheel types)
- Best head: 5–30 feet
- Requires water delivered above wheel centerline

**Undershot Waterwheel**
- Water flows under the wheel; current velocity drives paddles
- Efficiency: Below 30% — inefficient but works in flat streams
- Requires: As little as 1–2 feet of head

**Archimedes Screw**
- Inclined rotating screw lifts water or, run in reverse, generates power from falling water
- Efficiency: 67–80%
- Good for heads of 3–25 feet

---

## 11D. DIY Waterwheel Construction

### Materials List (Basic Overshot Wheel)
- 2×6 treated lumber for spokes and rim segments
- ½-inch plywood for paddles (buckets)
- 1½-inch galvanized pipe for axle
- Swivel block bearings (×2) rated for axle diameter
- Exterior screws and waterproof adhesive
- Steel strapping for reinforcement

### Dam Construction
- Concrete foundation: 42 inches long, 30-inch head height
- Install 6-inch PVC drain pipe (36 inches long) on the high-water side as overflow regulation
- The dam diverts water into the flume without flooding the system

### Flume (Water Channel) Construction
- Base: 13.5-inch width treated plywood
- Sides: 2×6 boards
- Seal all joints with waterproof adhesive + exterior screws
- Slope: slight downhill grade (1–2%) to maintain flow velocity
- Length: sufficient to carry water from dam to wheel location

### Wheel Support Structure
- Build from 2×4 lumber at end of flume
- Mount two swivel block bearings at correct height so wheel sits in water stream
- Bearings must be level with each other — use a level during installation
- Bearing height determines wheel immersion depth (for undershot: bottom third of wheel)

### Wheel Sizing Rules
- Wheel diameter: typically 4–12 feet depending on head available
- Bucket/paddle count: 12–24 around circumference
- Bucket depth: 6–12 inches
- Bucket width: 8–18 inches
- RPM at normal operation: 5–20 RPM for waterwheels (requires gearing up for generators)

---

## 11E. Gravity-Fed Water Distribution Systems

A gravity-fed system uses elevation to create water pressure — no pump required.

### Pressure Calculation
**Formula:** P (psi) = Head (feet) × 0.433

| Elevation Drop | Pressure Generated |
|---|---|
| 10 feet | 4.33 psi |
| 23 feet | ~10 psi (minimum for most fixtures) |
| 30 feet | 13 psi (basic household adequate) |
| 50 feet | 21.7 psi |
| 69 feet | 30 psi (comfortable household pressure) |
| 115 feet | ~50 psi (municipal-equivalent) |

**Every 2.31 feet of elevation = 1 psi of pressure.**

### Minimum Heights
- Absolute minimum: 2 meters (6.6 feet) head
- Recommended minimum: 3 meters (10 feet) head
- For showers: at least 15 meters (50 feet) head preferred

### Pipe Sizing Guide
- Main supply from tank to first junction: **1½-inch pipe**
- Branch lines to individual fixtures: **¾-inch pipe**
- For very long runs (1,000+ feet): upsize to 2-inch main
- No tees on main lines when possible — use a manifold at the tank and run individual lines to each fixture

### Key Design Rules
1. Horizontal distance does NOT add pressure — only vertical elevation matters for static head
2. Longer pipes = more friction loss = less pressure at end
3. Bends and fittings each reduce pressure; minimize them
4. Friction loss is NOT linear — doubling flow can increase friction loss by 4×
5. To get water over a small hill: reduce pipe diameter temporarily to increase velocity

### Friction Loss Rule of Thumb
For ¾-inch polyethylene pipe at 3 gpm: approximately 3–4 psi per 100 feet of pipe length
For 1-inch pipe at 3 gpm: approximately 1 psi per 100 feet
This loss is subtracted from available head pressure.

---

## 11F. Generator & Electrical Integration

### Matching RPM
- Waterwheel typical output: 5–20 RPM
- Generator requirement: 300–1,800 RPM (DC permanent magnet types)
- Gear ratio needed: 50:1 to 150:1
- Use belt-and-pulley systems with multiple reduction stages

### Electrical Components Needed
1. Permanent magnet DC generator (automotive alternator works at higher RPM)
2. Charge controller or voltage regulator
3. 30-amp isolation diode (prevents battery from back-feeding generator)
4. 30-amp breaker
5. Battery bank (12V or 24V lead-acid)
6. Inverter (converts DC to 120V AC)

### Wiring the Output
- Generator → 30A diode → 30A breaker → battery bus
- No separate charge controller needed if generator output cannot exceed battery capacity
- Battery bank → inverter → AC loads

---

# 2. ROCKET STOVE CONSTRUCTION & THERMAL MASS HEATING

## 12A. How a Rocket Stove Works

The rocket stove achieves high efficiency through two principles:
1. **Insulated combustion:** Wood burns in a heavily insulated L-shaped or J-shaped combustion chamber, reaching very high temperatures (1,400–1,600°C at the white-hot core)
2. **Thermal mass storage:** Hot exhaust gases pass through an extensive thermal mass (cob, brick, or concrete bench), releasing heat slowly over many hours after the fire goes out

The vertical "heat riser" inside the barrel or bell creates a strong chimney draft — so strong the fire "roars" like a rocket engine, hence the name. Wood is fed horizontally; gases rise vertically.

**Fuel savings:** 80–90% less wood than a conventional wood stove for equivalent heat output.
**Heat retention:** 20+ hours of steady warmth from a few hours of burning.

---

## 12B. Three Main Components

### 1. The Combustion Unit (J-Tube or L-Tube)
- **Feed tube:** Horizontal or angled slot where wood is inserted
- **Burn tunnel:** Horizontal section where combustion occurs
- **Heat riser:** Vertical insulated chimney above burn tunnel — this is where the "rocket" effect happens

### 2. The Bell (Barrel or Masonry Dome)
- 55-gallon steel drum placed over the heat riser
- Hot gases rise, hit underside of barrel, turn downward along sides
- Creates convective loop before gases enter the thermal mass channel

### 3. The Thermal Mass (Bench, Floor, or Wall)
- Exhaust pipe runs horizontally through cob, clay, masonry, or concrete bench
- Multiple 90° turns maximize surface area and heat extraction
- Exhaust must exit lower than where it enters the mass (to maintain draft)

---

## 12C. Critical Dimensions & Specifications

### System Size — 6-Inch System (Typical Residential)
All cross-sectional areas must be consistent:
- **Pipe/duct diameter:** 6 inches throughout
- **Rectangular channel equivalent:** 30 square inches cross-section (e.g., 5"×6" or 6"×5")
- **Do not mix sizes** — constrictions destroy the draft

### 6-Inch System Components
| Component | Dimension |
|---|---|
| Feed tube (wood slot) | 6" × 6" opening |
| Burn tunnel length | 12–18 inches |
| Heat riser height | 36–48 inches (3–4× burn tunnel length) |
| Heat riser insulation thickness | 2–3 inches of perlite or ceramic fiber |
| Barrel size | 30–55 gallon drum |

### 8-Inch System Components (Higher Capacity)
| Component | Dimension |
|---|---|
| Pipe diameter | 8 inches |
| Drum size | 55-gallon (22.5" diameter) |
| Clearance between heat riser and drum wall | 1.5 inches each side |
| Insulation around heat riser inside drum | ~5.75 inches of perlite/sand mix |

### Chimney Requirements
- Minimum chimney height: **12 feet** above the combustion unit
- Chimney diameter must match system diameter (6" system = 6" chimney)
- Chimney must exit above the thermal mass (gases must flow downhill through mass, then up the chimney)
- The thermal mass exit point must be below the combustion chamber entry — maintain a slight downhill slope (1–2%) throughout the mass channel

---

## 12D. Materials

### Combustion Chamber: MUST Use Firebrick
- **Standard firebrick:** 9" × 4½" × 2½" (hard firebrick for surfaces)
- **Insulating firebrick (IFB):** same dimensions but lighter, better insulation for heat riser
- **Do NOT use standard red house bricks** — they will crack and may explode from thermal shock
- Firebricks rated to 2,300–3,000°F
- Source: Ceramics supply stores, kiln suppliers (often cheaper than blacksmith suppliers)

### Mortar for Combustion Area
- Use **refractory mortar** (rated 2,000°F+), NOT Portland cement mortar
- Alternative: Mix fire clay + fine silica sand + water to paste consistency (1:3 clay to sand ratio)

### Thermal Mass Materials (Good Choices)
- **Cob:** 3 parts sand + 1 part clay + straw for fiber — excellent heat storage
- **Adobe or brick:** High density, good heat storage
- **Concrete:** Works but lower thermal mass than earth materials

### Thermal Mass Materials (Avoid)
- Rounded river stones: Air gaps between stones insulate instead of store heat
- Pumice stone: Too porous, acts as insulator not heat sink
- Styrofoam or light materials: Will melt or burn

### Bench Construction (Typical)
- Frame: Wood or cinder block
- Fill: Cob or packed earth around exhaust pipes
- Top: Flat stone slabs, tile, or cob surface coat
- Typical bench dimensions: 8 feet long × 3 feet wide × 18 inches high
- Pipe run inside bench: 15–25 feet of 6" or 8" stovepipe

---

## 12E. Step-by-Step Construction (6-Inch Brick System)

**Materials for brick system:**
- 225 standard firebricks
- 2–3 ceramic fiber boards (36"×48"×1")
- Clay/sand mortar
- 30–40 feet of 6-inch single-wall stovepipe
- 55-gallon steel drum (unpainted or safely burned-out)

**Build sequence:**
1. Set foundation: Level concrete slab or compacted earth, 4–6 inches thick
2. Build J-tube: Lay firebrick in J shape — horizontal feed tube, burn tunnel, vertical heat riser; mortar joints ¼ inch thick
3. Insulate heat riser: Wrap with ceramic fiber board secured with wire; OR pack inside with perlite
4. Install barrel: Position 55-gallon drum over heat riser with 1.5-inch clearance on all sides; seal base to floor with cob/mortar
5. Connect exhaust pipe: Exit barrel at bottom side, slope downward into thermal mass
6. Build thermal mass: Route pipe with gentle S-curves through bench; embed in cob or brick; each curve adds heat extraction but also draft resistance — do not exceed 3 or 4 90° bends
7. Connect chimney: Exit thermal mass, run chimney up through roof to minimum 12-foot height
8. First fire: Small test fire to cure mortar slowly — increase size over 3–4 fires before full operation

---

## 12F. Troubleshooting

| Problem | Likely Cause | Fix |
|---|---|---|
| Smoke blows into room | Chimney too short, or wet wood | Extend chimney; dry wood to <20% moisture |
| Poor draft, weak fire | Constriction in exhaust path | Check all pipe joints; remove blockages |
| Fire goes out quickly | Air supply restricted | Open feed tube slightly; remove ash buildup |
| Bench not warming | Exhaust pipe clogged with creosote | Clean pipe annually with chimney brush |
| Barrel overheating | Gap between heat riser and barrel too small | Rebuild with correct 1.5-inch clearance |

---

# 3. SOLAR STILL CONSTRUCTION FOR WATER COLLECTION

## 13A. How Solar Stills Work

Solar stills use solar energy to evaporate water (from soil, contaminated sources, or vegetation), then condense the water vapor on a cooler surface, collecting the purified distillate. The process removes salts, heavy metals, and microbiological contaminants.

**Output reality check:**
- DIY ground still: ~1 quart (1 liter) per day in good sun
- Well-built basin still: 4–6 liters per square meter per day
- Desert survival production is often only 240 mL/day — less than the sweat lost digging it
- Solar stills are supplementary water sources, not primary survival water supplies

---

## 13B. Ground Solar Still (Field Construction)

### Materials Needed
- 1 sheet clear plastic, minimum **6×6 feet** (larger = more output; 2-mil or thicker)
- 1 collection container (metal cup, canteen, any vessel)
- 6 feet of plastic tubing (fish tank tubing acceptable) — for drinking without dismantling
- Rocks or dirt to anchor plastic edges
- 1 small smooth rock for center weight
- Digging tool

### Site Selection
- Choose a location that receives maximum sunlight (south-facing in Northern Hemisphere)
- Look for moist soil: sandy washes, dry stream beds, depressions where rain collects
- Low-lying areas with vegetation often have moisture closer to surface
- Avoid shaded areas

### Construction Steps

**Step 1 — Dig the pit:**
- Diameter: 3–4 feet (approximately the size of your plastic sheet minus anchor overlap)
- Depth: 18–24 inches
- Shape: Bowl-shaped, not straight-sided (the sloped sides help condensate run to center)
- Dig deeper in center to accommodate collection vessel

**Step 2 — Prepare the collection area:**
- Dig a small hole in exact center for your container
- Container should sit level
- Run drinking tube from inside container, up and out over the pit edge; tape tube to inside of container to hold in position

**Step 3 — Add moisture-enhancing materials (optional but increases output):**
- Cactus pieces, cut vegetation, or any plant material placed on pit floor (not in center)
- Urine (yes — it evaporates and purifies, leaving waste behind)
- Brackish or contaminated water poured in corners of pit

**Step 4 — Cover with plastic:**
- Lay plastic evenly over pit, allowing ~12 inches of overlap on all sides
- Anchor edges with rocks, dirt, or sand — no gaps
- DO NOT let plastic touch pit walls or floor
- Place small rock in center directly over collection vessel
- Push center gently down until plastic slopes at approximately **45 degrees** on all sides
- Center of plastic should be a few inches above the collection vessel

**Step 5 — Seal edges:**
- Heap dirt or sand on plastic edges all around the circumference
- No gaps — hot air must not escape, cool night air must not enter during day operation

### Operation
- Production peaks 10:00 AM – 3:00 PM on sunny days
- Drink through the tube without lifting plastic
- For maximum efficiency, build in the evening so condensation begins early morning
- Dismantle and re-dig every 2–3 days as soil dries out

### Output Enhancement Tips
- Larger plastic sheet = more condensation surface
- Deeper pit = more stable temperatures
- Adding vegetation increases output significantly
- Dark-colored container absorbs more heat, increases evaporation
- Multiple stills are far better than one large still

---

## 13C. Vegetation Bag Still

### Materials
- Large clear plastic bags (25-gallon minimum)
- Rope or string to tie off

### Method
1. Insert leafy green vegetation into bag — do not cut stems, keep as intact as possible
2. Tie bag tightly around a living bush or tree branch (sun-facing side)
3. Position a low point in the bag where condensate will collect
4. In full sun, bags can produce 0.5–1 liter per day per bag
5. Change vegetation every 1–2 days as it dries out

### Plant Selection (Most Productive)
- Non-poisonous broadleaf plants with high moisture content
- Cacti: remove spines and skin first
- Avoid plants with white milky sap or strong odor (indicator of toxins)

---

## 13D. Solar Still Output by Method

| Method | Daily Output | Effort | Notes |
|---|---|---|---|
| Ground pit still | 240 mL – 1 liter | High | May cost more water in sweat than gained |
| Vegetation bag | 0.5–1 liter/bag | Low | Best in leafy environments |
| Basin still (passive) | 4–6 liters/m² | High (construction) | Best long-term installation |
| Commercial inflatable (Aquamate) | 0.5–2 liters | None | Military-grade, prepackaged |

---

# 4. ENGINE TROUBLESHOOTING WITHOUT ELECTRONICS

## 14A. Core Diagnostic Philosophy

Without computers or scanners, diagnostics follow a logical sequence:

**The Four Requirements of any combustion engine:**
1. **Fuel** — correct amount, properly atomized, reaching cylinder
2. **Air** — unrestricted intake, correct mixture
3. **Spark** (gasoline) or **Compression heat** (diesel) — timed correctly
4. **Compression** — rings and valves sealing properly

Eliminate each requirement as the problem before moving to the next. Always start with the simplest, most accessible checks.

---

## 14B. Gasoline Engine Troubleshooting (Carbureted/Points Ignition)

### "Ignition First" Rule
Before touching the carburetor, verify ignition is correct. A running engine with bad timing cannot be carburetor-tuned to run well.

### Checking for Spark

**Method 1 — Spark Tester:**
1. Remove spark plug wire from one plug
2. Connect spark tester between wire and grounded metal surface (engine block)
3. Crank engine
4. A strong blue spark = good ignition; weak orange spark or no spark = ignition problem

**Method 2 — Visual Check (carefully):**
1. Remove plug, reconnect to wire
2. Ground plug body against engine block (hold with insulated tool)
3. Crank engine — visible spark at plug gap = coil working

### Checking Breaker Points (Pre-1980 Engines)

**Symptom:** No spark or intermittent spark

1. Remove distributor cap
2. Rotate engine by hand until points are OPEN (gap between contact surfaces)
3. **Correct gap:** 0.014–0.016 inches (use feeler gauge; a business card is approximately 0.010")
4. Points should look clean and shiny; burned/pitted contacts prevent conductance
5. File lightly with points file, or replace
6. Replace condenser at same time as points (condenser costs ~$3)
7. After setting gap, rotate engine until points just begin to OPEN — that is TDC timing position

### Setting Ignition Timing (Distributor-Based)

**Without a timing light:**
1. Set engine to Top Dead Center (TDC) on compression stroke: rotate engine until cylinder 1 piston is at top, both valves closed
2. Mark timing should align on harmonic balancer (look for notch on pulley and pointer on engine block)
3. Loosen distributor hold-down bolt
4. Rotate distributor slightly toward direction of rotor rotation to advance; opposite to retard
5. Snug bolt and test — advance timing until engine pings under load, then retard slightly until ping just disappears

**With timing light:**
1. Connect timing light per its instructions (usually to battery + cylinder 1 spark plug wire)
2. Idle engine at specified RPM (check engine tag or manual — typically 700–900 RPM)
3. Shine light at timing marks on harmonic balancer
4. Rotate distributor until marks align with manufacturer spec (commonly 6°–12° BTDC)

### Carburetor Adjustment (After Ignition Is Set)

**Idle mixture screws (1–4 screws on carb body):**
1. Turn each screw IN (clockwise) until lightly seated — do not force
2. Back out each screw 1.5 turns as a starting point
3. Start engine, let warm fully
4. With engine at idle, turn mixture screws IN slowly until RPM drops; note position
5. Turn OUT slowly until RPM rises, then drops again; note position
6. Set screw at position of highest RPM (roughly between the two noted positions)
7. Adjust idle speed screw to achieve correct RPM

**Symptom — Runs rich (black smoke, fuel smell):**
- Turn idle mixture screws IN ¼ turn at a time

**Symptom — Runs lean (backfires, hesitates, overheats):**
- Turn idle mixture screws OUT ¼ turn at a time

### Compression Testing

1. Warm engine fully
2. Remove all spark plugs
3. Disable ignition (pull coil wire)
4. Thread compression gauge into cylinder 1
5. Crank engine 4–6 revolutions (or until gauge stops rising)
6. Record reading; repeat for all cylinders

**Expected values:**
- Typical compression: 125–180 psi for gasoline engines
- All cylinders within 10% of each other is acceptable
- Low on one cylinder: possible bad valve or ring
- Low on adjacent cylinders: likely blown head gasket

**Wet compression test:**
- If one cylinder reads low, add 1 tablespoon of motor oil through plug hole
- Retest: if compression rises significantly, rings are worn (oil temporarily seals them)
- If compression does not rise, valves are the problem

---

## 14C. Diesel Engine Troubleshooting (Mechanical)

### Diesel Fundamentals
- Diesel uses compression ratio of 14:1 to 25:1 (vs. 8:1–12:1 for gasoline)
- No spark plugs — fuel ignites from heat of compressed air
- Glow plugs preheat combustion chamber for cold starts only
- Compression must be 350–500 psi; less than 10% variation between cylinders

### No-Start Diagnosis Sequence

**Step 1 — Check glow plugs (cold weather no-start):**
1. Turn key to ON (not START) — wait 10–30 seconds for glow plug light to extinguish
2. If engine starts warm but not cold: glow plugs suspect
3. Test: Remove glow plug harness connector; use multimeter across each plug terminal and ground
4. Good glow plug: 0.5–2 ohms resistance
5. Bad glow plug: open circuit (OL/infinity on meter) or very high resistance

**Step 2 — Bleed air from fuel system:**
Air in fuel lines prevents diesel from reaching injectors. This is common after running tank dry, replacing fuel filters, or disturbing fuel lines.
1. Locate bleed screws on fuel filter housing and injection pump
2. Fill hand pump (if equipped) or use manual primer
3. Open bleed screw on fuel filter; pump until bubble-free fuel flows; tighten
4. Open bleed screw on injection pump; repeat
5. Some engines have self-bleeding systems — run starter in 10-second bursts with bleed screws open

**Step 3 — Check fuel filters:**
- Clogged fuel filter is the #1 cause of power loss in diesel engines
- Replace primary and secondary filters; some systems have a water separator — drain it
- If filter housing has a transparent bowl, check for water (water sinks, appears as clear/bluish layer below fuel)

**Step 4 — Check injection pump timing:**
- Injection pump timing on mechanical diesels can be checked by observing engine behavior
- Retarded timing: hard starting, white/blue smoke, low power
- Advanced timing: knocking, black smoke, rough running
- On many mechanical diesels, a timing mark on the injection pump aligns with a mark on the engine block
- Adjustment: Loosen pump mounting bolts; rotate pump body slightly (toward engine = advance; away = retard)

### Diesel Smoke Diagnosis

| Smoke Color | Meaning | Likely Cause |
|---|---|---|
| Black | Unburned fuel, rich mixture | Clogged air filter, faulty injector, over-fueling |
| White (cold start) | Normal — unburned fuel during warmup | Normal if clears after warmup |
| White (warm engine) | Coolant burning | Head gasket or cracked head |
| Blue | Oil burning | Worn rings, valve seals, or turbo seals |

### Overheating Diagnosis

Diesels commonly overheat due to:
1. Low coolant level — check when COLD, never open hot radiator cap
2. Thermostat stuck closed — bypass test: remove thermostat; if engine runs cooler, thermostat is faulty
3. Clogged radiator — clean with garden hose from inside-out; do not use pressure washer
4. Failed water pump — check for coolant leak at pump weep hole; check belt tension (belt should deflect ½" under firm thumb pressure)
5. Air lock in cooling system — bleed by running engine with radiator cap off until thermostat opens and level drops; top up and cap

### Fuel Contamination

Water contamination signs: rough running, white smoke from warm engine, corrosion in fuel system

**Field fix:**
1. Drain tank completely
2. Flush with small amount of clean diesel
3. Replace fuel filter(s)
4. Add diesel fuel additive/biocide if available (prevents microbial growth)
5. Dry the tank interior if possible before refilling

---

## 14D. Mechanical Engine Sounds Diagnostic Guide

| Sound | When | Likely Problem |
|---|---|---|
| Deep knock, regular rhythm | Throttle load | Rod bearing (serious) |
| Light tap/tick, regular | Always, faster with RPM | Valve lash — adjust |
| Pinging/rattling | Under load | Ignition timing too advanced; also lean mixture |
| Hissing | All times | Vacuum leak; check intake manifold gasket |
| Gurgling | During warmup | Air pocket in cooling system |
| Whine, high-pitched | RPM-dependent | Alternator bearing or power steering pump |
| Knock on startup, goes away | Oil pressure dependent | Low oil; worn main bearing |

---

## 14E. Field Compression Boost Trick

If an engine has borderline compression and is hard to start in cold weather:
1. Pour 1 tablespoon of fresh motor oil into each cylinder through spark plug hole
2. Crank engine briefly (without spark) to coat cylinder walls
3. Reinstall plugs and start — oil temporarily seals worn rings

---

# 5. BLACKSMITHING BASICS: FORGE CONSTRUCTION & METALWORKING

## 15A. Essential Equipment

### The Anvil
- Cast iron or forged steel block; larger is better (100–300 lbs for serious work)
- **Parts:** Face (flat top), horn (tapered cone for curves), hardy hole (square hole for tools), pritchel hole (round hole for punching)
- Field substitute: railroad track section, large I-beam, or truck axle set in concrete
- Mount at height where your knuckles just brush the face when arm hangs loose

### The Hammer
- **Starting weight:** 1.75–3 lbs for most work
- **Best all-around:** Cross-peen hammer (one face flat, one face wedge-shaped across handle axis)
- Ball-peen hammer works but is less versatile
- Never use a hammer heavier than you can control accurately for extended periods

### Tongs
- Essential for holding hot metal
- Minimum set: Flat jaw tongs (for bar stock), bolt jaw tongs (for round stock)
- Rule: "If you can't hold it, you can't hit it"
- Improvised tongs: Locking pliers (Vise-Grips) for short sessions; will absorb heat quickly

### Quench Bucket
- Metal or wooden bucket, minimum 5 gallons
- Fill with water (for carbon steel) or motor oil (for tool steel hardening)
- Always have nearby — never touch hot metal with bare hands

---

## 15B. Forge Construction: Solid Fuel (Coal/Coke/Charcoal)

### The Fire Pot
- Center piece of the forge — a cast iron or fabricated steel bowl where fuel burns
- Depth: approximately **3 inches**
- The hot coke fire builds to 5–6 inches above the forge table surface
- Can be purchased ($40–$100) or fabricated from 3/8-inch steel plate

### The Tuyere (Air Supply Pipe)
- Pipe through which forced air enters the fire from below (or side)
- Diameter: 1–2 inch pipe
- **Do NOT position tuyere at bottom center** — ash will clog it immediately
- Position from the **side**, with pipe entering fire pot just above the ash dump
- Connect to blower (electric or hand-cranked)

### Simple DIY Solid Fuel Forge Construction

**Materials:**
- Metal basin (car wheel rim, brake drum, or fabricated steel box) 18–24 inches diameter
- Firebrick to line interior
- 1½-inch steel pipe, 12 inches long (tuyere)
- Air blower (electric squirrel-cage fan or hand-cranked bellows)
- Steel legs or welded stand (32-inch working height typical)

**Steps:**
1. Weld or bolt legs to basin to achieve comfortable working height
2. Line interior with firebrick — hard firebrick on bottom and sides (cut to fit if needed with angle grinder)
3. Drill 1½-inch hole in side of basin, 2 inches from bottom
4. Insert tuyere pipe through hole; weld or bolt in place
5. Connect blower to outer end of tuyere pipe via flexible hose or direct connection
6. Add an ash dump (small cleanout door) at bottom if desired
7. Level the forge — use a carpenter's level

### Gas Forge Construction (Propane — Simpler to Build)

**Materials:**
- Ceramic fiber blanket (Kaowool or similar, 1–2 inch thickness)
- Metal shell (steel pipe section, old freon tank, or purpose-built metal box)
- Forge burner (purchased; $40–$80 each; 1 burner per 350 cubic inches of forge volume)
- Firebrick floor (optional but extends blanket life)
- Propane regulator + hose (0–30 psi adjustable regulator)

**Basic gas forge build:**
1. Determine forge interior volume (length × width × height in inches)
2. Calculate burner count: 1 burner per 350 cubic inches
3. Line interior of metal shell with ceramic fiber blanket (wire in place)
4. Install burner(s) angled slightly off-center to create swirling flame pattern
5. Leave front and rear openings for work access
6. Connect propane; start at low pressure (2–4 psi) and increase as needed
7. Working temperature: 2,000–2,400°F

---

## 15C. Forge Fuels

### Bituminous Coal (Best for Blacksmithing)
- **Type:** Soft, mid-grade coal from deeper mines
- **Why it works:** Coking coal — heats and bakes into coke within the fire, creating the actual burning fuel
- **Fire management:** Keep outer ring damp and packed to "cook" into coke before burning
- **Clinker:** Ash fuses into glassy chunks that clog fire — remove periodically with a poker
- **Temperature:** 1,400–1,600°C at white-hot core

### Metallurgical Coke (Best for Hot Fires)
- Pre-processed coal — volatiles already removed
- Higher BTU, less smoke than raw coal
- **Needs more forced air** than coal to sustain combustion
- **1,000 kg coal produces 700 kg coke** during production process
- Temperature: same as coal fire but reached faster

### Charcoal (Most Accessible/Primitive)
- Produced from wood by low-oxygen burning (charcoal kiln or earthen pit)
- Burns cleaner than coal but requires more volume
- Lower maximum temperature than coke/coal
- Excellent for beginner work; good for heat-treating

### Anthracite Coal (Less Ideal)
- Very clean burning, high BTU
- **Problem:** Coke pieces produced are small and blow out of fire
- Works but requires careful fire management and high airflow

---

## 15D. Basic Metalworking Techniques

### Heating Metal
- **Yellow-orange heat:** 1,800–2,000°F — best for most forging, metal moves easily
- **Red heat:** ~1,500°F — can work metal but harder, more hammer blows needed
- **White heat (near welding):** 2,400°F+ — metal very soft; be careful not to burn it
- **Black/cold:** Do not strike — no plastic deformation possible; may crack metal
- Rule: Work the metal while it's hot; return to fire when it drops below workable temperature (typically when orange glow fades to red)

### Drawing Out (Making Metal Longer)
- Strike metal on four sides repeatedly
- Rotate 90° after each series of blows
- Applications: tapering points, making nails, long tapers on tools

### Upsetting (Making Metal Thicker/Wider)
- Strike end-on, on face of anvil
- Metal "mushrooms" outward
- Applications: forming heads on bolts, widening a section before punching holes

### Bending
- Heat to yellow-orange
- For sharp bends: place over edge of anvil or hardie tool and strike down
- For curves: work over horn of anvil
- Use scrolling fork for decorative spirals

### Punching Holes
- Heat metal to yellow-orange at punch location
- Place punch (pointed steel tool) on hot spot; strike with hammer
- When punch starts to cool and stick, remove, quench punch tip only, reheat metal
- Punch from both sides to meet in middle; knock out small slug with punch

### Forge Welding (Joining Two Pieces)
- Heat both pieces to near-white heat (2,400°F) — metal looks wet/sparkling
- Apply flux (borax works; sprinkle on joint at orange heat to prevent oxidation)
- Place pieces together on anvil quickly; strike immediately with firm, accurate blows
- Success: pieces fuse together; failed weld: surfaces won't join or show dark line

---

## 15E. Heat Treating (Hardening & Tempering Tool Steel)

Used for knives, chisels, punches — carbon steel only (rebar, leaf spring, coil spring, old files)

### Hardening
1. Heat tool to non-magnetic temperature (~1,450°F for most tool steel — use a magnet; when the steel no longer attracts the magnet, it's at correct temperature)
2. Quench immediately in warm motor oil or water (oil = less shock, less cracking risk)
3. Metal is now glass-hard and very brittle — do not use yet

### Tempering
1. Polish the hardened surface with sandpaper until bright and shiny
2. Apply gentle heat (torch, gas stove burner, or hot sand) and watch color change:
   - Pale yellow (430°F): Suitable for scrapers and lathe tools
   - Straw yellow (480°F): Suitable for milling cutters
   - **Dark straw/golden (520°F): Suitable for most chisels and punches**
   - **Purple (560°F): Suitable for axes, planes**
   - **Blue (600°F): Suitable for springs and tools needing toughness**
3. Quench immediately when desired color appears
4. The thinner the section, the faster color travels — watch the tip of the tool

---

## 15F. Starting Materials (Field Accessible)

| Material | Best Uses | Notes |
|---|---|---|
| Rebar | Basic punches, drifts, chisels | Medium carbon steel; not ideal for edge tools |
| Coil springs | Knives, chisels, high-quality tools | High carbon — excellent tool steel |
| Leaf springs | Same as coil springs | Same steel type, easier to cut |
| Old files | Knives, small tools | High carbon steel; excellent quality |
| Railroad spikes | Low-carbon hooks, decorative work | Too soft for edge tools |
| Chain links | Decorative, hooks, basic hardware | Low-to-medium carbon |

**Test for carbon content (field method):** Grind surface on concrete — high carbon = bright sparks with many branching streamers; low carbon = dull sparks with few branches

---

# 6. ROPE & CORDAGE MAKING FROM NATURAL FIBERS

## 16A. Best Plant Sources by Region

### Eastern North America
- **Stinging Nettle (Urtica dioica):** Long, strong bast fibers; best harvested fall when stalks dried; neutralize sting by cooking or drying
- **Dogbane (Apocynum cannabinum):** Excellent fibers; harvest dried fall stalks; widespread across all of North America
- **Milkweed (Asclepias):** Good fiber from dried stalks; widely available
- **Basswood/Linden inner bark:** Strong; strip from cut branches; soak in water 1–2 weeks to separate fibers
- **Cattail leaves:** Braid leaves whole; or shred lengthwise and twist for stronger cord

### Western North America
- **Yucca (Agave/Yucca):** Long, strong fibers from leaves; sword-shaped leaves; process by soaking and pounding
- **Western Red Cedar inner bark:** Extremely strong; strip inner fibrous layer from beneath outer bark
- **Stinging Nettle:** Present in moist areas throughout

### Anywhere
- **Rawhide/sinew (animal-based):** Unparalleled strength; 1 strand holds weight of average adult; use wet (shrinks tight as glue when dry)
- **Grass braiding:** Any long, flexible grass; braid rather than twist; lower strength

---

## 16B. Fiber Preparation

### Processing Stalks (Nettle, Dogbane, Milkweed)
1. Collect dead, dry stalks (late fall through winter is best)
2. Break stalk at regular intervals (every 2–3 inches) by bending
3. Lay on hard flat surface (rock or board)
4. Pound entire length with smooth rock or mallet — break up woody core
5. Run thumbnail down inside of stalk to split it open — fold back like opening a book
6. Peel away woody core sections, leaving the fiber attached to the outer bark
7. Separate fibers by rubbing between palms

### Processing Bark (Cedar, Basswood, Willow)
1. Find recently cut or living tree (do not kill trees needlessly — take strips from lower trunk)
2. Make vertical cuts through outer bark, 2–3 inches apart
3. Peel strip of bark from cut tree
4. Separate inner bark (pale, fibrous, shredding layer) from outer bark (rough, dark)
5. The inner bast/phloem is your cordage material
6. Soak in water for 8–14 days (water retting) for easier fiber separation
7. Dry before twisting

### Processing Leaves (Yucca, Cattail, Iris)
1. Pick mature, green leaves
2. Soak in water until pliable (1–24 hours depending on dryness)
3. Pound or roll between hands to soften
4. Shred lengthwise into narrow strips (1/8–1/4 inch wide)
5. Allow to partially dry before twisting

### The "Buffing" Process (Softening Fibers)
1. Take a bundle of prepared fibers
2. Roll between palms vigorously — this breaks remaining woody fibers
3. Alternatively: pull fibers over a smooth, rounded edge (smooth rock or branch)
4. Goal: fibers should feel soft, flexible, and not stiff or snapping

---

## 16C. The Reverse Wrap Technique (Two-Ply Cordage)

This is the fundamental cordage-making method used worldwide. It produces strong, consistent cord from almost any plant fiber.

### Setup
1. Take a bundle of prepared fibers, roughly half the thickness of the finished cord
2. Fold bundle in half — this creates two "legs" of equal length
3. Hold the fold point (kink) between thumb and forefinger of left hand

### The Twist Sequence
1. With right hand, pinch BOTH legs together between thumb and forefinger
2. Roll BOTH legs clockwise simultaneously (same direction) between thumb and finger — this adds "S-twist" to both individual legs
3. While maintaining the clockwise twist on both legs, bring the RIGHT leg OVER the LEFT leg (this is the "reverse" or counter-twist — "Z-ply")
4. Slide right hand back toward left hand; pick up both legs again
5. Repeat steps 2–4 continuously

**The key:** Both legs always twist the same direction (clockwise); legs always cross in the opposite direction (counterclockwise). This creates a self-locking, stable cord.

### Adding New Fiber (Splicing In)
- When one leg gets short, add new fiber before it runs out completely
- Overlap new fibers with the old fibers by 2–3 inches within the twist
- Twist the splice in — the tension of the cord locks it
- Stagger splices: do not add new fibers to both legs at same point — offset by 2–3 inches

### Leg Roll Method (Thigh Rolling — For Speed)
1. Lay both fiber legs on bare thigh (above knee)
2. Place palm on both legs and roll AWAY from body (forward) — this adds S-twist to both
3. With same motion, bring right leg OVER left (Z-ply counter-wrap)
4. Slide hand toward self and repeat
5. Skilled workers produce 10 feet per hour

---

## 16D. Braiding (Three-Strand)

Simpler than reverse wrap; weaker but faster for flat materials:

1. Take three equal bundles of fiber
2. Number them Left, Center, Right
3. Bring LEFT over CENTER (LEFT is now the new CENTER)
4. Bring RIGHT over new CENTER (RIGHT is now new CENTER)
5. Bring LEFT over CENTER — repeat continuously
6. Keep tension even throughout

**Good for:** Cattail leaves, flat bark strips, grass
**Strength:** Lower than reverse wrap; adequate for non-critical applications

---

## 16E. Sinew Cordage (Animal-Based)

- **Source:** Large tendons from back legs and along spine of deer, elk, moose
- **Harvest:** Remove fresh tendon; pound with rock to separate fibers; dry flat
- **Preparation:** Dried sinew must be moistened with saliva before use — becomes tacky
- **Strength:** One strand holds 150+ lbs
- **Uses:** Bowstrings, lashings, bindings, stitching hides
- **Special property:** Shrinks as it dries — wrappings need no knot; bond is locked by drying

---

## 16F. Strength Comparison

| Material | Approx. Breaking Strength (1/4-inch cord) | Notes |
|---|---|---|
| Dogbane (two-ply) | 40–60 lbs | Good all-purpose |
| Stinging Nettle | 50–80 lbs | Excellent plant fiber |
| Yucca leaf | 60–100 lbs | Very strong |
| Cedar bark (braided) | 30–50 lbs | Good for lashings |
| Cattail (braided) | 15–30 lbs | Lower strength |
| Sinew (single strand) | 100–200 lbs | Strongest natural |
| 550 Paracord (reference) | 550 lbs | Commercial reference |

---

## 16G. End Finishing

- **To prevent unraveling:** Tie simple overhand knot at end; or dip end in pine pitch
- **Whipping:** Wrap end tightly with thin thread for 1 inch; tie off with half-hitch
- **Weave-back:** Fold end back into last 2 inches of cord and twist in place

---

# 7. BICYCLE-POWERED GENERATORS & MECHANICAL ADVANTAGE

## 17A. Physics of Human Power Output

- Average adult (sustained effort, 1+ hours): **50–100 watts**
- Average adult (hard effort, 10–30 minutes): **150–250 watts**
- Trained cyclist (sustained): up to 400 watts
- Tour de France level: 400–500 watts sustained
- **Practical design target for most installations: 100 watts continuous**

### The Efficiency Chain
- Human mechanical output: ~25% efficient (rest is heat)
- Bicycle transmission: ~95% efficient
- Generator/alternator: ~85% efficient
- Battery charging: ~85% efficient
- **Net efficiency, pedaling to stored electricity:** ~15–20%

Therefore: 200W pedaling effort → ~30–40W stored electricity (typical)

---

## 17B. The RPM Gap Problem

Human comfortable pedaling cadence: **60–80 RPM**
Generator optimal operating RPM: **1,000–3,000 RPM**

**Required gear ratio:** 1,000/70 = approximately 14:1 minimum; 3,000/70 = 43:1 preferred

### Achieving the Ratio with Chain Drive
- Bike rear sprocket: typically 16–20 teeth
- Bike front chainring: typically 44–52 teeth
- Existing bike gear ratio: ~2.5:1 to 3:1
- Additional ratio needed from generator pulley: 5:1 to 15:1
- Achieve this with large pulley on drive shaft, small pulley on generator shaft

**Example calculation:**
- Pedaling at 70 RPM, using largest chainring (52 tooth) to smallest rear sprocket (11 tooth) = bike drive ratio of 4.7:1
- Drive shaft turns at 70 × 4.7 = 329 RPM
- Generator pulley ratio of 5:1 → generator at 1,645 RPM ✓

---

## 17C. Drive System Options (Ranked by Efficiency)

### Option 1: Chain Drive (Best — ~95% Efficient)
- Use bicycle chain and sprockets throughout
- Modify rear axle or add second sprocket system
- Requires matching chain size to generator sprocket
- Most mechanically complex to build; most efficient in operation

### Option 2: Belt and Pulley (~90% Efficient)
- Drive belt from rear wheel rim to generator pulley
- Simple construction; easy to implement
- Slippage reduces efficiency especially in wet conditions
- V-belt is better than flat belt; wider belt reduces slip

### Option 3: Direct Tire Friction (~75–85% Efficient)
- Small rubber roller presses against bicycle tire
- Roller connected directly to generator shaft
- Simplest to build
- Works but tire slippage; tire wear
- Best for temporary or demonstration systems

---

## 17D. Construction Plans (Tire Friction Method — Simplest)

### Materials
- Bicycle (any type; mountain bike preferred for stability)
- Bicycle repair stand or elevated rear wheel mount
- Treadmill motor (DC permanent magnet, 90–180V DC, 1–2 HP) — most common DIY choice
- Charge controller (12V or 24V rated for generator output)
- Battery bank (12V lead-acid)
- 2×4 lumber for frame
- Bolts, springs, strapping

### The Frame
1. Build rectangular base frame from 2×4 lumber: 30" long × 18" wide
2. Elevate bicycle rear wheel 3–4 inches off ground using two angled 2×4 risers under back legs
3. Front legs of bicycle stand rest on ground; rear rests on elevated frame
4. This is the simplest elevation method

### Mounting the Motor
1. Position treadmill motor so its drive roller presses against bicycle rear tire
2. Build motor mount from 2×4 with a pivot bolt at one end
3. Use spring tension to keep motor pressed against tire — spring at top of motor mount pulls toward tire
4. Spring should apply firm but not crushing pressure — tire should not visibly deform

### Electrical Connection
- Treadmill motor generates DC voltage proportional to RPM
- Wire motor output to charge controller input
- Wire charge controller output to battery
- Wire battery to inverter for AC output
- Wire inverter to power strip with AC outlets

### Regulating Voltage
- Treadmill motors can output dangerous voltages at high RPM
- Install a charge controller rated for motor's maximum voltage
- Alternative: Use voltage divider resistor network to limit charge rate
- Most important: match motor output to battery bank voltage (12V or 24V system)

---

## 17E. Generator Alternatives to Treadmill Motors

| Generator Type | Pros | Cons | Cost |
|---|---|---|---|
| Treadmill motor (DC PM) | Widely available, easy to use | Variable voltage; need charge controller | $20–$80 salvage |
| Car alternator (3-phase AC) | Durable, high output | Requires field excitation winding; needs rectifier | $15–$60 salvage |
| Purpose-built DC generator | Designed for the job | Expensive | $80–$300 new |
| Hub dynamo (bicycle) | Compact, weatherproof | Very low power (3W typical) | $30–$100 new |

### Using a Car Alternator
1. Car alternator requires 12V excitation current to its field winding before it produces power
2. Wire a small (12V incandescent bulb works) current from battery to field terminal during operation
3. Connect AC output from alternator through a 3-phase bridge rectifier to get DC
4. Connect rectified DC to charge controller and battery

---

## 17F. Realistic Power Budget

| Device | Watts Required | Minutes of Pedaling to Charge |
|---|---|---|
| Smartphone (100% charge) | ~10 Wh | ~30 min (at 20W net output) |
| LED lantern (4 hours) | ~20 Wh | ~60 min |
| Laptop (full charge) | ~60 Wh | ~3 hours |
| 12V water pump (30 min) | ~30 Wh | ~90 min |
| Power drill (one use) | ~200 Wh | Do not attempt — exceeds typical setup |
| Radio (all day) | ~24 Wh | ~72 min |

---

# 8. PLUMBING REPAIRS: COPPER SOLDERING, PEX, WELL PUMPS

## 18A. Soldering Copper Pipe

### Tools Required
- Propane torch (or MAPP gas for faster heating)
- Lead-free solder (must be lead-free for drinking water — 95/5 tin/antimony or 97/3 tin/copper)
- Flux (acid-based paste flux — prevents oxidation during heating)
- Flux brush
- Emery cloth or plumber's wire brush
- Heat shield (aluminum foil or commercial heat shield pad)
- Fire extinguisher nearby

### Critical Rule: Dry Pipe
Solder will NOT flow into a wet joint. The pipe must be completely dry and drained.

**Drying wet pipes:**
- Stuff a piece of white bread into pipe (upstream of joint) — it absorbs moisture and dissolves later
- Use a heat gun or torch (very briefly) to evaporate moisture
- Wait until no steam appears when pipe is heated

### Step-by-Step Process

**Step 1 — Prepare the pipe:**
- Cut pipe squarely with pipe cutter (preferred) or hacksaw
- Remove burrs from inside cut with reamer or round file
- Polish pipe end with emery cloth to bright copper — 1 inch from end
- Polish inside of fitting socket with wire brush

**Step 2 — Apply flux:**
- Use flux brush to apply thin, even coat of paste flux to both surfaces (pipe exterior and fitting interior)
- Flux prevents oxidation and helps solder flow into joint by capillary action
- Assemble fitting onto pipe immediately — do not leave fluxed surfaces exposed

**Step 3 — Heat the joint:**
- Position flame on fitting body (not on pipe), moving continuously
- Heat the FITTING, not the solder — pipe and solder are indirectly heated
- Keep flame moving in circles around joint — even heating prevents hot spots
- Heat until flux begins to bubble and turn light brown

**Step 4 — Apply solder:**
- Touch solder wire to joint where pipe enters fitting (OPPOSITE side from flame)
- If solder melts on contact with pipe/fitting (not from flame directly), temperature is correct
- Allow solder to flow into joint by capillary action — do not push excess solder
- Work solder around full circumference until ring of solder appears at edge of fitting
- Typical joint uses 1–1.5 inches of solder wire

**Step 5 — Clean and cool:**
- Wipe joint immediately with damp cloth — removes excess flux and brightens appearance
- Do NOT disturb joint while cooling (30 seconds minimum)
- Do not quench with water — let cool naturally or cool air only

### Common Problems & Fixes

| Problem | Cause | Fix |
|---|---|---|
| Solder won't stick | Pipe wet or oxidized | Dry completely; re-clean and re-flux |
| Solder beads up and falls off | Insufficient heat | Heat fitting more; ensure flux present |
| Solder runs away from joint | Overheated; gravity | Remove flame; angle pipe so joint is horizontal |
| Pin-hole leaks after pressurizing | Incomplete solder penetration | Reheat and add more solder while hot |
| Joint leaks after years | Pipe corrosion or mechanical stress | Cut out and replace section |

---

## 18B. PEX (Cross-Linked Polyethylene) Pipe

### PEX Advantages
- 58–68% less expensive than copper installation
- Flexible — fewer fittings needed; bends around obstacles
- Freeze-resistant (expands without bursting in most cases)
- Lifespan: 50+ years
- Approved for potable water

### PEX Colors
- **Red:** Hot water supply
- **Blue:** Cold water supply
- **White:** Either (typically used for both)

### PEX Connection Types

**Crimp Fittings (Most Common)**
- Brass fitting inserted into PEX pipe end
- Copper crimp ring slid over pipe before fitting
- Crimp ring compressed with PEX crimp tool
- Results in permanent, strong connection
- Requires specific crimp tool (~$30–$80)

**Clamp Fittings (Stainless Steel)**
- Stainless steel ear clamp slid over pipe
- Fitting inserted; clamp positioned over fitting shoulder
- Clamp cinched with clamp tool
- Slightly easier than crimp; similar strength

**Push-Fit/SharkBite Fittings (Easiest, Most Expensive)**
- No tools required — push pipe into fitting until it clicks
- Internal grab ring and O-ring create seal
- Fully removable with removal tool
- Cost: ~$5–$15 per fitting vs. $0.50–$2 for crimp
- Lifetime rated; meets all plumbing codes
- Excellent for repairs in tight spaces where torches can't go

**Expansion Fittings (PEX-A Only)**
- Special ring expanded over pipe then fitting inserted; ring contracts to grip
- Requires PEX expansion tool (~$200+)
- Strongest connection type

### Connecting PEX to Copper
1. Install threaded copper male adapter on copper pipe (solder in place per Section 8A)
2. Thread female threaded PEX fitting onto copper adapter (hand-tight plus 1-2 turns with wrench)
3. Connect PEX pipe to PEX fitting using crimp, clamp, or push-fit method
4. Alternative: SharkBite push-fit fittings work with BOTH PEX and copper — push each pipe in from opposite ends

### Repairing PEX
- Cuts or cracks: Cut out damaged section; install two push-fit couplings with new PEX between them
- Frozen/burst pipe: Cut out 6-inch section beyond split; repair with couplings and new pipe

---

## 18C. Well Pump Troubleshooting

### System Architecture
- **Submersible pump:** Located at bottom of well casing; electric motor directly drives pump; controlled by pressure switch at surface
- **Jet pump:** Located at surface; uses jet venturi to draw water; used for wells shallower than 25 feet (shallow well) or with separate jet body in well (deep well)
- **Pressure tank:** Bladder tank at surface maintains pressure between pump cycles; typical range 30–50 psi or 40–60 psi

### Diagnosis Tree

**Symptom: NO water at all**

1. Check circuit breaker — well pump typically on 240V double-pole breaker; reset if tripped
2. Check well pump switch (near pressure tank) — ensure in ON position
3. Read pressure gauge on tank:
   - Reads 0: Electrical failure or pump failure
   - Reads normal pressure: Piping problem (closed valve, frozen pipe)
4. Check pressure switch contacts: Locate gray box on pressure tank pipe; carefully remove cover; look for burned contacts or corrosion
   - Test: With power ON, use insulated screwdriver to bridge contacts manually — if pump starts, pressure switch is faulty (replace, ~$25)
   - Pressure switch ports clog with sediment: shut off power; remove switch; clear port with small wire or sewing needle
5. Check pump capacitor (in pump control box, usually mounted near pressure tank):
   - Visible burn marks or ooze = failed capacitor
   - Replacement cost: ~$10–$30

**Symptom: PULSING water pressure**

- Classic symptom of waterlogged pressure tank (failed internal bladder)
- Test: Press valve on top of pressure tank (looks like tire valve) — if water sprays out instead of air, bladder is failed
- Fix: Replace tank ($200–$600 depending on size)

**Symptom: PUMP RUNS CONSTANTLY and won't shut off**

- Pressure tank too small or waterlogged (replace)
- Check valve failed (water drains back into well; pump refills continuously)
- Well is producing less water than pump demands (pump is "air-locking")
- Leak in piping — inspect all visible pipes

**Symptom: PUMP RUNS then TRIPS off; may reset after cooling**

- Pump overheating — usually due to low water (pump not submerged)
- Check well water level — may need to reduce pump usage during drought
- Worn pump motor

### Pressure Tank Air Charge (Maintenance)

Correct air pre-charge prevents waterlogging:
1. Turn off pump breaker
2. Open a faucet to bleed all water pressure from tank
3. Check Schrader valve (on top of tank) with tire pressure gauge
4. Correct pre-charge pressure = **Cut-in pressure minus 2 psi**
   - Example: 30/50 switch → 28 psi pre-charge
   - Example: 40/60 switch → 38 psi pre-charge
5. Add air with bicycle pump or air compressor if needed
6. Restore power; tank should cycle correctly now

### Adjusting Pressure Switch

The pressure switch has two spring-loaded nuts inside the cover:
- **Large nut:** Adjusts both cut-in and cut-out simultaneously (changes range)
- **Small nut:** Adjusts differential between cut-in and cut-out
- Clockwise = higher pressure; counterclockwise = lower pressure
- Standard setting: 30/50 or 40/60 psi; do not exceed 60 psi cut-out without verifying tank rating

---

# 9. WELDING WITH IMPROVISED EQUIPMENT (CAR BATTERY ARC WELDING)

## 19A. Theory and Requirements

Standard stick welding (SMAW) operates at 20–45 volts DC with 75–200+ amps. A single 12V car battery delivers correct amperage but insufficient voltage. Three 12V batteries wired in series = 36V — minimum for sustained arc welding.

**Minimum equipment:**
- 3 × 12V car batteries (more = better sustained arc)
- Jumper cables (heavy gauge — 2 AWG or thicker; 4 AWG minimum)
- Welding electrodes (1/8" diameter, 6010, 6011, or 6013 rods)
- Improvised electrode holder (see below)
- Welding protection (see safety section)

---

## 19B. Battery Wiring (Series Connection)

**Wiring sequence:**
- Battery 1 Positive (+) → Battery 2 Negative (-)
- Battery 2 Positive (+) → Battery 3 Negative (-)
- Battery 3 Positive (+) → Workpiece (ground connection)
- Battery 1 Negative (-) → Electrode holder

This creates a 36V circuit. Total voltage = 12 × number of batteries in series.

**Using jumper cables:**
- Connect red cable from Battery 1(+) to Battery 2(-)
- Connect second red cable from Battery 2(+) to Battery 3(-)
- The last remaining battery positive = connect to welding work clamp (ground)
- The first battery negative = electrode holder

**Keep batteries as close together as possible** — minimize cable resistance losses

---

## 19C. Electrode Holder Construction

**Option 1 — Modified jumper cable clamp:**
1. Take heavy-duty jumper cable clamp
2. Use pliers to pry jaws slightly open
3. Insert welding rod (1/8" diameter) between jaws
4. Clamp jaws tight around rod with locking mechanism or wrap with bicycle inner tube strip for pressure
5. Ensure solid metal-to-metal contact

**Option 2 — Locking pliers (Vise-Grips):**
1. Adjust locking pliers to grip the electrode shank firmly
2. Wrap handle with electrical tape for insulation
3. Connect heavy cable to plier pivot bolt with cable lug and nut

**Option 3 — Professional holder + battery cables:**
- Purchase commercial stick electrode holder ($10–$20) for reliable contact
- Connect to automotive cable via lug or wrapped connection

---

## 19D. Electrode Selection

| Rod | Type | Best Use | Notes |
|---|---|---|---|
| 6010 | DC cellulosic | Pipe, dirty/rusty metal, field repairs | Requires DC; penetrating arc |
| 6011 | AC/DC cellulosic | Same as 6010 but works on AC too | Better for battery welding |
| 6013 | AC/DC rutile | Clean steel, beginners | Easier to strike; less penetration |
| 7018 | Low hydrogen | Clean structural steel | Requires dry storage; harder to strike with batteries |

**Recommended for battery welding: 6011 in 3/32" or 1/8" diameter**

- 5 lbs of 6011 electrodes costs approximately $20
- Store electrodes DRY — moisture causes porosity in welds

---

## 19E. Welding Technique

### Arc Length
- Maintain arc gap of approximately **1/8 inch** (roughly equal to electrode diameter)
- Too close: electrode sticks; too far: arc extinguishes or spatters badly

### Striking the Arc
1. Hold electrode at 20–30° angle from vertical, pointing in direction of travel
2. Bring electrode down quickly and strike workpiece like striking a match (sweep and pull back)
3. Immediately raise to correct arc length when arc ignites
4. **Sticking problem:** If electrode sticks, release from holder immediately — prevents overheating. Twist electrode free; do not yank.

### Travel Speed
- Move electrode steadily along joint
- Correct speed: weld pool should be ~2× electrode diameter wide
- Too slow: excessive buildup; burn-through on thin metal
- Too fast: thin, ropy bead; insufficient penetration

### Current Limiter (for Battery Welding)
- Batteries deliver unlimited current during short-circuit (arc strike) — can blow end off electrode
- **Field fix:** Route electrode cable through a piece of resistance material:
  - A 6-inch section of nichrome wire (from old toaster/hair dryer)
  - A coil of 10–12 feet of 20 AWG steel wire
  - A large automotive resistor
- This limits startup current spike without significantly reducing arc amperage

---

## 19F. Safety Requirements

**Minimum protective equipment:**
- **Eye protection:** Welding helmet or goggles with **Shade 10–12 lens** (auto-darkening preferred; fixed shade lenses work)
  - Improvised: cardboard box with small piece of deeply tinted glass or several layers of very dark photographic negative
  - **DO NOT weld without eye protection — arc flash causes permanent cornea damage**
- **Skin protection:** Cover ALL exposed skin; welding arc emits UV radiation
  - Heavy leather gloves, long sleeves, leather apron or heavy denim
  - Synthetic fabrics melt onto skin — wear only cotton, wool, or leather
- **Breathing:** Weld in open air or well-ventilated area; welding fumes are toxic
- **Fire prevention:** Clear combustible materials from welding area; have water nearby
  - Cover batteries with non-flammable material (plywood, sheet metal) — sparks can explode hydrogen gas venting from batteries

**Battery hazards:**
- Batteries off-gas hydrogen when charging — keep flames away from batteries
- Do NOT weld directly above battery bank
- Maintain ventilation around batteries during welding sessions

---

## 19G. Improvised Welding Rods (If None Available)

### Coat Hanger Method
1. Straighten steel wire coat hanger
2. Coat in homemade flux: dissolve borax or potassium silicate in water; dip wire; allow to dry
3. Results are poor compared to commercial rods but may fuse metals in emergency

### Commercial Copper-Coated MIG Wire
- MIG wire without gas can be used in a pinch by dipping in flux
- Better conductivity than coat hanger; some penetration

---

# 10. CONCRETE & MORTAR MIXING RATIOS & CONSTRUCTION

## 20A. Understanding the Components

- **Cement (Portland Cement):** The binder — forms chemical bonds with water (hydration). Always the smallest component by volume.
- **Sand (Fine Aggregate):** Fills voids between coarse aggregate; provides workability; particle size < ¼ inch
- **Gravel/Stone (Coarse Aggregate):** Provides bulk strength; particle size ¼ inch to 1½ inches
- **Water:** Activates cement chemistry; must be clean (potable water preferred)
- **Lime:** Added to mortar for workability and flexibility; NOT added to structural concrete

**The ratio format:** Cement : Sand : Gravel (coarse aggregate)
Example: 1:2:4 means 1 part cement, 2 parts sand, 4 parts gravel

---

## 20B. Concrete Mix Ratios by Application

| Mix Ratio (C:S:G) | Application | Approx. Strength | Notes |
|---|---|---|---|
| 1:1:2 | Pre-stressed concrete, very high strength | 6,000+ psi | Requires careful mixing |
| 1:1.5:3 | Reinforced structures: beams, columns, slabs | 4,000 psi | Standard structural mix |
| 1:2:4 | General construction, floors, foundations | 3,000 psi | Most common residential mix |
| 1:2.5:3.5 | Light foundations, fence posts | 2,500 psi | Adequate for posts, light walls |
| 1:3:6 | Non-structural fill, walkways | 2,000 psi | Bulk, low-cost applications |

### Volume Ratios in Practice
For a 1:2:4 mix to make approximately 1 cubic foot of concrete:
- Cement: 0.15 cubic feet (~8.5 lbs)
- Sand: 0.30 cubic feet
- Gravel: 0.60 cubic feet
- Water: approximately 0.07 cubic feet (~4 lbs or ½ gallon)

**80-lb bag of premixed concrete covers approximately 0.6 cubic feet**

---

## 20C. Mortar Mix Ratios by Application

Mortar is used without gravel — only cement, sand (and optionally lime), and water.

### Standard Ratios

| Mix | Cement : Lime : Sand | Application | Strength |
|---|---|---|---|
| Type M | 1 : 0.25 : 3 | Below grade, retaining walls, heavy loads | Highest |
| Type S | 1 : 0.5 : 4.5 | Exterior masonry, moderate loads | High |
| Type N | 1 : 1 : 6 | General purpose, above-grade masonry | Medium |
| Type O | 1 : 2 : 9 | Interior, non-load bearing, soft stone | Low |
| Type K | 1 : 3 : 10 | Historic preservation, very soft materials | Lowest |

### Simplified Field Ratios (No Lime)

| Ratio (Cement:Sand) | Best Use |
|---|---|
| 1:3 | High strength — concrete blocks, hard brick |
| 1:4 | Normal brick, general masonry |
| 1:5 | Softer bricks |
| 1:6 | Very soft brick, optional 1 part lime for workability |

### Refractory Mortar (For Firebox/Forge)
- Mix: 1 part Portland cement + 2 parts fire clay + 3 parts fine silica sand
- Add water to workable paste
- OR use commercial castable refractory (Kastolite, Mizzou, or equivalent)
- Do NOT use standard Portland cement mortar in combustion areas — it will crack and fail

---

## 20D. Water-to-Cement Ratio

This is the single most important variable controlling concrete strength:

| W/C Ratio | Consistency | Result |
|---|---|---|
| 0.40 | Stiff, hard to work | Maximum strength; needs vibration to consolidate |
| 0.45–0.50 | Workable | Good balance for most work |
| 0.55–0.60 | Wet/pourable | Workable by hand; reduced strength |
| > 0.65 | "Soupy" | Poor strength; segregation; NOT acceptable |

**Rule:** Use minimum water needed for workability. Every additional ounce of water reduces strength.

**Field test (Slump Test):**
1. Fill a cone-shaped form (12" tall) with fresh concrete in three layers, rodding each
2. Lift form straight up and remove
3. Measure how much concrete settles (slumps):
   - 0–2 inches: Stiff mix (structural use)
   - 3–4 inches: Moderate (general use)
   - 5–7 inches: Wet mix (limited to certain applications)
   - >8 inches: Too wet

---

## 20E. Mixing Process

### Hand Mixing (Small Batches)
1. Measure ingredients by volume using consistent container (bucket)
2. Combine dry ingredients first (cement + sand + gravel): mix on flat surface with hoe until uniform color
3. Form a crater in the center of dry mix
4. Add 75% of calculated water into crater
5. Work dry material into water from edges; mix thoroughly
6. Add remaining water in small amounts only if needed
7. Total mixing time: 5 minutes minimum per batch

### Mechanical Mixing (Preferred)
1. Add half the water to mixer first
2. Add all aggregate (stone) and half the sand
3. Add all the cement
4. Add remaining sand
5. Add remaining water gradually while watching consistency
6. Mix for minimum 3 minutes after all materials added

---

## 20F. Curing

Concrete does not "dry" — it chemically cures. Water is needed for curing.

- **Minimum curing time:** 7 days for full structural loads
- **Full strength:** 28 days
- **Keep concrete moist** during first 7 days: cover with burlap, plastic sheeting, or wet sand; re-wet twice daily
- **Temperature:** Do not pour below 40°F (4°C) without cold-weather precautions; cement hydration stops at 32°F (0°C)
- **DO NOT** pour when freezing temperatures expected within 24 hours
- **Hot weather:** Pour in early morning; wet and cover to prevent rapid drying/cracking

---

## 20G. Reinforcement Basics (Rebar)

| Rebar Size | Diameter | Weight (lb/ft) | Common Use |
|---|---|---|---|
| #3 | 3/8" | 0.376 | Footings, small slabs |
| #4 | 1/2" | 0.668 | Standard slabs, walls |
| #5 | 5/8" | 1.043 | Beams, columns |
| #6 | 3/4" | 1.502 | Heavy beams, large piers |

**Basic reinforcement rules:**
- Rebar must have minimum **3-inch cover** from all concrete surfaces (prevents rust)
- Lap rebar splices minimum **12 inches** (24 inches for higher strength)
- For slabs: place rebar in center of slab thickness; use 12"×12" or 18"×18" grid pattern
- Tie intersections with wire tie to maintain position during pour

---

## 20H. Troubleshooting Common Problems

| Problem | Cause | Prevention/Fix |
|---|---|---|
| Cracking (shrinkage cracks) | Too much water; rapid drying | Reduce water; cure properly; add control joints |
| Spalling (surface flaking) | Freeze/thaw cycles; excess water | Use proper W/C ratio; air entrainment in cold climates |
| Honeycombing (voids) | Poor consolidation | Rod or vibrate concrete during pour |
| Dusting surface | Over-troweling when wet; excess water | Wait to trowel; reduce water |
| Slow strength gain | Cold temperatures | Keep above 50°F during first week; use accelerator additives |

---

---

# PART II — COMMUNICATIONS SURVIVAL KNOWLEDGE BASE
## Emergency & Off-Grid Communications Reference

---
*Always verify safety precautions before attempting any procedure.*

# 11. HAM RADIO LICENSE-FREE EMERGENCY OPERATION (FCC PART 97.403)

## 11A. The Core Rule — Exact Regulatory Text

**47 CFR § 97.403 — Safety of Life and Protection of Property:**

> *"No provision of these rules prevents the use by an amateur station of any means of radiocommunication at its disposal to provide essential communication needs in connection with the immediate safety of human life and immediate protection of property when normal communication systems are not available."*

**47 CFR § 97.405 — Station in Distress:**

> *"No provision of these rules prevents the use by an amateur station in distress of any means at its disposal to attract attention, make known its condition and location, and obtain assistance."*

Additionally: *"No provision of the rules prevents the use by a station, in that exceptional circumstance, of any means of radiocommunications at its disposal to assist a station in distress."*

---

## 11B. What This Means Practically

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

## 11C. RACES (Radio Amateur Civil Emergency Service)

- Established under Part 97 Subpart E
- Civil defense communications service
- Activated during war, national emergency, or disaster by government authority
- RACES operators must hold amateur license AND be enrolled in local civil defense organization
- RACES stations may operate on any amateur frequency with certain operational restrictions

---

## 11D. Emergency Calling Frequencies

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

## 11E. Phonetic Alphabet (NATO Standard)

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

## 11F. Standard Prowords and Emergency Protocol

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

## 11G. Legal Considerations & Risks

Real legal precedent exists: A California ham was prosecuted for transmitting on a Sheriff's Office administrative channel while calling for help for a mountain biker who fell — even though it was a genuine emergency. The prosecution was for using a non-amateur frequency without authorization, not for the emergency transmission itself.

**Key point:** Part 97.403 specifically covers **amateur radio frequencies**. Transmitting on police, fire, or other licensed services' channels without authorization is a separate regulatory issue even in emergencies.

**FCC enforcement in actual disasters:** Enforcement action against genuinely distressed, good-faith emergency transmissions is extremely rare. The risk of prosecution is real but small; the risk of dying without communication is immediate.

---

# 12. APRS — AUTOMATIC PACKET REPORTING SYSTEM

## 12A. What APRS Is

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

## 12B. Frequencies

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

## 12C. Network Architecture

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

## 12D. Path Settings

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

## 12E. Station Identifiers (SSID)

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

## 12F. Equipment Options

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

## 12G. Beacon Interval Recommendations

| Station Type | Suggested Interval | Reason |
|---|---|---|
| Moving vehicle | Every 30–60 seconds | Position changes rapidly |
| Slow moving (on foot) | Every 2–3 minutes | Balance position accuracy vs. channel load |
| Fixed station | Every 10–30 minutes | Infrequent updates sufficient |
| Emergency tracker | Every 30 seconds | Highest priority situation |

**Smart beaconing:** Better systems use speed and direction to auto-adjust interval — beacon more frequently when turning or accelerating; less when stationary or traveling straight.

---

## 12H. APRS Message Format

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

# 13. MESH NETWORKING — MESHTASTIC, LORA, AND AREDN

## 13A. What Meshtastic Is

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

## 13B. Hardware Platforms

| Device | Form Factor | Price (approx.) | Notes |
|---|---|---|---|
| LILYGO T-Beam | Board with GPS | $30–$50 | GPS built-in; good for tracking |
| Heltec LoRa 32 | Small board | $15–$25 | Compact; OLED display |
| RAK WisBlock | Modular | $20–$50 | Rugged; good for outdoor install |
| LILYGO T-Echo | Handheld | $40–$60 | E-ink display; battery included |
| Meshtastic T-Deck | Full keyboard device | $60–$80 | Best standalone UX |

---

## 13C. Frequency Regions and Channels

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

## 13D. Modem Presets (Speed vs. Range Trade-off)

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

## 13E. Initial Configuration Steps

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

## 13F. Node Roles

| Role | Behavior | Best Used For |
|---|---|---|
| CLIENT | Send, receive, and repeat messages intelligently | Most users |
| CLIENT_MUTE | Send and receive ONLY — never repeats | Handheld near a router node |
| ROUTER | Prioritizes repeating; minimal local processing | Fixed relay stations on hilltops |
| ROUTER_CLIENT | Router with client capability | Fixed nodes that also need messaging |
| REPEATER | Maximum repeating; no display use | Dedicated infrastructure node |

---

## 13G. Range Expectations

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

## 13H. GoTenna and Other Alternatives

| Product | Freq | Range | Encryption | Cost | Status |
|---|---|---|---|---|---|
| Meshtastic (DIY) | 915 MHz | 2–20 km | AES-256 | $20–$80 | Open source; active |
| goTenna Mesh | 902–928 MHz | ~6 km | AES-256 | Discontinued | No longer manufactured |
| Beartooth | 902–928 MHz | ~2 km | Yes | Discontinued | No longer sold |
| GMRS/FRS radios | 462–467 MHz | 1–5 km | None | $20–$100 | Legal; widely available |
| LoRa direct (custom) | Any ISM band | Varies | Optional | Varies | Requires programming |

**Note:** As of early 2026, Meshtastic with DIY hardware is the most actively maintained option with the largest community.

---

## 13I. AREDN — Amateur Radio Emergency Data Network (Wi-Fi Mesh)

AREDN is a separate mesh networking system that runs on modified commercial Wi-Fi hardware (Ubiquiti, Mikrotik, TP-Link, GL-iNet) and uses amateur radio frequencies. Unlike Meshtastic (text messages only), AREDN supports full IP networking — VoIP phones, video, email servers, and web applications.

**AREDN vs. Meshtastic comparison:**
| Feature | AREDN | Meshtastic |
|---|---|---|
| Hardware cost | $40–$200 per node | $20–$80 per node |
| Data rate | 1–54 Mbps | 0.25–37 kbps |
| License required | Technician+ (Part 97) | None (ISM band) |
| Range per hop | 1–40+ km (LOS) | 2–20 km |
| Best for | Full IP services, VoIP, video | Simple text/GPS mesh |
| Frequencies | 2.4, 3.4, 5.8 GHz; 900 MHz (HaLow) | 915 MHz / 868 MHz / 433 MHz |

### AREDN Frequency Bands
- **5.8 GHz:** Highest bandwidth; shortest range; best in open areas
- **2.4 GHz:** Medium bandwidth and range; most interference from consumer Wi-Fi
- **3.4 GHz:** Good balance; less crowded; some hardware required
- **900 MHz (HaLow / 802.11ah):** Longest range through foliage; newest addition; MorseMicro hardware

### AREDN Hardware (Common)
- **Ubiquiti NanoStation M5:** 5.8 GHz; directional; ~$50–$80; excellent long-range links
- **Ubiquiti NanoStation M2:** 2.4 GHz; directional; same form factor
- **Mikrotik hAP ac²:** Indoor multi-band node; good for local area coverage
- **GL-iNet GL-AR300M:** Compact; lower power; indoor use

### AREDN Initial Node Setup
1. Download AREDN firmware for your specific hardware model from arednmesh.org
2. Flash firmware via TFTP or standard upgrade process (hardware-specific — follow AREDN docs exactly)
3. Connect to node via Ethernet after flash; access 192.168.1.1 in browser
4. "Firstboot" setup wizard prompts for:
   - **Node name:** YourCALLSIGN-Node-Location (e.g., W1AW-Node-Hospital)
   - **Password:** Set admin password
   - **RF channel and bandwidth:** Match ALL nodes on your mesh
5. Set channel width: 10 MHz or 20 MHz (narrower = more range, less throughput)
6. Link to other AREDN nodes via RF or tunnel (internet)

### AREDN Channel and Link Budget
- **Channel width 5 MHz:** ~5 Mbps throughput; maximum range
- **Channel width 10 MHz:** ~10 Mbps throughput; good range balance
- **Channel width 20 MHz:** ~20 Mbps throughput; shorter range
- **Typical link budget:** Nodes with dish antennas can link 30–80 km in line of sight

### AREDN Routing Protocol
- Current versions (4.x+) use Babel routing protocol exclusively
- Babel is a distance-vector protocol that self-heals — routes automatically around failed nodes
- No configuration needed — routing is automatic once nodes are on same network

### AREDN Emergency Services
Over an AREDN mesh you can run:
- **Asterisk VoIP PBX:** Telephone service between shelters/hospitals
- **EchoMac/Allstar:** VoIP linking to ham repeater networks
- **Winlink RMS:** Email gateway accessible over mesh
- **ICS-213 forms server:** Incident Command System forms via browser
- **Cameras:** IP camera feeds for situational awareness
- **File servers:** Share maps, resource files across mesh

---

# 14. CRYSTAL RADIO CONSTRUCTION (NO POWER REQUIRED)

## 14A. Theory of Operation

A crystal radio requires no power source — it extracts energy directly from the radio waves it receives. The antenna collects radio energy from AM broadcast stations; the tuned circuit (coil + capacitor) selects one station; the diode detector converts the amplitude-modulated signal to audio; the earphone converts audio current to sound. Energy requirements are so small that the antenna acts as the power supply.

**Frequency range:** AM broadcast band, 530–1700 kHz (medium wave)
**Range:** Local stations within 30–50 miles; distant stations at night under good conditions
**Power required:** Zero

---

## 14B. Components Required

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

## 14C. Coil Winding Instructions

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

## 14D. Complete Schematic Description

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

## 14E. Antenna and Ground System

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

## 14F. Tuning and Reception

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

## 14G. Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| No sound at all | Broken connection; wrong diode type | Check all connections; verify germanium diode |
| Very faint sound | Poor antenna or ground | Extend antenna; improve ground |
| Multiple stations at once | Coil inductance too low; too few turns | Add more turns; use ferrite rod |
| Can't separate stations | Tuning too broad | Add tuning capacitor; use Litz wire coil |
| One station only | Antenna very long; strong local station | Add series resistor (1k ohm) to reduce overloading |

---

# 15. EMP HARDENING & FARADAY CAGE CONSTRUCTION

## 15A. Understanding EMP Threats

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

## 15B. Faraday Cage Theory

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

## 15C. DIY Faraday Cage Methods

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

## 15D. Items to Prioritize for EMP Protection

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

## 15E. Testing Your Protection

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

## 15F. Grid-Connected Equipment Warning

Electronics plugged into the power grid at the time of an EMP event may be damaged even inside a Faraday cage — because the power lines act as antennas delivering EMP energy directly to the device via its power cord.

**Rule:** Items inside Faraday cage protection must be UNPLUGGED from the grid, antennas, and all external connections. The cage only protects from external field exposure, not conducted energy.

---

## 15G. Grounding Debate

Whether to ground a Faraday cage is debated among experts:
- **Pro-grounding:** Provides a path for induced charge to dissipate safely
- **Anti-grounding:** Grounding wire itself can act as an antenna, conducting EMP into the cage

**Pragmatic answer for field use:** For portable protection (wrapped items, ammo cans), don't ground. For permanent installed room-sized shields, professional engineering guidance recommends grounding to a dedicated ground rod with very short, direct connection.

---

# 16. ONE-TIME PAD ENCRYPTION FOR FIELD USE

## 16A. What Makes the OTP Unbreakable

The One-Time Pad is the ONLY cryptographic system mathematically proven to be unbreakable (information-theoretically secure). It was used by intelligence services throughout the Cold War and remains valid today.

**Four absolute requirements — ALL must be met:**
1. Key must be **at least as long** as the message
2. Key must be **truly random** (not pseudo-random, not computer-generated without hardware randomness)
3. Key must **never be reused** — not in part, not in whole
4. Key must be **kept completely secret** by both parties

If any single requirement is violated, the system degrades or completely fails.

---

## 16B. How Encryption and Decryption Work

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

## 16C. Generating Keys in the Field

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

## 16D. Practical Field Key Distribution

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

## 16E. Operational Security (OPSEC) for OTP Use

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

## 16F. Message Formatting for Field Use

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

# 17. NVIS ANTENNA THEORY & CONSTRUCTION

## 17A. What NVIS Does

Near Vertical Incidence Skywave (NVIS) enables regional HF radio coverage — 0 to 650 km (0–400 miles) — without any repeaters or infrastructure. It fills the gap between:
- **Ground wave** (effective out to ~80 km / 50 miles)
- **Standard skywave** (effective from ~500 km to thousands of km)

The "skip zone" between these ranges has no coverage with standard antennas — NVIS eliminates this gap.

**How it works:** Radio waves are transmitted nearly straight up (>75° elevation angle) → ionosphere refracts them back downward → they land in a circular pattern centered on the transmitter → typical coverage circle: 300–650 km radius

---

## 17B. Optimal Frequencies for NVIS

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

## 17C. Antenna Height: The Critical Variable

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

## 17D. NVIS Antenna Types

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

## 17E. Feed Line and Connections

- **Coax:** RG-58 (small, lightweight) or RG-8X (lower loss) for runs under 100 feet; RG-8 for longer runs
- **Balun:** Use a 1:1 current balun (choke) at the feedpoint — prevents feed line radiation which distorts pattern
  - DIY choke balun: Wind 10 turns of coax around a 4-inch ferrite toroid (type 61 or 43)
- **Impedance:** Horizontal dipole at NVIS heights presents impedance lower than 75 ohms (typically 30–60 ohms) — matching is imperfect with 50-ohm coax but acceptable; SWR typically 1.5:1 or less
- **Antenna tuner:** An antenna tuner (ATU) corrects any impedance mismatch; most HF radios include one

---

## 17F. Practical NVIS Operating Tips

1. **Use SSB (single sideband) voice:** LSB below 10 MHz (standard), USB above
2. **Power:** 100 watts is excellent for NVIS; even 25–50 watts achieves strong regional coverage
3. **Net frequency:** Establish a prearranged frequency for regular check-ins
4. **Skip zone confusion:** Someone 30 miles away may hear you perfectly; someone 100 miles away may not — this is normal NVIS behavior
5. **Night vs. day:** On 80 meters, your coverage area expands dramatically at night; stations 500+ miles can hear you on a frequency that barely covers 100 miles by day

---

# 18. HF PROPAGATION PREDICTION WITHOUT INTERNET

## 18A. The Ionosphere Layers

Understanding these layers allows prediction without tools:

| Layer | Altitude | Exists | Function |
|---|---|---|---|
| D layer | 60–90 km | Day only | Absorbs HF signals (increases LUF); eliminates at night |
| E layer | 90–120 km | Day (stronger) | Can reflect signals at lower HF frequencies |
| F1 layer | 150–220 km | Day only | Merges with F2 at night |
| F2 layer | 220–800 km | Day and night | Primary long-distance HF reflection layer |

**The critical insight:** D-layer disappears at night. This eliminates high absorption of lower HF frequencies (160m, 80m) at night, dramatically increasing their range.

---

## 18B. Key Propagation Parameters

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

## 18C. Predicting Conditions Without Internet

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

## 18D. Band-by-Band Quick Reference

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

## 18E. Memorize These Key Numbers

- **Critical frequency (foF2) maximum (solar max):** ~12 MHz tropics, ~9 MHz mid-latitudes
- **Critical frequency minimum (solar min):** ~2–4 MHz nighttime, ~5–7 MHz daytime
- **MUF = foF2 × 3–5** (multiply by ~5 for 1,000-km paths, ~3.5 for 500-km paths)
- **OWF = MUF × 0.85** (best operating frequency for 90% reliability)
- **D-layer absorption cutoff:** Disappears within 30 minutes after local sunset
- **28-day solar rotation:** Sunspot conditions repeat roughly every 28 days
- **Solar cycle:** ~11 years peak-to-peak

---

# 19. BAOFENG UV-5R PROGRAMMING FOR EMERGENCY USE

## 19A. Radio Specifications

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

## 19B. Key Frequencies to Pre-Program

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

## 19C. Manual Keypad Programming (Without Computer)

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

## 19D. Programming with CHIRP Software

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

## 19E. Radio Settings Checklist (Menu Setup)

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

## 19F. Antenna Notes

The stock UV-5R antenna is mediocre. For better performance:
- **Nagoya NA-771:** Dual-band whip; significant improvement over stock; ~$10–$15
- **Nagoya NA-701:** Shorter; slightly less gain; more portable
- For base station use: any SMA female to SO-239 adapter + external antenna dramatically improves range

**Antenna length reference:**
- Quarter-wave 2m (146 MHz): 19.1 inches (48.5 cm)
- Quarter-wave 70cm (446 MHz): 6.3 inches (16 cm)
- A piece of wire cut to these lengths and plugged in (with adapter) = basic field antenna

---

# 20. WINLINK — EMAIL OVER HAM RADIO

## 20A. What Winlink Is

Winlink Global Radio Email (WL2K) is a worldwide radio messaging system allowing licensed amateur radio operators to send and receive email — including attachments — via radio instead of the internet. The network operates completely without the internet when needed.

**Critical uses:**
- Email when internet is down or unavailable
- Position reporting and welfare messages during disasters
- Weather bulletins reception
- ICS-213 forms and other structured emergency management forms
- Bridge between radio operators and the non-ham public (email to/from any address)

---

## 20B. System Architecture

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

## 20C. What You Need

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

## 20D. Winlink Modes of Operation

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

## 20E. HF Gateway Frequencies (Common U.S. RMS Channels)

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

## 20F. Setting Up Winlink Express

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

## 20G. Radio Settings for Winlink

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

## 20H. Privacy Notice

Per FCC regulations, all amateur radio transmissions must be unencrypted and identifiable. **Winlink messages are NOT private.** They are transmitted in the clear and can be monitored by anyone with appropriate receiving equipment. Do not transmit:
- Passwords
- Financial information
- Personally identifying information you wish to keep private
- Any material prohibited from amateur radio (commercial content, intentional obscenity)

Use Winlink for: Welfare messages, logistics coordination, position reports, requests for assistance, tactical information.

---

## 20I. Offline Reference — Standard Welfare Message Format

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

---

## APPENDIX D: WWV/WWVH PROPAGATION REFERENCE (RECEIVE ONLY)

WWV (Fort Collins, CO) and WWVH (Kauai, HI) broadcast time signals and propagation information on standard HF frequencies. Listen to these to assess current ionospheric conditions.

### WWV Frequencies and Power
| Frequency | Power | Notes |
|---|---|---|
| 2.5 MHz | 2,500 W | Low frequency; best for ground wave; mainly nighttime skip |
| 5 MHz | 10,000 W | Good regional coverage; often reliable |
| 10 MHz | 10,000 W | Reliable daytime; fades at night |
| 15 MHz | 10,000 W | Best daytime; low in solar minimum |
| 20 MHz | 2,500 W | High frequency; needs high solar activity |
| 25 MHz | 2,500 W | Experimental; only useful in high solar flux |

### Using WWV for Band Assessment
1. Try 10 MHz first — if clear, 40m/30m likely open
2. If 15 MHz clear, 20m likely open
3. If only 5 MHz or 2.5 MHz audible, high bands are closed; use 40m/80m for long-range
4. Compare signal strength at different times of day to track ionospheric changes

### WWV Broadcast Schedule (Each Hour)
- :00 Announcement and UT1 correction
- :14 to :15 WWV voice propagation report (geomagnetic conditions)
- :45 to :46 WWVH voice propagation report
- Continuous: BCD time code on 100 Hz subcarrier
- Space weather alerts: Broadcast at top of hour and as conditions change

### Reading the Solar Flux and K-index
**Solar Flux Index (SFI):** Measure of solar radio emission at 10.7 cm
- SFI < 70: Poor; high bands mostly closed
- SFI 70–100: Fair; 20m open during day; 15m marginal
- SFI 100–150: Good; 20m/15m open; 10m possible
- SFI > 150: Excellent; 10m open; DX conditions on all bands

**K-index (geomagnetic activity):**
- K 0–1: Quiet; excellent HF conditions
- K 2–3: Unsettled; normal conditions
- K 4: Active; some HF degradation, especially polar paths
- K 5+: Minor storm; significant HF disruption
- K 7+: Major storm; HF may be completely unusable; NVIS may fail

---

## APPENDIX E: WINLINK HF CHANNEL LIST (OFFLINE REFERENCE)

Common U.S. Winlink RMS channels (USB dial frequency — set radio to this, software uses higher audio tone):

| Band | Dial Frequency (kHz USB) | Notes |
|---|---|---|
| 80m | 3590.0, 3608.5, 3625.0 | Regional; short-range |
| 40m | 7101.0, 7103.5, 7171.0 | Most reliable for mid-range |
| 30m | 10147.5 | Good reliability; medium range |
| 20m | 14101.0, 14109.5 | Long-range; open daytime |
| 17m | 18105.5 | Good daytime DX |
| 15m | 21395.0 | High solar flux needed |
| 10m | 28395.0 | Only in high solar flux |
| VHF | Local repeater or simplex | Check local ARES/RACES plan |

**Connecting sequence:**
1. Set radio to USB mode at dial frequency above
2. Open Winlink Express → Open Session → VARA HF (or ARDOP HF)
3. Click "Scan" to auto-try multiple channels OR type specific RMS callsign
4. Software negotiates connection automatically; sends/receives queued messages
5. Session ends automatically when transfer complete

---

*End of KB_Engineering_Comms.md — Combined Engineering and Communications Survival Knowledge Base*
*This document covers 20 major topics (10 engineering + 10 communications) compiled for offline reference.*
*Total content: Water Wheels, Rocket Stoves, Solar Stills, Engine Troubleshooting, Blacksmithing, Rope Making, Bicycle Generators, Plumbing, Improvised Welding, Concrete, Ham Radio Emergency Ops, APRS, Mesh Networks (Meshtastic + AREDN), Crystal Radio, EMP Hardening, One-Time Pad Encryption, NVIS Antennas, HF Propagation, Baofeng Programming, and WINLINK.*
*All amateur radio operations require valid FCC license except as specified under 47 CFR § 97.403.*
*Always comply with local regulations and operate within legal power limits.*
*Compiled March 2026.*
