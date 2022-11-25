import switzerland from "assets/images/Switzerland/1.jpg";
import image_st_trip_start from "assets/images/shortTrip/trip_start.jpg";
import image_st_step_1 from "assets/images/shortTrip/step_1.jpg";
import image_st_step_2 from "assets/images/shortTrip/step_2.jpg";
import image_st_trip_end from "assets/images/shortTrip/trip_end.jpg";
import image_collines_de_champagne from "assets/images/TripCovers/collines_de_champagne.jpg";
import image_chemin_indre from "assets/images/TripCovers/chemins_indre.webp";
import image_autoroute_beauce from "assets/images/TripCovers/autoroute_de_beauce.jpg";
import image_platanes_yvelines from "assets/images/TripCovers/platanes_yvelines.jpg";
import image_pins_aquitaine from "assets/images/TripCovers/pins_aquitaine.jpg";
import image_ponts_norvege from "assets/images/TripCovers/ponts_norvege.jpeg";

export const mockedSearchResults = [
  {
    coordinates: {
      lat: 48.16491,
      lon: 7.079503,
    },
    name: "D61, Col du Louschbach",
    address: "1 Col du Bonhomme, 88230 Plainfaing, France",
  },
  {
    coordinates: {
      lat: 47.817446,
      lon: 7.179241,
    },
    name: "Uffholtz > Grand Ballon",
    address: "35 Rue de Soultz, 68700 Uffholtz, France",
  },
  {
    coordinates: {
      lat: 47.055658,
      lon: 7.060931,
    },
    name: "Col de Chasseral",
    address: "Rue des Prés-Bugnon 10, 2525 Le Landeron, Suisse",
  },
  {
    coordinates: {
      lat: 46.902066,
      lon: 6.578923,
    },
    name: "Le Faubourg",
    address: "Rue du Pré, 2114 Fleurier, Suisse",
  },
  {
    coordinates: {
      lat: 46.358469,
      lon: 6.977051,
    },
    name: "Route des agites",
    address: "Rte des Agittes 16, 1856 Corbeyrier, Suisse",
  },
  {
    coordinates: {
      lat: 46.619568,
      lon: 7.377361,
    },
    name: "Jaunpass",
    address: "Bifang 316A 3766 Boltigen, Suisse",
  },
  {
    coordinates: {
      lat: 46.808928,
      lon: 7.477394,
    },
    name: "Gurnigel Pass",
    address: "Gurnigelstrasse 9, 3132 Riggisberg, Suisse",
  },
  {
    coordinates: {
      lat: 46.781843,
      lon: 7.635391,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 46.991432,
      lon: 8.065955,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 46.704765,
      lon: 8.229666,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 46.562344,
      lon: 8.361785,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 46.617517,
      lon: 8.565992,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 46.506852,
      lon: 8.306979,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 46.392156,
      lon: 8.123838,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 46.355653,
      lon: 9.219933,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 46.524284,
      lon: 9.185605,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 46.690332,
      lon: 9.440671,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 47.002453,
      lon: 9.500531,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 47.169259,
      lon: 9.488295,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
  {
    coordinates: {
      lat: 46.875033,
      lon: 8.655996,
    },
    name: "Gurnigel Pass",
    address: "Steffisburg 3612, Suisse",
  },
];

export const mockedTrip = {
  id: 0,
  place: "Switzerland",
  thumbnail: switzerland,
  likeNumber: 3,
  commentNumber: 3,
  route: [
    {
      coordinates: { lat: 46.363623, lon: 6.517751 },
      address: "315 Rte des Grandes Alpes, 74500 Féternes",
      name: "Féternes",
    },
    {
      address: "Rue de la Gare 1, 1003 Lausanne, Switzerland",
      name: "Lausanne",
      coordinates: { lat: 46.133837, lon: 6.626808 },
    },
  ],
  pictures: [
    image_st_trip_start,
    image_st_step_1,
    image_st_step_2,
    image_st_trip_end,
  ],
  playlists: {
    deezer: "https://www.deezer.com/en/playlist/1060000000",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
  },
};

export const mockedTripLong = {
  id: 0,
  place: "Italy",
  thumbnail:
    "https://www.adventurouskate.com/wp-content/uploads/2022/05/Driving-in-Italy-scaled.jpg",
  likeNumber: 3,
  commentNumber: 3,
  route: [
    {
      coordinates: { lat: 46.13797, lon: 6.110138 },
      address: "Rue de la Gare 1, 1003 Lausanne, Switzerland",
      name: "Lausanne",
    },
    {
      coordinates: { lat: 46.140235, lon: 6.10727 },
    },
    {
      coordinates: { lat: 46.13953, lon: 6.104598 },
    },
    {
      image: "https://static.freeimages.com/images/home/filetypes/photo.png",
      coordinates: { lat: 46.13953, lon: 6.104598 },
    },
    {
      address: "Rue de la Gare 1, 1003 Lausanne, Switzerland",
      name: "Lausanne",
      coordinates: { lat: 46.142512, lon: 6.098811 },
      // [46.140235, 6.10727],
    },
    // [46.13797, 6.110138],
    // [46.140235, 6.10727],
    // [46.142512, 6.098811],
  ],
  pictures: [
    "https://cdn.travelpulse.com/images/31aaedf4-a957-df11-b491-006073e71405/bb73aab8-f2bf-4278-88c3-33dd628df23f/630x355.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1257553494.jpg?crop=0.670xw:1.00xh;0.0481xw,0&resize=640:*",
    "https://cdn.cnn.com/cnnnext/dam/assets/170606121206-italy---travel-destination---shutterstock-517522957.jpg",
  ],
  playlist: {
    deezer: "https://www.deezer.com/en/playlist/1060000000",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
  },
};

export const mockedData = {
  trips: [
    {
      id: 0,
      place: "Sillon de la Haute-Savoie",
      thumbnail: image_st_trip_start,
      likeNumber: 100,
      commentNumber: 10,
      isFavorite: true,
      category: "Nature",
      length: 20,
      duration: "15min",
    },
    {
      id: 1,
      place: "Approche des Yvelines",
      thumbnail: image_platanes_yvelines,
      likeNumber: 140,
      commentNumber: 30,
      isFavorite: true,
      category: "Chill",
      length: 42,
      duration: "33min",
    },
    {
      id: 2,
      place: "Chemins de l'Indre",
      thumbnail: image_chemin_indre,
      likeNumber: 124,
      commentNumber: 43,
      isFavorite: true,
      category: "Speed",
      length: 28,
      duration: "20min",
    },
    {
      id: 3,
      place: "Au rythme des pins d'aquitaine",
      thumbnail: image_pins_aquitaine,
      likeNumber: 110,
      commentNumber: 24,
      isFavorite: true,
      category: "Nature",
      length: 134,
      duration: "120min",
    },

    {
      id: 4,
      place: "Lignes de la Beauce",
      thumbnail: image_autoroute_beauce,
      likeNumber: 268,
      commentNumber: 45,
      isFavorite: true,
      category: "Speed",
      length: 87,
      duration: "51min",
    },

    {
      id: 5,
      place: "Collines de champagne",
      thumbnail: image_collines_de_champagne,
      likeNumber: 162,
      commentNumber: 31,
      isFavorite: true,
      category: "Chill",
      length: 113,
      duration: "96min",
    },
    {
      id: 6,
      place: "Forêt du Massif Central",
      thumbnail:
        "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
      likeNumber: 193,
      commentNumber: 62,
      isFavorite: true,
      category: "Nature",
      length: 50,
      duration: "38min",
    },
    {
      id: 7,
      place: "Ponts de norvège",
      thumbnail: image_ponts_norvege,
      likeNumber: 45,
      commentNumber: 7,
      isFavorite: true,
      category: "Chill",
      length: 117,
      duration: "100min",
    },
  ],
  news: [
    {
      title: "ALPINE F1 TEAM : 4ÈME PUISSANCE DU CHAMPIONNAT À ABU DHABI",
      image:
        "https://lesalpinistes.com/wp-content/uploads/2022/11/Alpine-F1-Team-A522-Abu-Dhabi-Fernando-Alonso-Esteban-Ocon-2022-6-3840x2048.jpg.webp",
      authorPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-D3wfBh_V5XWFQe5vNvxCJ0xsEmMaHL4IXRYcDPfmrD3M-Ey9y0GGAx54PnOXU0AsDk&usqp=CAU",
    },
    {
      title: `Gasly "agréablement surpris" par son premier jour chez Alpine`,
      image:
        "https://cdn-1.motorsport.com/images/amp/YMdy47g2/s1000/pierre-gasly-alpine-a522-1.webp",
      authorPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfTLkBrHxDjSUEjgfJWQUelcdWbluI1Co_Q9fZVgMMmb42WVjcSH0FvYRMeCSA9LvmDo&usqp=CAU",
    },
    {
      title: "ALPINE A110 R 2022 : LA PLUS RADICALE DES FRANÇAISES 🇫🇷",
      image:
        "https://lesalpinistes.com/wp-content/uploads/2022/10/Alpine-A110-R-Cover-1920x1024.jpg",
      authorPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-D3wfBh_V5XWFQe5vNvxCJ0xsEmMaHL4IXRYcDPfmrD3M-Ey9y0GGAx54PnOXU0AsDk&usqp=CAU",
    },
    {
      title:
        "F1 : Fernando Alonso quitte Alpine, une catastrophe est inévitable ?",
      image:
        "https://le10static.com/img/cache/article/576x324/0000/0021/216867.webp",
      authorPicture:
        "https://pbs.twimg.com/profile_images/1140959275424124928/W57PJtUh_400x400.png",
    },
    {
      title: "[Livre] Toutes les Alpine de route : les flèches de Dieppe",
      image:
        "https://www.automobile-sportive.com/images/news/Alpine-fleches-dieppe-livre.jpg",
      authorPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmEBmrIHdMrnTcoRQtUeDRzanAnwYuf514M2l40zJtg&s",
    },
    {
      title: `Alpine pourrait aider Williams en faisant rouler Sargeant`,
      image:
        "https://cdn-1.motorsport.com/images/amp/2GzrydE0/s1000/logan-sargeant-williams-fw44-1.webp",
      authorPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfTLkBrHxDjSUEjgfJWQUelcdWbluI1Co_Q9fZVgMMmb42WVjcSH0FvYRMeCSA9LvmDo&usqp=CAU",
    },
  ],
};
