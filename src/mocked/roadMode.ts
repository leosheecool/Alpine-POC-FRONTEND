import { ReactComponent as NatureSvg } from "assets/vectors/nature.svg";
import { ReactComponent as RoadSvg } from "assets/vectors/road.svg";
import { ReactComponent as SeatSvg } from "assets/vectors/seat.svg";
import { ReactComponent as BookmarkSvg } from "assets/vectors/bookmark.svg";

export const roadModeMocked = [
  {
    icon: BookmarkSvg,
    value: "Bookmark",
    isActive: false,
  },
  {
    icon: RoadSvg,
    value: "Road",
    isActive: true,
  },
  {
    icon: SeatSvg,
    value: "Seat",
    isActive: false,
  },
  {
    icon: NatureSvg,
    value: "Nature",
    isActive: false,
  },
];
