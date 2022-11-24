export type Trip = {
  id: number;
  description?: string;
  length?: number;
  duration?: string;
  place: string;
  thumbnail: string;
  likeNumber: number;
  commentNumber: number;
  isFavorite?: boolean;
  route?: {
    coordinates: { lat: number; lon: number };
    address?: string;
    name?: string;
  }[];
  playlists?: {
    deezer?: string;
    spotify?: string;
    youtube?: string;
    appleMusic?: string;
  };
  pictures?: string[];
};
