

///////////////////



export interface QueryParams {
  language?: string;
  include_image_language?: string;
  page?: number;
  sort_by?: string;
  query?: string;
  // Usamos nombres de propiedades con strings para soportar los puntos de TMDB
  'primary_release_date.gte'?: string;
  'primary_release_date.lte'?: string;
}