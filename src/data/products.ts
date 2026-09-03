export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  applications: string[];
  material: string;
  variants: string[];
  features: string[];
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    slug: 'round-plates',
    name: 'Round Plates',
    shortName: 'Round Plates',
    tagline: 'Engineered for banquets, buffets, and daily foodservice.',
    description:
      'Pressed from sugarcane bagasse pulp at high density, our round plates deliver rigidity and leak resistance for hot meals, sauces, and oily dishes. Designed for hospitality, catering, and institutional dining where reliability matters at volume.',
    applications: ['Banquet buffets', 'Restaurant plating', 'Catering events', 'Institutional dining', 'Cloud kitchens'],
    material: 'Sugarcane bagasse pulp',
    variants: ['7 inch', '9 inch', '10 inch', '12 inch'],
    features: ['Liquid resistant', 'Grease resistant', 'Microwave safe', 'Freezer safe'],
    image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Plates',
  },
  {
    slug: 'compartment-plates',
    name: 'Compartment Plates',
    shortName: 'Compartment Plates',
    tagline: 'Separated sections for complete meals without flavour mixing.',
    description:
      'Multi-compartment plates that keep foods and sauces separated during transport and service. Built for meal delivery, institutional feeding, and airline catering where portion integrity is non-negotiable.',
    applications: ['Meal delivery', 'Institutional feeding', 'Airline catering', 'School meals', 'Healthcare dining'],
    material: 'Sugarcane bagasse pulp',
    variants: ['3 compartment', '4 compartment', '5 compartment'],
    features: ['Liquid resistant', 'Grease resistant', 'Microwave safe', 'Compartment separation'],
    image: 'https://images.pexels.com/photos/6759538/pexels-photo-6759538.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Plates',
  },
  {
    slug: 'meal-trays',
    name: 'Meal Trays',
    shortName: 'Meal Trays',
    tagline: 'Heavy-duty multi-section trays for complete course packaging.',
    description:
      'Full-meal trays designed for complete course packaging with multiple compartments and optional lids. Engineered for institutional food programs, airline catering, and large-scale meal delivery operations.',
    applications: ['Airline catering', 'Institutional meals', 'Railway catering', 'Event catering', 'Meal kit delivery'],
    material: 'Sugarcane bagasse pulp',
    variants: ['3 section with lid', '5 section with lid', '6 section with lid'],
    features: ['High rigidity', 'Liquid resistant', 'Stackable design', 'Optional lids'],
    image: 'https://images.pexels.com/photos/4198562/pexels-photo-4198562.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Trays',
  },
  {
    slug: 'round-bowls',
    name: 'Round Bowls',
    shortName: 'Round Bowls',
    tagline: 'Leak-proof bowls for hot soups, curries, and cold desserts.',
    description:
      'Deep-form bagasse bowls built to hold hot liquids without softening or seepage. Suitable for soups, curries, liquid sides, and cold desserts across foodservice and delivery channels.',
    applications: ['Soups and curries', 'Dessert service', 'Salad bars', 'Liquid sides', 'Delivery packaging'],
    material: 'Sugarcane bagasse pulp',
    variants: ['8 oz', '12 oz', '16 oz', '24 oz', '32 oz'],
    features: ['Leak-proof', 'Heat resistant', 'Microwave safe', 'Freezer safe'],
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Bowls',
  },
  {
    slug: 'clamshell-containers',
    name: 'Clamshell Containers',
    shortName: 'Clamshells',
    tagline: 'Hinged-lid containers for secure food delivery.',
    description:
      'Hinged clamshell containers with secure closure for food delivery and takeaway. Built for cloud kitchens, QSR chains, and food delivery platforms that need reliable, leak-resistant packaging at scale.',
    applications: ['Food delivery', 'Cloud kitchens', 'QSR chains', 'Takeaway service', 'Event catering'],
    material: 'Sugarcane bagasse pulp',
    variants: ['6x6 inch', '7x5 inch', '8x6 inch', '9x6 inch'],
    features: ['Hinged lid', 'Leak-resistant', 'Grease resistant', 'Stackable'],
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Containers',
  },
  {
    slug: 'paper-cutlery',
    name: 'Paper Cutlery',
    shortName: 'Paper Cutlery',
    tagline: 'Biodegradable utensils that resist bending and liquid absorption.',
    description:
      'Layered paper cutlery engineered for rigidity and moisture resistance. An alternative to plastic disposable utensils for foodservice, delivery, and catering operations seeking fully compostable place settings.',
    applications: ['Food delivery', 'Catering', 'QSR chains', 'Airline service', 'Event dining'],
    material: 'Layered food-grade paper',
    variants: ['Fork', 'Spoon', 'Knife', 'Teaspoon', 'Cutlery sets'],
    features: ['Bend resistant', 'Liquid resistant', 'Compostable', 'Plastic-free'],
    image: 'https://images.pexels.com/photos/4207799/pexels-photo-4207799.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Cutlery',
  },
  {
    slug: 'dona-bowls',
    name: 'Dona Bowls',
    shortName: 'Dona Bowls',
    tagline: 'Traditional form eco-tableware for quick bites and catering.',
    description:
      'Dona-style bowls designed for quick service, street food, and high-volume catering. A practical format for snacks, dry preparations, and portion service at events and institutional settings.',
    applications: ['Quick service', 'Street food', 'Event catering', 'Snack service', 'Festival dining'],
    material: 'Sugarcane bagasse pulp',
    variants: ['Small dona', 'Medium dona', 'Large dona'],
    features: ['Lightweight', 'Stackable', 'Compostable', 'Food-contact safe'],
    image: 'https://images.pexels.com/photos/583846/pexels-photo-583846.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Bowls',
  },
  {
    slug: 'square-plates',
    name: 'Square Plates',
    shortName: 'Square Plates',
    tagline: 'Modern geometric format for contemporary presentation.',
    description:
      'Square-format bagasse plates for modern food presentation and premium catering. Combines the structural integrity of our round plates with a contemporary profile suited to upscale and branded dining.',
    applications: ['Premium catering', 'Branded dining', 'Event service', 'Restaurant plating', 'Hotel service'],
    material: 'Sugarcane bagasse pulp',
    variants: ['7 inch square', '9 inch square', '10 inch square'],
    features: ['Liquid resistant', 'Grease resistant', 'Microwave safe', 'Modern format'],
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Plates',
  },
  {
    slug: 'slipper-lids',
    name: 'Slipper Lids',
    shortName: 'Slipper Lids',
    tagline: 'Secure-seal lids for cups and bowls in transit.',
    description:
      'Slipper-style lids designed to provide a secure seal for cups and bowls during transport and delivery. Engineered to fit our bowl range for leak-resistant, stackable food packaging.',
    applications: ['Delivery packaging', 'Takeaway service', 'Catering transport', 'Cloud kitchens'],
    material: 'Sugarcane bagasse pulp',
    variants: ['For 8 oz bowls', 'For 12 oz bowls', 'For 16 oz bowls', 'For 24 oz bowls'],
    features: ['Secure seal', 'Leak-resistant', 'Stackable', 'Compostable'],
    image: 'https://images.pexels.com/photos/4207791/pexels-photo-4207791.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Lids',
  },
];

export const productCategories = [
  'Round Plates',
  'Compartment Plates',
  'Meal Trays',
  'Round Bowls',
  'Clamshell Containers',
  'Paper Cutlery',
  'Dona Bowls',
  'Square Plates',
  'Slipper Lids',
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
