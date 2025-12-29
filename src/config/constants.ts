/**
 * Variables globales de la aplicación
 * Centraliza URLs, rutas y otras constantes de configuración
 */

// URLs y rutas de la aplicación
export const ROUTES = {
  APP_URL: 'https://app.medbooq.com',
  ADMIN_URL: 'https://app.medbooq.com/admin',
  // Agrega más rutas según sea necesario
} as const;

// Anclas de navegación (hash links)
export const ANCHORS = {
  FEATURES: '#features',
  CLINICS: '#clinicas',
  BENEFITS: '#beneficios',
} as const;

// URLs de API (si aplica)
export const API_URLS = {
  // BASE_URL: import.meta.env.PUBLIC_API_URL || 'https://api.medbooq.com',
  // Ejemplo: AUTH: '/api/auth',
  // Ejemplo: APPOINTMENTS: '/api/appointments',
} as const;

// Información de la aplicación
export const APP_INFO = {
  NAME: 'MedBooq',
  DESCRIPTION: 'Software de gestión para clínicas',
  TAGLINE: 'Gestiona tu clínica de forma simple y eficiente',
} as const;

// Configuración de la aplicación
export const APP_CONFIG = {
  TRIAL_DAYS: 14,
  // Agrega más configuraciones según sea necesario
} as const;

// URLs externas (redes sociales, documentación, etc.)
export const EXTERNAL_URLS = {
  // Ejemplo: DOCUMENTATION: 'https://docs.medbooq.com',
  // Ejemplo: SUPPORT: 'https://support.medbooq.com',
  // Ejemplo: TWITTER: 'https://twitter.com/medbooq',
} as const;

