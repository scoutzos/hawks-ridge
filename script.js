const photos = {
  sfr: { 
    src: 'images/img_002.jpg', 
    name:'Single Family Homes', 
    sub:'195 homes across three price tiers with French Beaux-Arts and Spanish-inspired architecture',
    details: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin:20px 0;">
        <div>
          <h4 style="color:#B8922E;margin:0 0 15px;">Estate Tier (30 Homes)</h4>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li><strong>Price:</strong> $900,000 - $1,300,000</li>
            <li><strong>Size:</strong> 4,000 - 5,500 SF</li>
            <li><strong>Lot:</strong> ½ acre creek corridor lots</li>
            <li><strong>Bedrooms:</strong> 4-6 bed, 3-5 bath</li>
            <li><strong>Garage:</strong> 2-3 car, EV-ready with 240V charging outlets</li>
          </ul>
        </div>
        <div>
          <h4 style="color:#B8922E;margin:0 0 15px;">Premium Tier (80 Homes)</h4>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li><strong>Price:</strong> $650,000 - $900,000</li>
            <li><strong>Size:</strong> 3,000 - 4,000 SF</li>
            <li><strong>Lot:</strong> ⅓ acre greenway-fronting lots</li>
            <li><strong>Bedrooms:</strong> 3-5 bed, 2-4 bath</li>
            <li><strong>Garage:</strong> 2-car, EV-ready with 240V charging outlets</li>
          </ul>
        </div>
      </div>
      <div style="margin:20px 0;">
        <h4 style="color:#B8922E;margin:0 0 15px;">Standard Tier (85 Homes)</h4>
        <ul style="margin:0 0 20px;color:rgba(245,240,232,.9);font-size:.9rem;">
          <li><strong>Price:</strong> $450,000 - $650,000</li>
          <li><strong>Size:</strong> 2,200 - 3,200 SF</li>
          <li><strong>Lot:</strong> ¼ acre park-adjacent lots</li>
          <li><strong>Bedrooms:</strong> 3-4 bed, 2-3 bath</li>
          <li><strong>Garage:</strong> 2-car, EV-ready with 240V charging outlets</li>
        </ul>
      </div>
      <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;">
        <h4 style="color:#B8922E;margin:0 0 15px;">Architectural Features</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Aged limestone, warm brick, cream stucco</li>
            <li>Dark charcoal standing-seam metal roofs</li>
            <li>Hunter green shutters, brass hardware</li>
            <li>Covered porches with haint blue ceilings</li>
          </ul>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Native landscaping, no sod policy</li>
            <li>Smart home technology integration</li>
            <li>Hamlet clusters around courtyards</li>
            <li>Rear alley access for privacy</li>
          </ul>
        </div>
      </div>
    `
  },
  townhomes: { 
    src: 'images/img_003.jpg', 
    name:'Townhomes', 
    sub:'580 attached townhomes with community mews design and optional rooftop terraces',
    details: `
      <div style="margin:20px 0;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;">
          <div>
            <h4 style="color:#B8922E;margin:0 0 15px;">Unit Details</h4>
            <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
              <li><strong>Total Units:</strong> 580 attached townhomes</li>
              <li><strong>Price Range:</strong> $320,000 - $520,000</li>
              <li><strong>Size:</strong> 1,600 - 2,400 SF across 3 stories</li>
              <li><strong>Bedrooms:</strong> 3-4 bedrooms with main-level flex space</li>
              <li><strong>Garage:</strong> 2-car attached with EV-ready infrastructure</li>
            </ul>
          </div>
          <div>
            <h4 style="color:#B8922E;margin:0 0 15px;">Design Features</h4>
            <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
              <li>Community mews design with shared courtyards</li>
              <li>French Beaux-Arts row home architecture</li>
              <li>Optional rooftop terrace upgrades available</li>
              <li>Ornate wrought iron Juliet balconies</li>
              <li>Monumental limestone entry stairs</li>
            </ul>
          </div>
        </div>
      </div>
      <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;margin:20px 0;">
        <h4 style="color:#B8922E;margin:0 0 15px;">Community Integration</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Direct trail access from neighborhoods</li>
            <li>Walking distance to Ridge Club and Village</li>
            <li>Shared green corridors between mews</li>
          </ul>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>EV charging stations in common areas</li>
            <li>Community gardens integrated into design</li>
            <li>Proximity to community programming spaces</li>
          </ul>
        </div>
      </div>
    `
  },
  ridgeclub: { 
    src: 'images/img_004.png', 
    name:'The Ridge Club', 
    sub:'80,000 SF premium athletic club serving as anchor commercial amenity and membership revenue driver',
    details: `
      <div style="margin:20px 0;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;">
          <div>
            <h4 style="color:#B8922E;margin:0 0 15px;">Indoor Facilities</h4>
            <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
              <li><strong>Weight & Cardio:</strong> 30,000 SF floor</li>
              <li><strong>Aquatics:</strong> 6-lane lap pool, leisure pool, hot tub</li>
              <li><strong>Studios:</strong> 4 group fitness studios (cycling, yoga, HIIT)</li>
              <li><strong>Courts:</strong> 2 NBA courts / 6 pickleball courts</li>
              <li><strong>Kids Zone:</strong> Supervised childcare + teen area</li>
            </ul>
          </div>
          <div>
            <h4 style="color:#B8922E;margin:0 0 15px;">Revenue & Operations</h4>
            <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
              <li><strong>Capacity:</strong> 1,500+ members</li>
              <li><strong>Non-Resident Rate:</strong> $200-$300/month</li>
              <li><strong>Resident Access:</strong> Included in HOA dues</li>
              <li><strong>Annual Revenue:</strong> $4.8M-$6.5M target</li>
              <li><strong>Opening:</strong> Phase 2 (2027-2029)</li>
            </ul>
          </div>
        </div>
      </div>
      <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;margin:20px 0;">
        <h4 style="color:#B8922E;margin:0 0 15px;">Outdoor Athletic Campus</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>1.5-mile perimeter trail with fitness stations</li>
            <li>Direct connection to 4.5-mile community trail</li>
            <li>Outdoor yoga and functional fitness lawn</li>
          </ul>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Additional outdoor basketball and pickleball courts</li>
            <li>Bike storage and repair station at trailhead</li>
            <li>Extensive native landscaping throughout</li>
          </ul>
        </div>
      </div>
    `
  },
  healing: { 
    src: 'images/img_005.png', 
    name:'The Healing House', 
    sub:'22,000 SF comprehensive wellness destination with nine distinct modality categories',
    details: `
      <div style="margin:20px 0;">
        <h4 style="color:#B8922E;margin:0 0 15px;">Nine Wellness Modalities</h4>
        <table style="width:100%;border-collapse:collapse;margin:20px 0;">
          <thead>
            <tr style="background:rgba(184,146,46,.1);">
              <th style="padding:10px;text-align:left;color:#B8922E;font-size:.9rem;">Service</th>
              <th style="padding:10px;text-align:left;color:#B8922E;font-size:.9rem;">Format</th>
              <th style="padding:10px;text-align:left;color:#B8922E;font-size:.9rem;">Pricing</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Float Therapy</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">3 pods, 60 & 90 min</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">$89-$109</td></tr>
            <tr><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Salt Room</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">30-60 min sessions</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">$25-$45</td></tr>
            <tr><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Infrared Sauna</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">45 min sessions</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">$45-$85</td></tr>
            <tr><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Sound Healing</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Private & group</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">$79-$179</td></tr>
          </tbody>
        </table>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin:20px 0;">
        <div>
          <h4 style="color:#B8922E;margin:0 0 15px;">Membership Tiers</h4>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li><strong>Float Member:</strong> $65-$85/month</li>
            <li><strong>Silver Access:</strong> $125/month</li>
            <li><strong>Gold Premium:</strong> $195/month</li>
            <li><strong>Diamond Full:</strong> $340/month</li>
          </ul>
        </div>
        <div>
          <h4 style="color:#B8922E;margin:0 0 15px;">Outdoor Campus</h4>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Healing gardens with native plantings</li>
            <li>Outdoor meditation spaces</li>
            <li>Walking labyrinth</li>
            <li>Grade-level trail connections</li>
          </ul>
        </div>
      </div>
      <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;">
        <strong style="color:#B8922E;">Projected Annual Revenue: $2.8M at stabilization</strong><br>
        <span style="font-size:.9rem;color:rgba(245,240,232,.8);">Opens Phase 1 as community's first signature amenity</span>
      </div>
    `
  },
  condos55: { 
    src: 'images/img_006.png', 
    name:'55+ Condominiums', 
    sub:'360 HOPA-compliant units above Village retail with dedicated concierge services',
    details: `
      <div style="margin:20px 0;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;">
          <div>
            <h4 style="color:#B8922E;margin:0 0 15px;">Unit Details</h4>
            <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
              <li><strong>Total Units:</strong> 360 condominium units</li>
              <li><strong>HOPA Status:</strong> 55+ Age-Qualified Community</li>
              <li><strong>Price Range:</strong> $245,000 - $470,000</li>
              <li><strong>Size:</strong> 900 - 1,800 SF (no studios)</li>
              <li><strong>Layout:</strong> 1-3 bedrooms with open floor plans</li>
            </ul>
          </div>
          <div>
            <h4 style="color:#B8922E;margin:0 0 15px;">Resident Services</h4>
            <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
              <li>Dedicated concierge service during business hours</li>
              <li>On-site wellness coordinator</li>
              <li>Building maintenance included</li>
              <li>Package receiving and mail services</li>
              <li>Transportation assistance for appointments</li>
            </ul>
          </div>
        </div>
      </div>
      <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;margin:20px 0;">
        <h4 style="color:#B8922E;margin:0 0 15px;">Wellness Access & Location</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Grade-level trail access to Healing House</li>
            <li>Elevator access to Village plaza level</li>
            <li>Priority booking for wellness services</li>
          </ul>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Secure below-grade parking included</li>
            <li>Specialized 55+ fitness programming</li>
            <li>Direct connection to community programming</li>
          </ul>
        </div>
        <p style="margin:15px 0 0;font-size:.9rem;color:rgba(245,240,232,.8);"><strong>HOPA Compliance:</strong> 80% of units must have at least one resident age 55 or older</p>
      </div>
    `
  },
  condosconv: { 
    src: 'images/img_006.png', 
    name:'Conventional Condominiums', 
    sub:'Mixed-age condominium living with modern amenities and community access',
    details: `
      <div style="margin:20px 0;">
        <p style="color:rgba(245,240,232,.9);font-size:.95rem;font-style:italic;">Conventional condominium details and programming are being finalized. These all-age units will complement the 55+ community while providing modern condominium living for working professionals and families.</p>
      </div>
      <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;">
        <h4 style="color:#B8922E;margin:0 0 15px;">Development Timeline</h4>
        <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
          <li>Detailed programming available in Phase 2 planning</li>
          <li>Design and pricing based on market response to 55+ units</li>
          <li>Full amenity access and community integration</li>
          <li>Expected pricing competitive with area condominiums</li>
        </ul>
      </div>
    `
  },
  parks: { 
    src: 'images/img_007.png', 
    name:'Parks & Green Space', 
    sub:'64 acres of preserved green space (18% of site) with 4.5-mile trail network',
    details: `
      <div style="margin:20px 0;">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="background:rgba(184,146,46,.1);">
              <th style="padding:10px;text-align:left;color:#B8922E;font-size:.9rem;">Zone</th>
              <th style="padding:10px;text-align:left;color:#B8922E;font-size:.9rem;">Acreage</th>
              <th style="padding:10px;text-align:left;color:#B8922E;font-size:.9rem;">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Central Meadow</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">22 acres</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Community events, farmers market, native wildflowers</td></tr>
            <tr><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Creek Preserve</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">18 acres</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Wetland restoration, boardwalk trails, wildlife habitat</td></tr>
            <tr><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Neighborhood Parks</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">12 acres</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Playgrounds, picnic areas, community gardens</td></tr>
          </tbody>
        </table>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin:20px 0;">
        <div>
          <h4 style="color:#B8922E;margin:0 0 15px;">Trail Network</h4>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li><strong>Main Loop:</strong> 2.8-mile perimeter trail</li>
            <li><strong>Creek Trail:</strong> 1.2-mile boardwalk through wetlands</li>
            <li><strong>Village Connector:</strong> 0.5-mile direct pathways</li>
            <li>Emergency call boxes every ½ mile</li>
            <li>LED lighting at all intersections</li>
          </ul>
        </div>
        <div>
          <h4 style="color:#B8922E;margin:0 0 15px;">Community Programming</h4>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Resident vegetable and herb garden plots</li>
            <li>Native plant demonstration gardens</li>
            <li>Seasonal farmers market in Central Meadow</li>
            <li>Outdoor education and nature programming</li>
            <li>Pollinator-friendly landscaping throughout</li>
          </ul>
        </div>
      </div>
    `
  },
  safety: { 
    src: null, 
    name:'Safety & Security', 
    sub:'Comprehensive 6-part safety program implementing CPTED principles',
    details: `
      <div style="margin:20px 0;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;">
          <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;">
            <h4 style="color:#B8922E;margin:0 0 10px;font-size:.95rem;">Gated Access</h4>
            <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.85rem;">
              <li>Single controlled-access entry point</li>
              <li>24/7 staffed gatehouse</li>
              <li>Resident transponders and guest codes</li>
            </ul>
          </div>
          <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;">
            <h4 style="color:#B8922E;margin:0 0 10px;font-size:.95rem;">Surveillance Network</h4>
            <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.85rem;">
              <li>Entry/exit point monitoring</li>
              <li>Common area coverage</li>
              <li>Trail network visibility</li>
            </ul>
          </div>
          <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;">
            <h4 style="color:#B8922E;margin:0 0 10px;font-size:.95rem;">Community Patrol</h4>
            <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.85rem;">
              <li>Evening and overnight routes</li>
              <li>Incident response and reporting</li>
              <li>Coordination with Fulton County Sheriff</li>
            </ul>
          </div>
        </div>
      </div>
      <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;margin:20px 0;">
        <h4 style="color:#B8922E;margin:0 0 15px;">CPTED Design Principles</h4>
        <p style="margin:0 0 15px;color:rgba(245,240,232,.9);font-size:.9rem;"><strong>Crime Prevention Through Environmental Design</strong> integrated throughout Hawks Ridge:</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.85rem;">
            <li>Natural surveillance through clear sightlines</li>
            <li>Territorial reinforcement with defined boundaries</li>
            <li>Strategic lighting at pedestrian transition points</li>
          </ul>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.85rem;">
            <li>Natural access control via landscape design</li>
            <li>Maintenance standards preventing deterioration</li>
            <li>Emergency preparedness and response systems</li>
          </ul>
        </div>
      </div>
    `
  },
  cottages: { 
    src: 'images/cottage_garden.png', 
    name:'Cottages', 
    sub:'Garden and gated cottage tiers with cobblestone courtyards (development timeline TBD)',
    details: `
      <div style="margin:20px 0;">
        <p style="color:rgba(245,240,232,.9);font-size:.95rem;font-style:italic;">The cottage program is being refined based on market feedback and community development priorities. These smaller-scale homes will provide an additional housing option with distinct architectural character.</p>
      </div>
      <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;">
        <h4 style="color:#B8922E;margin:0 0 15px;">Development Approach</h4>
        <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
          <li>Cottage design and programming finalized in Phase 2</li>
          <li>Market positioning based on community response</li>
          <li>Architectural character consistent with overall Hawks Ridge vision</li>
          <li>Integration with cobblestone courtyard design language</li>
        </ul>
      </div>
    `
  },
  village: { 
    src: 'images/img_008.jpg', 
    name:'The Village', 
    sub:'65,000 SF walkable retail district with 40% minority business reservation program',
    details: `
      <div style="margin:20px 0;">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="background:rgba(184,146,46,.1);">
              <th style="padding:10px;text-align:left;color:#B8922E;font-size:.9rem;">Category</th>
              <th style="padding:10px;text-align:left;color:#B8922E;font-size:.9rem;">SF</th>
              <th style="padding:10px;text-align:left;color:#B8922E;font-size:.9rem;">Programming</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Food & Beverage</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">20,000</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Farm-to-table restaurant, coffee, bakery</td></tr>
            <tr><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Professional Services</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">12,000</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Med spa, dental, financial, HomeScoutz office</td></tr>
            <tr><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Community Anchors</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">10,000</td><td style="padding:8px;color:rgba(245,240,232,.9);font-size:.85rem;">Event pavilion, farmers market, co-working</td></tr>
          </tbody>
        </table>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin:20px 0;">
        <div>
          <h4 style="color:#B8922E;margin:0 0 15px;">Design Features</h4>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Cobblestone plaza and streetscapes</li>
            <li>Clock tower architectural landmark</li>
            <li>Walled meditation garden</li>
            <li>Natural children's play area</li>
            <li>Evening activation with lighting</li>
          </ul>
        </div>
        <div>
          <h4 style="color:#B8922E;margin:0 0 15px;">Business Support</h4>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Below-market introductory rents</li>
            <li>Technical assistance programs</li>
            <li>Community crowdfunding platform</li>
            <li>Business development services</li>
            <li>Equity participation opportunities</li>
          </ul>
        </div>
      </div>
      <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;">
        <strong style="color:#B8922E;">Target Revenue: $3.2M-$4.5M annually at $55-$65 PSF</strong><br>
        <span style="font-size:.9rem;color:rgba(245,240,232,.8);">40% of retail space reserved for minority-owned businesses</span>
      </div>
    `
  },
  pool: { 
    src: null, 
    name:'Community Pool', 
    sub:'4,500 SF resort-style community pool separate from Ridge Club aquatics',
    details: `
      <div style="margin:20px 0;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;">
          <div>
            <h4 style="color:#B8922E;margin:0 0 15px;">Pool Features</h4>
            <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
              <li>Zero-entry design with lounge shelf and lap lane</li>
              <li>Kids splash zone with water play structure</li>
              <li>Expansive sundeck with private cabanas</li>
              <li>Full bathhouse and changing facilities</li>
              <li>Seasonal snack bar and beverage service</li>
            </ul>
          </div>
          <div>
            <h4 style="color:#B8922E;margin:0 0 15px;">Community Access</h4>
            <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
              <li>All residents included via HOA dues</li>
              <li>Dawn to dusk access for community members</li>
              <li>Family-focused programming and events</li>
              <li>Central location accessible from all areas</li>
              <li>Separate from Ridge Club for casual use</li>
            </ul>
          </div>
        </div>
      </div>
      <div style="background:rgba(184,146,46,.1);padding:20px;border-radius:6px;margin:20px 0;">
        <h4 style="color:#B8922E;margin:0 0 15px;">Programming & Events</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Children's swimming lessons and water safety</li>
            <li>Family movie nights and community gatherings</li>
            <li>Poolside fitness classes and aqua aerobics</li>
          </ul>
          <ul style="margin:0;color:rgba(245,240,232,.9);font-size:.9rem;">
            <li>Seasonal parties and community celebrations</li>
            <li>Integration with community event calendar</li>
            <li>Coordination with Ridge Club aquatics programming</li>
          </ul>
        </div>
      </div>
    `
  }
};

let cur = null;

function sel(z) {
  // Clear all
  document.querySelectorAll('.hotspot,.li').forEach(e => e.classList.remove('on'));
  document.querySelectorAll('.dc').forEach(e => e.classList.remove('on'));
  document.getElementById('defaultHint').style.display = 'none';

  const sceneWrap = document.getElementById('scene-wrap');
  const emptyScene = document.getElementById('empty-scene');

  // Toggle off if same zone
  if (cur === z) {
    cur = null;
    document.getElementById('defaultHint').style.display = '';
    if (emptyScene) emptyScene.style.display = 'flex';
    if (sceneWrap) sceneWrap.style.display = 'none';
    return;
  }

  cur = z;

  // Activate matching elements
  document.querySelectorAll('[data-zone="' + z + '"]').forEach(e => e.classList.add('on'));
  const dc = document.getElementById('dc-' + z);
  if (dc) dc.classList.add('on');

  // Show scene photo in sidebar
  const p = photos[z];
  if (p && emptyScene && sceneWrap) {
    emptyScene.style.display = 'none';
    sceneWrap.style.display = 'block';
    const inner = document.getElementById('scene-inner');
    if (p.src) {
      inner.innerHTML = '<img src="' + p.src + '" style="width:100%;height:100%;object-fit:cover;display:block;"/>';
    } else {
      inner.innerHTML = '<div style="width:100%;height:100%;background:#2b3540;display:flex;align-items:center;justify-content:center;"><span style="font-family:Playfair Display,serif;color:rgba(201,168,76,.5);font-size:.9rem;">Rendering coming soon</span></div>';
    }
    document.getElementById('scene-name').textContent = p.name;
    document.getElementById('scene-sub').textContent = p.sub;
  }

  // Open full overlay
  openOverlay(z);
}

function openOverlay(z) {
  const p = photos[z];
  if (!p) return;
  const ov = document.getElementById('zoneOverlay');
  const ct = document.getElementById('zoneOverlayContent');
  document.getElementById('zoneOverlayTitle').textContent = p.name;
  document.getElementById('zoneOverlaySub').textContent = p.sub;
  
  // Create content with both photo and details
  let contentHTML = '<div class="overlay-flex-container">';
  
  // Photo section
  contentHTML += '<div class="overlay-photo-section">';
  if (p.src) {
    contentHTML += '<img class="zone-overlay-img" src="' + p.src + '" alt="' + p.name + '"/>';
  } else {
    contentHTML += '<div class="zone-overlay-placeholder">Rendering coming soon</div>';
  }
  contentHTML += '</div>';
  
  // Details section
  contentHTML += '<div class="overlay-details-section">';
  if (p.details) {
    contentHTML += p.details;
  }
  contentHTML += '</div>';
  
  contentHTML += '</div>';
  
  ct.innerHTML = contentHTML;
  ov.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOverlay(e, force) {
  if (!force && e.target !== document.getElementById('zoneOverlay')) return;
  document.getElementById('zoneOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Map Zoom & Pan ──
(function () {
  const wrap = document.getElementById('mapwrap');
  const inner = document.getElementById('mapInner');
  let scale = 1, tx = 0, ty = 0, isDragging = false, startX, startY, lastTx, lastTy;
  const MIN = 1, MAX = 5;

  function apply() {
    inner.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
  }

  function clampPan() {
    const r = wrap.getBoundingClientRect();
    tx = Math.min(0, Math.max(r.width - r.width * scale, tx));
    ty = Math.min(0, Math.max(r.height - r.height * scale, ty));
  }

  // Mouse wheel zoom
  wrap.addEventListener('wheel', function (e) {
    e.preventDefault();
    const r = wrap.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top, old = scale;
    scale *= e.deltaY < 0 ? 1.15 : 0.87;
    scale = Math.min(MAX, Math.max(MIN, scale));
    const ratio = scale / old;
    tx = mx - ratio * (mx - tx);
    ty = my - ratio * (my - ty);
    clampPan();
    apply();
  }, { passive: false });

  // Mouse drag pan
  wrap.addEventListener('mousedown', function (e) {
    if (scale <= 1) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    lastTx = tx;
    lastTy = ty;
  });
  window.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    tx = lastTx + (e.clientX - startX);
    ty = lastTy + (e.clientY - startY);
    clampPan();
    apply();
  });
  window.addEventListener('mouseup', function () { isDragging = false; });

  // Touch pinch zoom + drag
  let initDist = 0, initScale = 1;
  wrap.addEventListener('touchstart', function (e) {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      initDist = Math.hypot(dx, dy);
      initScale = scale;
    } else if (e.touches.length === 1 && scale > 1) {
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      lastTx = tx;
      lastTy = ty;
    }
  }, { passive: false });

  wrap.addEventListener('touchmove', function (e) {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      scale = Math.min(MAX, Math.max(MIN, initScale * (dist / initDist)));
      clampPan();
      apply();
    } else if (isDragging && e.touches.length === 1) {
      tx = lastTx + (e.touches[0].clientX - startX);
      ty = lastTy + (e.touches[0].clientY - startY);
      clampPan();
      apply();
    }
  }, { passive: false });

  wrap.addEventListener('touchend', function () { isDragging = false; });

  // Button controls
  window.zoomMap = function (dir) {
    const r = wrap.getBoundingClientRect(), cx = r.width / 2, cy = r.height / 2, old = scale;
    scale *= dir > 0 ? 1.4 : 0.7;
    scale = Math.min(MAX, Math.max(MIN, scale));
    const ratio = scale / old;
    tx = cx - ratio * (cx - tx);
    ty = cy - ratio * (cy - ty);
    clampPan();
    apply();
  };

  window.resetMap = function () {
    scale = 1;
    tx = 0;
    ty = 0;
    apply();
  };
})();

// Enhanced Navigation System
document.addEventListener('DOMContentLoaded', function() {
  const navTabs = document.querySelectorAll('.nav-tab');
  const contentSections = document.querySelectorAll('.content-section');
  
  navTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetSection = this.getAttribute('data-section');
      
      // Remove active class from all tabs and sections
      navTabs.forEach(t => t.classList.remove('active'));
      contentSections.forEach(s => s.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding section
      this.classList.add('active');
      const targetElement = document.getElementById(targetSection);
      if (targetElement) {
        targetElement.classList.add('active');
      }
      
      // Smooth scroll to content area
      document.querySelector('.sections').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    });
  });
});
