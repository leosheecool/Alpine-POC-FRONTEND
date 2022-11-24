export type Trip = {
  id: number;
  place: string;
  image: string;
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
};
