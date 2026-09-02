export interface VehicleColor {
  name: string;
  hex: string;
}

export interface TechnicalSpecs {
  engine: string;
  power: string;
  torque: string;
  drivetrain: string;
  transmission: string;
  fuelType: string;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  trim: string;
  price: string;
  description: string;
  heroImage: string;
  mobileHeroImage?: string;
  videoUrl?: string; // Add optional video property
  thumbnail: string;
  actionImage: string;
  imageStyle: string;
  engineSpec: string;
  powerSpec: string;
  colors: VehicleColor[];
  features: string[];
  galleryImages?: string[];
  specs?: TechnicalSpecs;
  historyChecklist?: string[];
  financingEstimate?: {
    monthly: string;
    term: string;
    apr: string;
  };
}