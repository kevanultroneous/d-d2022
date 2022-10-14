import image from "../Assets/images/model.jpg";
import user from "../Assets/images/user.png";
import user2 from "../Assets/images/user2.png";
import user3 from "../Assets/images/user3.png";
import user4 from "../Assets/images/user4.png";
import user5 from "../Assets/images/user5.png";
import user6 from "../Assets/images/user6.png";

import plr from "../Assets/images/plr.png";
export const MyUrl = window.location.origin;
export const findId = (str) => {
  let k1 = str.indexOf("-");
  let k2 = str.substring(k1 + 1);
  return k2;
};

const apiUrl1 = "http://52.66.95.205:8001/";
// const apiUrl2 = "http://192.168.29.42:8000/"
export const TempleLink = apiUrl1 + "temples/";
export const FrameLink = apiUrl1 + "frames/";
export const customTempleList = [
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
];
export const customTempleList2 = [
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
  {
    image: image,
    name: "Modern Temples",
    price: "$3800",
  },
];
export const ListForSlider = [
  {
    paragraph:
      "Got Divine decores reference from a close relative as we wanted a mandir for our home. We went out there and after looking  at  different mandirs we not only ordered the mandir but infarct decided to buy some more items like wall hangings",
    username: "Shiv Mulchandani,  Sydney",
    rating: 5,
    icon: user5,
  },
  {
    paragraph:
      "For the past many months, I was looking for a Derasar but could not find the one I wanted. I had my preparation done to import it from India but then our relative suggested us this website and then after going through the designs we decided to buy it from here.",
    username: "Urja Modi,  Sydney",
    rating: 5,
    icon: user4,
  },
  {
    paragraph:
      "Our parents shifted from India a week before and my mom wanted a large temple. We then started looking online and decided to buy it from divine decors as I liked the design.",
    username: "Harsh Makwana,  Sydney",
    rating: 4.5,
    icon: user2,
  },
  {
    paragraph:
      " We wanted a specific temple made up of pine wood the  design we had in our mind was a bit of a tricky one, we inquired but could not find any then one of our relatives gave contact of divine decores we visited there and explained our design and then they  show us  some samples and we did get what we wanted and finally placed our order.",
    username: "Brijal Shah,  Sydney",
    rating: 5,
    icon: user6,
  },
  {
    paragraph:
      "We wanted to give a wall hanging to one of our close friends as a housewarming gift and as a Hindu no better gift is a Ganesha wall hanging. We came across divine decores on instagram and saw their hangings. We found it beautiful. We inquired on call and then placed the  order of our  size with some customization.",
    username: "Yogesh  Patel,  Sydney",
    rating: 5,
    icon: user3,
  },
  {
    paragraph:
      "I needed a temple for my new home and I wanted my Mandir to be customized according to the architecture of the home. I was really confused and then I came across divine decores. Their budget-friendly pricing and custom options helped match the expectations of what I wanted.",
    username: "Bhagat Zaveri, Sydney",
    rating: 5,
    icon: user,
  },
];
export const personalViewList = {
  images: [image, image, image, image, image],
  label: "Modern  Temple",
  price: "$3800",
  available: true,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  information: [
    "We make this mandir model in many different sizes & colours as per customer requirement",
    "Height, depth and interior features 100% customisable",
    "Can be made as standing puja mandir or sitting puja mandir",
    "Made in Sydney, Australia out of 100% local wood best for local climate conditions",
    "We use Aussie pine wood/maple wood/oak wood",
    "Manufacturing time frame 6-8 weeks from order to delivery",
    "Brass bells and accessories available seperately",
  ],
  pillers: [
    {
      img: plr,
      nm: "FNO.1100",
    },
    {
      img: plr,
      nm: "FNO.1100",
    },
    {
      img: plr,
      nm: "FNO.1100",
    },
    {
      img: plr,
      nm: "FNO.1100",
    },
    {
      img: plr,
      nm: "FNO.1100",
    },
    {
      img: plr,
      nm: "FNO.1100",
    },
  ],
  related: customTempleList2,
};
export const sliderRes = [
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    },
  },
  // {
  //   breakpoint: 1024,
  //   settings: {
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     dots: true,
  //   },
  // },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 1,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];
