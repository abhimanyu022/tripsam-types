import z from "zod";

export const SafariDocuments = z.enum(['aadhaar_front', 'aadhaar_back', 'driving_license_front', 'driving_license_back', 'vehicle_rc', 'pan_card']);