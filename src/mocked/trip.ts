import image_alonso from "assets/images/alpine_alonso.png";
import image_laurent_rossi from "assets/images/laurent_rossi_alpine.png";
import image_f1_racing from "assets/images/F1_racing.png";
import image_f1_retro from "assets/images/Alpine_retro.jpg";
import switzerland from "assets/images/Switzerland/1.jpg";

export const mockedTrip = {
  id: 0,
  place: "Switzerland",
  thumbnail: switzerland,
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
    },
  ],
  pictures: [
    "https://img-4.linternaute.com/t4CHV7jImJOko9OIw7Zi4AEp5DM=/660x366/smart/fe4cdc42c6704f0999801738a2d474d9/ccmcms-linternaute/13287800.jpg",
    "https://st.depositphotos.com/1002772/1249/i/600/depositphotos_12499363-stock-photo-swiss-flag.jpg",
    "https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg",
    "https://i.f1g.fr/media/cms/orig/2022/07/07/ca661a2428e7ea8165d11c83cea709e04c6fc53faf09b4fbb8f08b9ccda5ea2a.jpg",
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
      place: "Switzerland",
      thumbnail: switzerland,
      likeNumber: 100,
      commentNumber: 10,
      isFavorite: true,
    },
    {
      id: 1,
      place: "Italy",
      thumbnail:
        "https://www.adventurouskate.com/wp-content/uploads/2022/05/Driving-in-Italy-scaled.jpg",
      likeNumber: 100,
      commentNumber: 10,
      isFavorite: true,
    },
    {
      id: 2,
      place: "London",
      thumbnail:
        "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
      likeNumber: 100,
      commentNumber: 10,
      isFavorite: true,
    },
    {
      id: 3,
      place: "London",
      thumbnail:
        "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
      likeNumber: 100,
      commentNumber: 10,
      isFavorite: true,
    },
    {
      id: 4,
      place: "London",
      thumbnail:
        "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
      likeNumber: 100,
      commentNumber: 10,
      isFavorite: true,
    },
    {
      id: 5,
      place: "London",
      thumbnail:
        "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
      likeNumber: 100,
      commentNumber: 10,
      isFavorite: true,
    },
    {
      id: 6,
      place: "London",
      thumbnail:
        "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
      likeNumber: 100,
      commentNumber: 10,
      isFavorite: true,
    },
    {
      id: 7,
      place: "London",
      thumbnail:
        "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
      likeNumber: 100,
      commentNumber: 10,
      isFavorite: true,
    },
  ],
  news: [
    {
      title:
        "CEO Laurent Rossi shares the outlooks on the future of the alpine brand future",
      image:
        "https://france3-regions.francetvinfo.fr/image/mRBqCmpgMQ9feqWKvxo7zqUVEtY/600x400/regions/2020/06/09/5edf1c79ce34d_000_m55xb-2935921.jpg",
      authorPicture: image_laurent_rossi,
    },
    {
      title: "Programmation du mondial de l'auto",
      image: image_f1_retro,
      authorPicture: image_laurent_rossi,
    },
    {
      title: "Rassemblement des conducteurs de A110",
      image: image_f1_racing,
      authorPicture: image_alonso,
    },
  ],
};
