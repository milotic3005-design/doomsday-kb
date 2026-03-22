# Engineering Survival Knowledge Base
## Comprehensive Reference for Off-Grid and Emergency Engineering
*Compiled March 2026 — Intended for use without internet access*

---

# TABLE OF CONTENTS

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

---

# 1. WATER WHEEL & GRAVITY-FED WATER SYSTEMS (MICRO-HYDRO POWER)

## 1A. Fundamental Concepts

Micro-hydro power is one of the most consistent renewable energy sources available. A flowing stream or river with even modest elevation change can generate continuous electricity — unlike solar or wind, which are intermittent. Systems up to 100 kW are classified as "micro-hydro." A 10 kW system can power a large home or small farm.

**Key principle:** Power = (Head × Flow × Efficiency × 9.81) / 1000 in kilowatts
Where:
- Head = vertical drop in meters
- Flow = water volume in cubic meters per second
- Efficiency = 0.50 to 0.85 depending on system type

**Rule of thumb:** A system with 50–70% efficiency (typical) can be estimated with simpler tables.

---

## 1B. Assessing Your Site: Head & Flow

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

## 1C. Turbine & Waterwheel Types

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

## 1D. DIY Waterwheel Construction

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

## 1E. Gravity-Fed Water Distribution Systems

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

## 1F. Generator & Electrical Integration

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

## 2A. How a Rocket Stove Works

The rocket stove achieves high efficiency through two principles:
1. **Insulated combustion:** Wood burns in a heavily insulated L-shaped or J-shaped combustion chamber, reaching very high temperatures (1,400–1,600°C at the white-hot core)
2. **Thermal mass storage:** Hot exhaust gases pass through an extensive thermal mass (cob, brick, or concrete bench), releasing heat slowly over many hours after the fire goes out

The vertical "heat riser" inside the barrel or bell creates a strong chimney draft — so strong the fire "roars" like a rocket engine, hence the name. Wood is fed horizontally; gases rise vertically.

**Fuel savings:** 80–90% less wood than a conventional wood stove for equivalent heat output.
**Heat retention:** 20+ hours of steady warmth from a few hours of burning.

---

## 2B. Three Main Components

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

## 2C. Critical Dimensions & Specifications

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

## 2D. Materials

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

## 2E. Step-by-Step Construction (6-Inch Brick System)

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

## 2F. Troubleshooting

| Problem | Likely Cause | Fix |
|---|---|---|
| Smoke blows into room | Chimney too short, or wet wood | Extend chimney; dry wood to <20% moisture |
| Poor draft, weak fire | Constriction in exhaust path | Check all pipe joints; remove blockages |
| Fire goes out quickly | Air supply restricted | Open feed tube slightly; remove ash buildup |
| Bench not warming | Exhaust pipe clogged with creosote | Clean pipe annually with chimney brush |
| Barrel overheating | Gap between heat riser and barrel too small | Rebuild with correct 1.5-inch clearance |

---

# 3. SOLAR STILL CONSTRUCTION FOR WATER COLLECTION

## 3A. How Solar Stills Work

Solar stills use solar energy to evaporate water (from soil, contaminated sources, or vegetation), then condense the water vapor on a cooler surface, collecting the purified distillate. The process removes salts, heavy metals, and microbiological contaminants.

**Output reality check:**
- DIY ground still: ~1 quart (1 liter) per day in good sun
- Well-built basin still: 4–6 liters per square meter per day
- Desert survival production is often only 240 mL/day — less than the sweat lost digging it
- Solar stills are supplementary water sources, not primary survival water supplies

---

## 3B. Ground Solar Still (Field Construction)

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

## 3C. Vegetation Bag Still

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

## 3D. Solar Still Output by Method

| Method | Daily Output | Effort | Notes |
|---|---|---|---|
| Ground pit still | 240 mL – 1 liter | High | May cost more water in sweat than gained |
| Vegetation bag | 0.5–1 liter/bag | Low | Best in leafy environments |
| Basin still (passive) | 4–6 liters/m² | High (construction) | Best long-term installation |
| Commercial inflatable (Aquamate) | 0.5–2 liters | None | Military-grade, prepackaged |

---

# 4. ENGINE TROUBLESHOOTING WITHOUT ELECTRONICS

## 4A. Core Diagnostic Philosophy

Without computers or scanners, diagnostics follow a logical sequence:

**The Four Requirements of any combustion engine:**
1. **Fuel** — correct amount, properly atomized, reaching cylinder
2. **Air** — unrestricted intake, correct mixture
3. **Spark** (gasoline) or **Compression heat** (diesel) — timed correctly
4. **Compression** — rings and valves sealing properly

Eliminate each requirement as the problem before moving to the next. Always start with the simplest, most accessible checks.

---

## 4B. Gasoline Engine Troubleshooting (Carbureted/Points Ignition)

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

## 4C. Diesel Engine Troubleshooting (Mechanical)

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

## 4D. Mechanical Engine Sounds Diagnostic Guide

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

## 4E. Field Compression Boost Trick

If an engine has borderline compression and is hard to start in cold weather:
1. Pour 1 tablespoon of fresh motor oil into each cylinder through spark plug hole
2. Crank engine briefly (without spark) to coat cylinder walls
3. Reinstall plugs and start — oil temporarily seals worn rings

---

# 5. BLACKSMITHING BASICS: FORGE CONSTRUCTION & METALWORKING

## 5A. Essential Equipment

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

## 5B. Forge Construction: Solid Fuel (Coal/Coke/Charcoal)

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

## 5C. Forge Fuels

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

## 5D. Basic Metalworking Techniques

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

## 5E. Heat Treating (Hardening & Tempering Tool Steel)

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

## 5F. Starting Materials (Field Accessible)

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

## 6A. Best Plant Sources by Region

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

## 6B. Fiber Preparation

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

## 6C. The Reverse Wrap Technique (Two-Ply Cordage)

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

## 6D. Braiding (Three-Strand)

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

## 6E. Sinew Cordage (Animal-Based)

- **Source:** Large tendons from back legs and along spine of deer, elk, moose
- **Harvest:** Remove fresh tendon; pound with rock to separate fibers; dry flat
- **Preparation:** Dried sinew must be moistened with saliva before use — becomes tacky
- **Strength:** One strand holds 150+ lbs
- **Uses:** Bowstrings, lashings, bindings, stitching hides
- **Special property:** Shrinks as it dries — wrappings need no knot; bond is locked by drying

---

## 6F. Strength Comparison

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

## 6G. End Finishing

- **To prevent unraveling:** Tie simple overhand knot at end; or dip end in pine pitch
- **Whipping:** Wrap end tightly with thin thread for 1 inch; tie off with half-hitch
- **Weave-back:** Fold end back into last 2 inches of cord and twist in place

---

# 7. BICYCLE-POWERED GENERATORS & MECHANICAL ADVANTAGE

## 7A. Physics of Human Power Output

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

## 7B. The RPM Gap Problem

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

## 7C. Drive System Options (Ranked by Efficiency)

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

## 7D. Construction Plans (Tire Friction Method — Simplest)

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

## 7E. Generator Alternatives to Treadmill Motors

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

## 7F. Realistic Power Budget

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

## 8A. Soldering Copper Pipe

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

## 8B. PEX (Cross-Linked Polyethylene) Pipe

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

## 8C. Well Pump Troubleshooting

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

## 9A. Theory and Requirements

Standard stick welding (SMAW) operates at 20–45 volts DC with 75–200+ amps. A single 12V car battery delivers correct amperage but insufficient voltage. Three 12V batteries wired in series = 36V — minimum for sustained arc welding.

**Minimum equipment:**
- 3 × 12V car batteries (more = better sustained arc)
- Jumper cables (heavy gauge — 2 AWG or thicker; 4 AWG minimum)
- Welding electrodes (1/8" diameter, 6010, 6011, or 6013 rods)
- Improvised electrode holder (see below)
- Welding protection (see safety section)

---

## 9B. Battery Wiring (Series Connection)

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

## 9C. Electrode Holder Construction

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

## 9D. Electrode Selection

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

## 9E. Welding Technique

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

## 9F. Safety Requirements

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

## 9G. Improvised Welding Rods (If None Available)

### Coat Hanger Method
1. Straighten steel wire coat hanger
2. Coat in homemade flux: dissolve borax or potassium silicate in water; dip wire; allow to dry
3. Results are poor compared to commercial rods but may fuse metals in emergency

### Commercial Copper-Coated MIG Wire
- MIG wire without gas can be used in a pinch by dipping in flux
- Better conductivity than coat hanger; some penetration

---

# 10. CONCRETE & MORTAR MIXING RATIOS & CONSTRUCTION

## 10A. Understanding the Components

- **Cement (Portland Cement):** The binder — forms chemical bonds with water (hydration). Always the smallest component by volume.
- **Sand (Fine Aggregate):** Fills voids between coarse aggregate; provides workability; particle size < ¼ inch
- **Gravel/Stone (Coarse Aggregate):** Provides bulk strength; particle size ¼ inch to 1½ inches
- **Water:** Activates cement chemistry; must be clean (potable water preferred)
- **Lime:** Added to mortar for workability and flexibility; NOT added to structural concrete

**The ratio format:** Cement : Sand : Gravel (coarse aggregate)
Example: 1:2:4 means 1 part cement, 2 parts sand, 4 parts gravel

---

## 10B. Concrete Mix Ratios by Application

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

## 10C. Mortar Mix Ratios by Application

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

## 10D. Water-to-Cement Ratio

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

## 10E. Mixing Process

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

## 10F. Curing

Concrete does not "dry" — it chemically cures. Water is needed for curing.

- **Minimum curing time:** 7 days for full structural loads
- **Full strength:** 28 days
- **Keep concrete moist** during first 7 days: cover with burlap, plastic sheeting, or wet sand; re-wet twice daily
- **Temperature:** Do not pour below 40°F (4°C) without cold-weather precautions; cement hydration stops at 32°F (0°C)
- **DO NOT** pour when freezing temperatures expected within 24 hours
- **Hot weather:** Pour in early morning; wet and cover to prevent rapid drying/cracking

---

## 10G. Reinforcement Basics (Rebar)

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

## 10H. Troubleshooting Common Problems

| Problem | Cause | Prevention/Fix |
|---|---|---|
| Cracking (shrinkage cracks) | Too much water; rapid drying | Reduce water; cure properly; add control joints |
| Spalling (surface flaking) | Freeze/thaw cycles; excess water | Use proper W/C ratio; air entrainment in cold climates |
| Honeycombing (voids) | Poor consolidation | Rod or vibrate concrete during pour |
| Dusting surface | Over-troweling when wet; excess water | Wait to trowel; reduce water |
| Slow strength gain | Cold temperatures | Keep above 50°F during first week; use accelerator additives |

---

*End of KB_Engineering.md — Engineering Survival Knowledge Base*
*This document contains 10 major engineering topics compiled for offline reference.*
*Always verify safety precautions before attempting any procedure.*
