# Educational Engineering Supplement
## Open Educational Reference — Physics, Electronics, Construction & Mechanical Systems

*Based on MIT OpenCourseWare, Khan Academy Physics/Engineering curriculum, and open-access technical resources.*

---

## PART 1: APPLIED PHYSICS FOR ENGINEERING

### Mechanics and Force

**Newton's Laws** (applied to structures and tools):
1. **Inertia**: Objects at rest stay at rest; moving objects stay moving. Application: water hammer in pipes, momentum in tools
2. **F = ma**: Force = mass × acceleration. Application: structural loads, projectile force, tool impact
3. **Equal/opposite reactions**: Application: recoil in firearms, rocket propulsion, arch structures

**Simple Machines** (the foundation of all mechanical advantage):

| Machine | Mechanical Advantage | Formula | Example |
|---------|---------------------|---------|---------|
| Lever | MA = effort arm / resistance arm | MA = d₁/d₂ | Crowbar, scissors |
| Wheel & Axle | MA = wheel radius / axle radius | MA = R/r | Steering wheel, screwdriver |
| Pulley (fixed) | 1 | — | Direction change only |
| Pulley (movable) | 2 | — | Doubles force |
| Block and Tackle | n (number of rope segments) | MA = n | Hoisting heavy loads |
| Inclined Plane | MA = length/height | MA = L/h | Ramps, wedges |
| Screw | MA = 2πr/pitch | — | Fasteners, jacks |

**Practical Example — Block and Tackle**:
A 4-pulley system (2 fixed, 2 movable) gives MA of 4
→ Can lift 400 kg load with 100 kg of force
→ But must pull 4 meters of rope for every 1 meter of lift
→ Work in = Work out (ignoring friction)

**Structural Load Principles**:
- **Dead load**: Weight of structure itself
- **Live load**: Weight of occupants, furniture, snow
- **Wind load**: Lateral force (increases with height²)
- **Seismic load**: Ground motion, horizontal forces
- **Safety factor**: Actual load capacity ÷ Design load (typically 2–4 for structures)

**Beam Loading**:
- Simple beam (supported at both ends): maximum stress at center bottom (tension) and center top (compression)
- Cantilever (one end fixed): maximum stress at fixed support
- I-beam cross-section: efficient because material is where stress is highest (top and bottom flanges)
- Span-to-depth ratio: typical floor beams need depth of span/20 minimum

**Compression vs Tension**:
- **Compression-strong materials**: concrete, stone, brick — good for columns, arches
- **Tension-strong materials**: steel, wood, rope — good for beams, cables
- **Wood**: strong in both, but better in compression along grain
- **Arches**: convert loads to compression, eliminating tension — why ancient stone arches stand

### Fluid Mechanics

**Pascal's Law**: Pressure applied to enclosed fluid transmits equally in all directions
- Application: hydraulic jacks, brake systems
- Hydraulic advantage: F_out/F_in = A_out/A_in (piston areas)
- 1 kg over 1 cm² = 100 kg over 100 cm² (hydraulic press)

**Bernoulli's Principle**: As fluid speed increases, pressure decreases
- P + ½ρv² + ρgh = constant
- Applications: carburetor function, venturi meters, why wings generate lift
- Practical: water flowing through constriction speeds up and pressure drops

**Head Pressure**: Water pressure from elevation
- 1 meter of water height = 0.0981 bar = 1.42 psi
- 10 meters water = ~1 atm = 14.7 psi
- Water tower at 30 m elevation → ~3 bar pressure at base
- Practical: elevate water tank above point of use for gravity-fed systems

**Flow Rate**: Q = A × v (cross-section area × velocity)
- Doubling pipe diameter → 4× cross-section → 4× flow at same velocity
- Or: half the velocity needed to maintain same flow rate
- Pipe friction losses: Hazen-Williams equation (practical)
  - 1-inch pipe: loses ~20 psi per 100 feet at 5 GPM
  - 2-inch pipe: loses ~2 psi per 100 feet at 5 GPM (10× less!)

**Siphon Principle**:
- Works by atmospheric pressure pushing fluid over obstacle
- Maximum theoretical siphon height: ~10.3 meters (1 atm)
- Practical limit: ~8 meters (to maintain flow and prevent cavitation)
- Start: fill hose completely with liquid, then place lower end below source
- Self-priming: raise intake end, suck from lower end until flow starts

### Thermodynamics

**Heat Transfer Methods**:
- **Conduction**: heat through direct contact (metals excellent, wood poor)
- **Convection**: heat through fluid motion (warm air rises, cold sinks)
- **Radiation**: electromagnetic waves (infrared) — no medium needed

**R-Value** (insulation effectiveness): higher = better
- Air space: R-1 per inch
- Fiberglass batts: R-3.5 per inch
- Rigid foam: R-5–7 per inch
- Spray foam: R-6–7 per inch
- 6-inch wall: target R-19 minimum for cold climates

**Thermal Mass**: absorbs and stores heat, moderates temperature swings
- Concrete: high thermal mass, good for passive solar
- Water: excellent thermal mass (4× concrete per kg)
- Adobe/rammed earth: traditional thermal mass building

**Passive Solar Principles**:
- South-facing windows (in Northern Hemisphere) maximize winter sun gain
- Roof overhang: sized to block summer sun (high angle) but allow winter sun (low angle)
- For 40° latitude: overhang depth = 0.5 × window height
- Thermal mass on south interior walls: absorbs day heat, releases at night
- Night insulation on windows (curtains, shutters) reduces heat loss by 50%+

---

## PART 2: ELECTRICAL SYSTEMS

### Fundamentals of Electricity

**Ohm's Law**: V = I × R
- Voltage (V): electrical pressure, measured in Volts
- Current (I): flow of electrons, measured in Amperes
- Resistance (R): opposition to flow, measured in Ohms

**Power Law**: P = V × I = I²R = V²/R
- Power in Watts
- Energy = Power × Time (Watt-hours, kWh)

**Key Relationships** (memorize for field calculations):
```
V = IR        I = V/R       R = V/I
P = VI        I = P/V       V = P/I
P = I²R       P = V²/R
Energy (Wh) = P × hours
```

**Example**: A 12V car battery powering a 60W light bulb:
- Current = P/V = 60/12 = 5 Amps
- Resistance = V/I = 12/5 = 2.4 Ohms
- 100Ah battery will power it for: 100Ah ÷ 5A = 20 hours (theoretical)
  - Practical (80% DoD): ~16 hours

**Series vs Parallel Circuits**:

*Series*:
- Current same everywhere
- Voltages add: V_total = V1 + V2 + V3
- Resistances add: R_total = R1 + R2 + R3
- One failure breaks entire circuit
- Battery cells in series: voltages add (6V + 6V = 12V)

*Parallel*:
- Voltage same across all branches
- Currents add: I_total = I1 + I2 + I3
- Resistance: 1/R_total = 1/R1 + 1/R2 + 1/R3
- One failure doesn't stop others
- Battery cells in parallel: capacity adds (100Ah + 100Ah = 200Ah at same voltage)

**Wire Sizing** (AWG — American Wire Gauge, lower = thicker):
| AWG | Max Current | Common Use |
|-----|------------|------------|
| 18 | 10A | Low-voltage lighting |
| 16 | 13A | Extension cords |
| 14 | 15A | Home 15A circuits |
| 12 | 20A | Home 20A circuits |
| 10 | 30A | Dryer, water heater |
| 8 | 40A | Range, EV charger |
| 6 | 55A | Large appliances |
| 4 | 70A | Main feeder runs |
| 2 | 95A | Service panels |

**Voltage Drop Calculation**:
- VD = (2 × length × current × resistance_per_foot)
- For 12V systems: keep runs short — voltage drop matters more than 120V
- Rule: <3% voltage drop for critical circuits, <5% for others
- Increase wire gauge for long runs

### Off-Grid Power Systems

**Solar Power Basics**:

**Panel Ratings**:
- Watts (peak): power at Standard Test Conditions (25°C, 1000 W/m² irradiance)
- Actual output: 70–80% of rated in real conditions
- Voc: open-circuit voltage (no load)
- Vmp: maximum power point voltage (typical operating voltage)
- Isc: short-circuit current (max current, no useful power)
- Imp: current at max power

**System Design Process**:
1. Calculate daily energy needs (Wh):
   - List all loads × hours/day = Wh each
   - Sum all Wh/day = total daily energy

2. Determine battery bank size:
   - Battery bank Wh = Total daily Wh ÷ depth of discharge × days of autonomy
   - Lead-acid: use 50% DoD maximum; AGM: 50-60%; LiFePO4: 80%
   - Example: 1000 Wh/day × 2 days autonomy ÷ 0.5 = 4000 Wh bank

3. Calculate panel array size:
   - Peak sun hours for your location (find solar map online or estimate)
   - Panel Watts needed = Total daily Wh ÷ peak sun hours ÷ system efficiency (0.8)
   - Example: 1000 Wh ÷ 5 hours ÷ 0.8 = 250 W of panels

4. Select charge controller:
   - Current = Array Watts ÷ Battery Voltage
   - Add 25% safety margin
   - MPPT controller: more efficient (10-30% more), required for panels > battery voltage
   - PWM controller: simpler, cheaper, adequate for small systems

5. Inverter sizing:
   - Continuous watts ≥ sum of all loads run simultaneously
   - Peak/surge rating: motors need 3-5× running watts at startup
   - Pure sine wave for sensitive electronics; modified sine adequate for resistive loads

**Battery Types Comparison**:
| Type | Cycle Life | DoD | Cost | Maintenance |
|------|-----------|-----|------|-------------|
| Flooded Lead-Acid | 300–500 | 50% | Low | Monthly |
| AGM | 400–700 | 50-60% | Medium | None |
| Gel | 500–1000 | 60% | Medium | None |
| LiFePO4 | 2000–6000 | 80% | High | None |

**Battery Maintenance (Flooded Lead-Acid)**:
- Specific gravity: 1.265 = fully charged; 1.120 = fully discharged
- Check electrolyte level monthly — top with distilled water ONLY (not tap)
- Equalization charge quarterly: controlled overcharge to desulfate plates
- Keep terminals clean — petroleum jelly prevents corrosion
- Store fully charged — lead-acid self-discharges and sulfates when left discharged

**Wind Power Basics**:
- Power output: P = ½ρAv³ (cube of wind speed — doubling speed = 8× power)
- Cut-in speed: ~7 mph (3 m/s) for small turbines
- Rated speed: ~25 mph (11 m/s)
- Cut-out speed: ~55 mph to prevent damage
- Siting: 30 feet above any obstruction within 300 feet

### Generator Operation and Maintenance

**Generator Sizing**:
- Running load: total watts all simultaneous loads
- Starting load: running load + largest motor starting surge (typically 3×)
- Rule: size generator at 125% of expected running load

**Generator Types**:
- Conventional: direct engine-generator coupling; consistent RPM; noisy; less efficient at partial load
- Inverter generator: variable engine speed; quieter; more fuel efficient at partial load; cleaner power (safe for electronics)

**Maintenance Schedule**:
- After first 5 hours: change break-in oil
- Every 25 hours (or annually): change oil (SAE 10W-30 or as specified)
- Every 50 hours: clean/inspect air filter
- Every 100 hours: replace spark plugs, fuel filter
- Every 200 hours: inspect/clean carburetor
- Storage: add fuel stabilizer, run 10 min to distribute; or drain carburetor completely

**Starting a Flooded Generator**:
1. Turn fuel valve ON
2. Set choke to FULL CHOKE (cold engine)
3. Move throttle to half
4. Pull recoil starter (or turn electric start)
5. As engine warms, gradually open choke
6. Never run under load until fully warmed (1-2 minutes)

**Carburetor Cleaning**:
- Varnish from ethanol-blended fuel clogs jets
- Remove and disassemble
- Soak in carburetor cleaner 30 min
- Clear all jets with thin wire/compressed air
- Most small engine "won't start after storage" = clogged carburetor

---

## PART 3: CONSTRUCTION AND SHELTER

### Structural Engineering Basics

**Load Path**: How forces travel through structure to ground
- Roof loads → rafters → walls → foundation → soil
- Every element must be able to carry loads above it
- Weak point in chain = structural failure

**Foundation Types**:
- **Slab**: concrete poured directly on grade; economical; good for warm climates
- **Crawlspace**: wall foundation; access for utilities; better in moist climates
- **Full basement**: most space; below frost line; expensive
- **Pier and beam**: columns supporting floor; good for sloped sites, flood zones
- **Rubble trench**: alternative: rubble-filled trench to below frost line; no concrete needed

**Frost Depth** (critical for foundation placement):
- Footings must go below frost line to prevent heaving
- Northern US/Canada: 48–60 inches
- Middle US: 24–36 inches
- Southern US: 0–12 inches
- Find local frost depth from county building department

**Wall Framing (Platform Frame Construction)**:
- **Stud**: vertical 2×4 or 2×6, spaced 16" or 24" on center
- **Top plate**: double 2× horizontal at top of wall
- **Bottom plate (sill plate)**: 2× horizontal at base (pressure-treated if touching concrete)
- **Header**: beam over opening (doors, windows); carries load around opening
- **King stud**: full-height stud beside header
- **Trimmer stud**: shorter stud supporting header ends
- Header size rule: 1" header depth per foot of span (minimum); double 2×10 for 5-foot opening

**Roof Geometry**:
- **Pitch**: rise over run, expressed as X:12 (X inches rise per 12 inches horizontal)
  - 4:12 = moderate, most economical
  - 6:12+ = steep, better water/snow shedding, more materials
  - 12:12+ = very steep, difficult to work on
- **Rafter Length**: = √(rise² + run²) + overhang
- **Ridge Board**: horizontal member at peak (not structural in simple roofs)
- **Rafter Tie/Collar Tie**: horizontal member connecting opposing rafters; prevents spread

**Concrete Basics**:
- Mix ratio by volume: 1 cement : 2 sand : 3 gravel : 0.5 water (rough guide for structural)
- More water → weaker concrete; water-cement ratio is key strength variable
- Minimum curing: keep moist for 7 days (reaches 70% strength); full strength at 28 days
- Never let freeze during first 24 hours (curing generates heat but exterior cold can damage)
- Compressive strength: typical structural 3000–4000 psi (20–28 MPa)

**Masonry Construction**:
- Bond patterns: running bond (offset half-brick) is strongest
- Mortar mix: 1 cement : 3 sand (Type S for structural) or use premixed
- Bed joint: horizontal mortar; head joint: vertical mortar
- Both must be fully filled (no voids) for water resistance
- Tooling mortar when "thumb hard" (not wet, not dry): compresses and seals

### Water Systems

**Gravity-Fed Water System Design**:
1. Source: spring, well, rainwater collection
2. Collection tank at highest elevation
3. Distribution pipe to lower structures
4. Flow rate depends on elevation head and pipe size
5. Calculation: 1 m elevation = 0.1 bar = 1.5 psi

**Pipe Sizing for Gravity Systems**:
- Friction loss depends on pipe diameter, length, flow rate
- For small systems: 1-inch pipe adequate for most household uses
- Use Hazen-Williams for detailed calculation

**Rainwater Harvesting**:
- Collection: 1 inch of rain on 1000 sq ft roof = 623 gallons (minus 20% loss)
- Calculations: Roof area (sq ft) × rainfall (inches) × 0.623 = gallons
- First-flush diverter: discard first 1 gallon per 100 sq ft of roof (removes initial contamination)
- Storage: food-grade polyethylene tanks, concrete cisterns, buried tanks
- Treatment needed before drinking: filter + disinfection

**Well Water**:
- Dug wells: <30 feet deep, high contamination risk, seasonal variation
- Drilled wells: 50–300+ feet, requires professional drilling equipment
- Hand-pump options: India Mk II, Simple Pump, Vermont Hand Pump (down to 300 ft)
- Protect well head: seal top, extend casing 12" above grade, slope ground away

**Greywater Recycling**:
- Greywater: sinks, showers, laundry (NOT toilet water = blackwater)
- Can be used for sub-surface irrigation (not spray, not on food crops)
- Laundry-to-landscape: most practical; direct wash water to fruit trees
- Never store greywater >24 hours (bacterial growth)
- Minimum soil infiltration: 24" of topsoil before groundwater

**Composting Toilet Principles**:
- Aerobic decomposition of human waste
- Carbon:Nitrogen ratio: add carbon (sawdust, leaves) after each use
- Temperature: hot composting (55°C) kills pathogens in days; cold composting takes 1–2 years
- End product: humus, safe for ornamental plants (not food crops, per WHO guidelines)
- Ventilation pipe: creates negative pressure in vault, draws air through seat hole (controls odors)
- Moisture control: too wet = anaerobic (smelly); too dry = no decomposition

### Hand Tools and Fabrication

**Measuring and Layout**:
- Steel tape: hook is designed to move 1/16" — catches on inside and outside measurements
- Combination square: 90° and 45° angles, depth measurements, checking flatness
- Chalk line: snapping long straight lines
- Plumb bob: establishing vertical
- Level: 0.005" per foot accuracy — most adequate for construction; 0.001"/ft for precision work

**Saw Selection**:
- Cross-cut: cuts across grain; fine teeth (10–15 TPI)
- Rip: cuts along grain; coarse teeth (5–7 TPI), raking action like chisels
- Combination: general purpose (7–9 TPI), slightly slower than dedicated saws
- Japanese pull saws: cut on pull stroke; very thin kerf, accurate
- Hacksaw: metal cutting; 18–32 TPI depending on material thickness
  - Rule: 3 teeth minimum in contact with work at all times → thinner material = more TPI

**Chisel Technique**:
- Work with the grain when possible
- Cut to the line from the waste side
- Bevel down: for paring (fine work, following contour)
- Bevel up: for roughing, harder cuts
- Always sharp — dull chisel requires more force → slips → injury

**Sharpening Tools**:
- Progression: coarse (120-220 grit) → medium (400 grit) → fine (800-1200 grit) → stropping
- Angle for chisels/plane blades: 25° primary bevel, 30° micro-bevel
- Angle for knives: 15–20° per side
- Water stones: premium, soak in water; oil stones: more durable, slower; diamond plates: fastest
- Test: shave arm hair; pare cross-grain across a sheet of paper (whisper cut)

**Fastener Selection**:
- Wood screws: #8 or #10 × 1.5"–3" for most framing connections
- Structural screws (GRK, Spax): replace lag screws for many connections
- Lag screws: 3/8" or 1/2" diameter for heavy connections; pre-drill pilot hole (65% diameter)
- Nails: 16d (3.5") for framing; 8d (2.5") for sheeting; 6d (2") for finish
- Threaded rod: excellent for through-bolting heavy connections

---

## PART 4: MECHANICAL SYSTEMS AND REPAIR

### Internal Combustion Engine Basics

**4-Stroke Cycle**:
1. **Intake stroke**: Piston moves down, intake valve opens, air-fuel mixture enters
2. **Compression stroke**: Both valves closed, piston moves up, mixture compressed (~8:1 ratio)
3. **Power stroke**: Spark ignites mixture, explosion pushes piston down (power output)
4. **Exhaust stroke**: Exhaust valve opens, piston moves up, burnt gases exit

**Diesel vs Gasoline**:
| Property | Gasoline | Diesel |
|----------|---------|--------|
| Ignition | Spark | Compression (600°C) |
| Compression ratio | 8:1 – 12:1 | 14:1 – 25:1 |
| Efficiency | 25–35% | 35–45% |
| Energy density | 34 MJ/L | 38 MJ/L |
| Cold starting | Easy | Difficult (<-15°C) |
| Fuel stability | 1–3 years | 1–2 years |
| Safety | Flammable vapor | Less flammable |

**Diesel Advantages for Long-Term Use**:
- More fuel-efficient (important when fuel is scarce)
- Higher energy density per gallon
- Many can run on biodiesel, waste vegetable oil
- Fewer ignition system parts to fail (no spark plugs, coils, etc.)
- Some older diesels (pre-1990s) have no electronic controls → simpler to repair

**Fuel Stabilizer Use**:
- Gasoline: PRI-G or Sta-bil; 1 oz per 2.5 gallons; good for up to 2 years if sealed
- Diesel: PRI-D; prevents microbial growth and sludge
- Rotate stored fuel every 6–12 months regardless

**Engine Oil Viscosity**:
- SAE grades: 0W-20, 5W-30, 10W-40, 15W-40
- First number (W=Winter): cold weather performance; lower = better cold flow
- Second number: viscosity at operating temperature; higher = thicker
- Multi-grade (e.g., 10W-30): thin when cold, thickens as engine warms
- Check engine manual — using too thin oil at high temp = wear; too thick when cold = poor startup lubrication

**Compression Testing**:
- Disable fuel/ignition, remove all spark plugs
- Thread compression gauge into #1 cylinder
- Crank 4–6 times, record reading
- Repeat all cylinders
- Acceptable: >90 psi on all cylinders (spec varies by engine)
- All cylinders within 15 psi of each other
- Low compression on one cylinder: rings or valves
- Two adjacent cylinders low: head gasket leak

### Welding Fundamentals

**Common Welding Processes**:

**Stick Welding (SMAW)** — best for field/outdoor work:
- Consumable electrode with flux coating
- AC or DC power
- Works on rusty/dirty metal
- Wind doesn't affect like MIG
- Most versatile for repairs
- Penetrates well even on thick material

**MIG Welding (GMAW)** — fastest, easiest:
- Wire feed through gun with shielding gas (75% Ar / 25% CO2 typical)
- Faster and easier to learn than stick
- Needs clean metal (no rust/paint)
- Wind disrupts shielding gas (difficult outdoors without shelter)
- Good for thin material

**TIG Welding (GTAW)** — highest quality:
- Non-consumable tungsten electrode
- Separate filler rod added by hand
- Slowest, most skill required
- Best for aluminum, stainless, precision work

**Basic Stick Welding Settings**:
| Electrode | Diameter | Amperage | Position |
|-----------|---------|---------|---------|
| 6013 | 3/32" | 70–90A | All (easy to use) |
| 6013 | 1/8" | 90–130A | Flat, horizontal |
| 7018 | 3/32" | 70–100A | All (structural) |
| 7018 | 1/8" | 100–140A | All (structural) |
| 6011 | 1/8" | 80–120A | All (dirty metal) |

**Welding Defects and Prevention**:
- **Porosity** (bubbles in weld): moisture in electrode or metal; dry rods, clean metal
- **Undercutting** (groove at weld edge): too fast, too high amperage; slow down, reduce amps
- **Cold lap/incomplete fusion**: too fast, too low amps; slow down, increase heat
- **Cracking**: too fast cooling on high-carbon steel; preheat 200-400°F before welding

**Arc Length Rule**: Maintain arc length approximately equal to rod diameter
- Too short: sticking, porosity
- Too long: spattery, weak, wide weld

---

## PART 5: COMMUNICATIONS AND RADIO SYSTEMS

### Radio Wave Propagation

**Frequency Bands and Characteristics**:
| Band | Frequency | Wavelength | Propagation | Use |
|------|-----------|-----------|-------------|-----|
| LF/MF | 30–3000 kHz | km range | Ground wave | AM radio, navigation |
| HF | 3–30 MHz | 10–100 m | Ionospheric | Ham radio, shortwave |
| VHF | 30–300 MHz | 1–10 m | Line of sight | FM radio, aircraft, NOAA |
| UHF | 300–3000 MHz | 10–100 cm | Line of sight | TV, cell, FRS/GMRS |
| Microwave | 3–30 GHz | 1–10 cm | LOS, rain fade | WiFi, satellite |

**HF (Shortwave) Propagation — Key for Long-Distance Communications**:
- Signals refract off ionosphere → can travel thousands of miles
- Critical angle: if transmitted too steep, passes through ionosphere into space
- Skip zone: area between end of ground wave and start of sky wave — no reception
- Ionospheric layers:
  - D-layer (day only): absorbs lower HF; causes daytime HF propagation problems
  - F-layer: primary reflection layer; higher frequencies bounce off at night
- Day: better propagation on 14–28 MHz (higher)
- Night: better propagation on 3–10 MHz (lower; D-layer gone)

**Antenna Theory Basics**:
- **Resonant length**: antenna performs best when its length matches the wave
- **Dipole**: simplest antenna; two quarter-wave elements in line; 73-ohm impedance
  - Length (feet) = 468 / frequency (MHz)
  - Example: 40-meter ham band (7.15 MHz) → 468/7.15 = 65.5 feet total (32.75 ft each side)
- **Gain**: antenna focusing energy in preferred direction vs isotropic radiator
  - Measured in dBi (decibels relative to isotropic)
  - Every 3 dB = doubling of effective power
  - Yagi antenna: 6–12 dBi; useful for point-to-point long-distance VHF/UHF

**Antenna Height**:
- VHF/UHF: higher = farther line-of-sight range
  - Radio horizon (miles) = 1.23 × √(height in feet)
  - Two stations at 50 feet elevation: 1.23 × √50 × 2 = ~17.4 miles maximum
- HF: height affects takeoff angle (important for skywave)
  - Higher antenna = lower takeoff angle = longer skip distance

**Feedline (Coaxial Cable)**:
- 50-ohm coax (RG-8, RG-213, LMR-400): standard for transmitting antennas
- 75-ohm coax (RG-6, RG-59): TV distribution, receive only
- Loss increases with frequency and length
  - RG-8X at 146 MHz: ~4 dB per 100 feet
  - LMR-400 at 146 MHz: ~1.5 dB per 100 feet
- Weatherproof all connections with self-amalgamating tape + electrical tape

**VSWR (Voltage Standing Wave Ratio)**:
- Measures how well antenna is matched to transmitter
- 1.0:1 = perfect match (theoretical)
- <1.5:1 = excellent; <2.0:1 = good; <3.0:1 = acceptable; >3.0:1 = poor (power reflected)
- High SWR doesn't damage most modern radios (SWR foldback protection) but reduces effective range

### Emergency Power for Communications

**Minimum Power Requirements**:
- HF transceiver (100W): 20 amps at 13.8V = 276 watts receive; less in SSB
- VHF/UHF handheld (5W): ~1 amp transmit, 0.5A receive
- Battery-saving practices: monitor but don't transmit continuously; use lower power when local

**12V Battery for Comms**:
- 100Ah AGM battery × 12V = 1200Wh
- 100W HF radio receiving (~20W draw): 60 hours operation
- Transmitting 50% of time at 100W: ~8 hours

---

## PART 6: MATERIALS AND TOOLS REFERENCE

### Material Properties

**Wood Species Comparison**:
| Species | Strength | Weight | Durability | Best Use |
|---------|---------|--------|-----------|---------|
| Douglas Fir | High | Medium | Medium | Structural |
| Southern Yellow Pine | High | High | High | Flooring, outdoors |
| White Oak | Very High | High | High | Outdoor, flooring |
| Poplar | Low-Med | Low | Low | Interior trim, painting |
| Black Locust | Very High | High | Very High | Outdoor, fence posts |
| Osage Orange | Very High | Very High | Very High | Tool handles, posts |
| Bamboo | High | Low | Medium | Various (moisture-treated) |

**Natural Rot-Resistant Species** (useful without chemical treatment):
- Black locust, osage orange, eastern red cedar, western red cedar, redwood, white oak heartwood
- All require heartwood, not sapwood (heartwood = dark inner wood)

**Metal Selection for Repairs**:
- **Mild steel (A36)**: most common, easy to weld/cut/machine, rusts — paint or coat
- **Stainless steel (304/316)**: corrosion resistant, harder to weld, expensive
- **Aluminum (6061)**: light, corrosion resistant, TIG weld, cannot use steel fasteners
- **Cast iron**: brittle, can crack if overheated during welding — preheat and slow cool

**Adhesive Selection**:
| Adhesive | Best For | Gap Filling | Waterproof | Time |
|----------|---------|------------|-----------|------|
| Wood glue (PVA) | Wood-wood | Poor | No | 1 hr clamp |
| Epoxy | Multi-material | Excellent | Yes | Varies |
| Cyanoacrylate (CA) | Quick repairs | Poor | Moderate | Seconds |
| Polyurethane (Gorilla) | Wood/multi | Good | Yes | 24 hr |
| Contact cement | Laminates | None | Varies | Instant |
| Silicone | Flexible seals | Good | Yes | 24 hr |

**Improvised Adhesives**:
- Pine pitch: melt with beeswax (3:1 ratio) → waterproof adhesive/sealant (historic)
- Flour paste: wallpaper, paper crafts (not structural)
- Animal hide glue: reversible with heat/water; excellent for wood joints; historic furniture
- Milk casein glue: mix milk powder with lime → bonds wood; some water resistance

---

*Sources: MIT OpenCourseWare 2.001 Mechanics, 6.002 Circuits and Electronics, 4.463 Building Technology; USACE (US Army Corps of Engineers) technical manuals; FEMA P-530 Residential Structural Design Guide; Practical Electronics for Inventors (Scherz); The Complete Book of Home Inspection; Army TM 5-3740 technical manuals; ARRL Handbook for Radio Communications*
