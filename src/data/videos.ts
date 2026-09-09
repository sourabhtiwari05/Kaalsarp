export interface Video {
  id: string;
  videoId: string;
  label: string;
  type: "portrait" | "landscape";
  alt: string;
}

export const videos: Video[] = [
  {
    id: "v1",
    videoId: "rDZ8237RUyM",
    label: "पूजा अनुष्ठान झलक",
    type: "portrait",
    alt: "Kaal Sarp Dosh Puja video Ujjain - Pandit Dheeraj Sharma",
  },
  {
    id: "v2",
    videoId: "SigQw9bAXtU",
    label: "पूजा अनुष्ठान झलक",
    type: "portrait",
    alt: "Dosh Nivaran Puja video Ujjain - Pandit Dheeraj Sharma",
  },
  {
    id: "v3",
    videoId: "RgAn3B9asMM",
    label: "सम्पूर्ण पूजा विधि",
    type: "landscape",
    alt: "Sampurna Puja Vidhi video Ujjain - Pandit Dheeraj Sharma",
  },
];
