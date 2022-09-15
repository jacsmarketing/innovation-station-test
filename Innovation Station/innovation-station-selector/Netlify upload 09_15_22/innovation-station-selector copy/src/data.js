export const colors = [
  { label: "Black", value: "black"},
  { label: "White", value: "White"},
 
];

export const technology = [
  { label: "Cellular", 
    value: "cellular",
    benefits: [
      "Carrier certified mobility solutions",
      "Connect your workforce and your workflows to a legacy mobile network or prepare for an upgrade to 4G and 5G LTE",
      "In-house expertise, that understands how coverage, data rates, mobility, and security requirements can be addressed most effectively with cellular technology",
  ]
  },
  { label: "Wi-Fi", 
    value: "wifi",
    benefits: [
      "Can be Carrier Certified",
      "Connect your workforce and your workflows to a legacy mobile network or prepare for an upgrade to 4G and 5G LTE",
      "In-house expertise, that understands how coverage, data rates, mobility, and security requirements can be addressed most effectively with cellular technology",
  ]
  },
  { label: "PLTE", 
    value: "plte",
    benefits: [
      "Can be Carrier Certified",
      "Connect your workforce and your workflows to a legacy mobile network or prepare for an upgrade to 4G and 5G LTE",
      "In-house expertise, that understands how coverage, data rates, mobility, and security requirements can be addressed most effectively with cellular technology",
  ]
  },
];

export const interiorLayouts = [
  { label: "Five seat interior", value: "five_seat"},
  { label: "Six seat interior", value: "six_seat"},
  { label: "Seven seat interior", value: "seven_seat"},
];

export const models = [
  {
    key: 't',
    name: "Handheld Devices",
    wheels: colors,
    colors: [
      {
        src: `${process.env.PUBLIC_URL}/platforms/previews/tablet_rugged.png`,
        label: 'Ruggedized',
        value: "option_1"
      },
      {
        src: `${process.env.PUBLIC_URL}/platforms/previews/tablet_reg.png`,
        label: 'Non-Ruggedized',
        value: "option_2"
      }
    ],
    types: [
      {
        label: "Technology Obsolescence",
        value: "legacy",
        benefits: [
          "Modernize and transform your infrastructure by connecting people and devices from anywhere",
          "Protect your data with full network encryption and baked-in security protocols.",
          "Have complete control over your workflows by moving data collection and decision-making to the edge of the network",
        ]
        
      },
      {
        label: "Secure Connectivity",
        value: "performance",
       
        benefits: [
          "Connect mobile and distributed teams",
          "Support the mission with connected custom-built devices",
          "Protect Personal Information",
        ]
      },
      {
        label: "Operational Productivity",
        value: "operation",
        
        benefits: [
          "Automate and transform operations",
          "Support the mission with connected custom-built devices",
          "Integrate smart technology into your facilities and workflow"
        ]
      }
    ],
    technology: technology
  },

  {
    key: 'p',
    name: "Interactive Touch Displays",
    wheels: colors,
    colors: [
      {
        src: `${process.env.PUBLIC_URL}/platforms/previews/display_poe.png`,
        label: 'Power-over-Ethernet',
        value: "option_1"
      },
      {
        src: `${process.env.PUBLIC_URL}/platforms/previews/display_dc_in.png`,
        label: 'DC in',
        value: "option_2"
      }
    ],
    types: [
      {
        label: "2G/3G Sunset",
        value: "legacy",
        benefits: [
          "Reduce cost and risk to Healthcare Systems",
          "Enable vital data to be shared across the healthcare ecosystem",
          "Protect Personal Health Information (PHI)",
        ]
      },

      {
        label: "Point-of-Sale/Wayfinding",
        value: "performance",
     
        benefits: [
          "Modernize and transform your infrastructure by connecting people and devices from anywhere",
          "Protect your data with full network encryption and baked-in security protocols.",
          "Have complete control over your workflows by moving data collection and decision-making to the edge of the network"
        ]
      },

      {
        label: "Operational Productivity",
        value: "operation",
        
        benefits: [
          "Automate and transform operations",
          "Support the mission with connected custom-built devices",
          "Integrate smart technology into your facilities and workflow"
        ]
      }
    ],
    
    technology: technology.slice(0,3),
    interiorLayouts: [interiorLayouts[0], interiorLayouts[3]]
  },

  {
    key: 'd',
    name: "Connectivity",
    wheels: colors,
    colors: [
      {
        src: `${process.env.PUBLIC_URL}/platforms/previews/dongle.png`,
        label: '4G LTE USB Dongle',
        value: "option_1"
      },
      {
        src: `${process.env.PUBLIC_URL}/platforms/previews/hotspot.png`,
        label: 'Wi-Fi Hotspot',
        value: "option_2"
      }
    ],
    types: [
      {
        label: "2G/3G Sunset",
        value: "legacy",
        benefits: [
          "Reduce cost and risk to Healthcare Systems",
          "Enable vital data to be shared across the healthcare ecosystem",
          "Protect Personal Health Information (PHI)",
        ]
      },

      {
        label: "Connect Legacy Devices",
        value: "performance",
     
        benefits: [
          "Modernize and transform your infrastructure by connecting people and devices from anywhere",
          "Protect your data with full network encryption and baked-in security protocols.",
          "Have complete control over your workflows by moving data collection and decision-making to the edge of the network"
        ]
      }
    ],
    
    technology: technology.slice(0,3),
    interiorLayouts: [interiorLayouts[0], interiorLayouts[3]]
    
  },
  {
    key: 'c',
    name: "Charging Carts",
    wheels: colors,
    colors: [
      {
        src: `${process.env.PUBLIC_URL}/platforms/previews/uv.png`,
        label: 'UV Sanitization',
        value: "option_1"
      },
      {
        src: `${process.env.PUBLIC_URL}/platforms/previews/non_uv.png`,
        label: 'No UV Sanitization',
        value: "option_2"
      }
    ],
    types: [
      {
        label: "2G/3G Sunset",
        value: "legacy",
        benefits: [
          "Reduce cost and risk to Healthcare Systems",
          "Enable vital data to be shared across the healthcare ecosystem",
          "Protect Personal Health Information (PHI)",
        ]
      },

      {
        label: "Connect Legacy Devices",
        value: "performance",
     
        benefits: [
          "Modernize and transform your infrastructure by connecting people and devices from anywhere",
          "Protect your data with full network encryption and baked-in security protocols.",
          "Have complete control over your workflows by moving data collection and decision-making to the edge of the network"
        ]
      }
    ],
    
    technology: technology.slice(0,3),
    interiorLayouts: [interiorLayouts[0], interiorLayouts[3]]
  }



];

export const initialConfig = {
  't': {
    challenge_type: "legacy",
    model: "t",
    color: "handheld",
    wheels: "preview",
    interior_color: "cellular"
  },
  'p': {
    challenge_type: "legacy",
    model: "p",
    color: "display",
    wheels: "preview",
    interior_color: "cellular",
    interior_layout: "five_seat"
  },
  'd': {
    challenge_type: "legacy",
    model: "d",
    color: "connectivity",
    wheels: "preview",
    interior_color: "cellular",
    interior_layout: "five_seat"
  },
  'c': {
    challenge_type: "legacy",
    model: "c",
    color: "charging",
    wheels: "preview",
    interior_color: "cellular",
    interior_layout: "five_seat"
  }
 
};