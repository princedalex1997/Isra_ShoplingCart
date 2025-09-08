import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
} from "react-icons/hi";
import { FaShippingFast, FaHeadset, FaLock } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { PiMoneyWavyLight } from "react-icons/pi";

export const HeaderComList = [
  {
    key: "Home",
    label: "Home",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "Aboutus",
    label: "About Us",
    path: "/about",
    icon: <HiOutlineCube />,
  },
  {
    key: "Contact",
    label: "Contact",
    path: "/contect",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "Shop",
    label: "Shop",
    path: "shop",
    icon: <HiOutlineUsers />,
  },

];

export const infoItems = [
  {
    title: "Free Shiping",
    description: "Get your odrders deliverd with no  extra cost",
    icon: <FaShippingFast className="text-3xl text-red-600 dark:text-white" />,
  },
  {
    title: "Support 24/7",
    description: "We are here  to assist you at any time",
    icon: <FaHeadset className="text-3xl text-red-600 dark:text-white" />,
  },
  {
    title: "100% Money Back",
    description: "Full redunf if you are not satistifed",
    icon: (
      <PiMoneyWavyLight className="text-3xl text-red-600 dark:text-white" />
    ),
  },
  {
    title: "Payment Secure",
    description: "Your payment information is safe with as",
    icon: <FaLock className="text-3xl text-red-600 dark:text-white" />,
  },
  {
    title: "Discount",
    description: "Enjoy the best prices on our products",
    icon: <MdLocalOffer className="text-3xl text-red-600 dark:text-white" />,
  },
];

export const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    image:
      "https://images-cdn.ubuy.co.in/65c03483c1514e42b735f576-hp-15-6-fhd-laptop-amd-ryzen-5-7520u.jpg",
    price: 55000,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    image: "https://images.indianexpress.com/2024/08/7142Yat1NiL._SX679_.jpg",
    price: 30000,
    rating: 4.3,
  },
  {
    id: 3,
    name: "Tablet",
    category: "Electronics",
    image:
      "https://image.made-in-china.com/226f3j00lwbIfYyEOgUh/Android-Tablet-PC-RAM-8GB-ROM-256GB-10-9-Inch-HD-Screen-Flat-Computer.webp",
    price: 20000,
    rating: 4.1,
  },
  {
    id: 4,
    name: "Headphones",
    category: "Electronics",
    image:
      "https://www.jiomart.com/images/product/original/rv0fwsekha/matlek-wired-gaming-headphones-with-mic-surround-sound-deep-bass-works-with-all-mobile-phones-product-images-orv0fwsekha-p594621915-0-202210190429.jpg?im=Resize=(1000,1000)",
    price: 1500,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Shirt",
    category: "Clothing",
    image:
      "https://www.blackstitch.in/cdn/shop/files/LTST_TRND_PL_DARK_GREEN_4_8e3b3e8e-d8e2-42fe-96b9-0daae0dc1345_1445x.webp?v=1727152886",
    price: 1200,
    rating: 4.4,
  },
  {
    id: 6,
    name: "Jeans",
    category: "Clothing",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240430/C6Hk/6630475505ac7d77bb332482/-1117Wx1400H-467162954-black-MODEL.jpg",
    price: 2000,
    rating: 4.2,
  },
  {
    id: 7,
    name: "Jacket",
    category: "Clothing",
    image:
      "https://static.zara.net/assets/public/5075/c8ec/bfe14d88a5cc/6e57a792cfe8/08073263716-p/08073263716-p.jpg?ts=1726831599623&w=824",
    price: 3000,
    rating: 4.6,
  },
  {
    id: 8,
    name: "Sneakers",
    category: "Clothing",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/j/u/w/7-1522-multi-shozie-multicolor-original-imagegdaad9g8mvs-bb.jpeg?q=90&crop=false",
    price: 2500,
    rating: 4.6,
  },
  {
    id: 9,
    name: "Novel",
    category: "Books",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/gh-best-romance-books-64ecb8c82221e.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    price: 500,
    rating: 4.7,
  },
  {
    id: 10,
    name: "Notebook",
    category: "Books",
    image:
      "https://www.worldone.in/cdn/shop/files/61B0Kd9qcKL._SL1280_1024x1024.jpg?v=1736329737",
    price: 100,
    rating: 4.0,
  },
  {
    id: 11,
    name: "Biography",
    category: "Books",
    image:
      "https://www.mynotes.org.in/wp-content/uploads/2022/05/A5-School-Notebook.jpg",
    price: 400,
    rating: 4.1,
  },
  {
    id: 12,
    name: "Comics",
    category: "Books",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6GX9dMpgf7SI7FluDmFqLjEMO8WOAwkijQ&s",
    price: 300,
    rating: 4.3,
  },
  {
    id: 13,
    name: "Sofa",
    category: "Furniture",
    image:
      "https://shopps.in/wp-content/uploads/2023/10/1200x1200-38-1024x1024.jpg",
    price: 20000,
    rating: 4.5,
  },
  {
    id: 14,
    name: "Table",
    category: "Furniture",
    image:
      "https://m.media-amazon.com/images/I/91r2aGIAXqL._AC_UF894,1000_QL80_.jpg",
    price: 8000,
    rating: 4.2,
  },
  {
    id: 15,
    name: "Chair",
    category: "Furniture",
    image: "https://cdn.moglix.com/p/djsrKBRPVjQIC-xxlarge.jpg",
    price: 3000,
    rating: 4.1,
  },
  {
    id: 16,
    name: "Bookshelf",
    category: "Furniture",
    image:
      "https://images-cdn.ubuy.co.in/63dc07eb2c44894dcb46d125-tree-bookshelf-9-tier-geometric-tree.jpg",
    price: 5000,
    rating: 4.4,
  },
  {
    id: 17,
    name: "Doll",
    category: "Toys",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230911/pVxb/64ff3056ddf7791519cabef2/-473Wx593H-4936631160-multi-MODEL.jpg",
    price: 700,
    rating: 4.3,
  },
  {
    id: 18,
    name: "Car Toy",
    category: "Toys",
    image:
      "https://toyloft.in/cdn/shop/files/McQueenRacingCar_2.jpg?v=1715861879",
    price: 1200,
    rating: 4.5,
  },
  {
    id: 19,
    name: "Puzzle",
    category: "Toys",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kst9gnk0/role-play-toy/q/n/i/kids-number-puzzles-mini-size-play-puzzle-numbers-set-toy-kids-original-imag6bfkdjhyh9wx.jpeg?q=90&crop=false",
    price: 600,
    rating: 4.2,
  },
  {
    id: 20,
    name: "Building Blocks",
    category: "Toys",
    image:
      "https://intelkidsstore.com/cdn/shop/products/21333f50-6319-45bc-b170-8493b2ca2246_1024x1024.jpg?v=1680114972",
    price: 1500,
    rating: 4.4,
  },
];







