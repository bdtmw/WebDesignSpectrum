export const websitePortfolio = Array.from({ length: 10 }, (_, index) => ({
    id: `website-${index + 1}`,
    image: `/images/Mockups/portfolio/website/website${index + 1}.png`,
    preview: `/images/Mockups/portfolio/website/website${index + 1}.png`,
    alt: `Website design portfolio ${index + 1}`,
    type: "image",
}));

export const marketingPortfolio = [
    {
        id: "marketing-1",
        image: "/images/Mockups/portfolio/1.jpg",
        preview: "/images/Mockups/portfolio/1.jpg",
        alt: "Digital marketing portfolio 1",
        type: "image",
    },
    {
        id: "marketing-2",
        image: "/images/Mockups/portfolio/2.jpg",
        preview: "/images/Mockups/portfolio/2.jpg",
        alt: "Digital marketing portfolio 2",
        type: "image",
    },
    {
        id: "marketing-3",
        image: "/images/Mockups/portfolio/3.jpg",
        preview: "/images/Mockups/portfolio/3.jpg",
        alt: "Digital marketing portfolio 3",
        type: "image",
    },
    {
        id: "marketing-4",
        image: "/images/Mockups/portfolio/1.webp",
        preview: "/images/Mockups/portfolio/1.webp",
        alt: "Digital marketing portfolio 4",
        type: "image",
    },
    {
        id: "marketing-5",
        image: "/images/Mockups/portfolio/3.webp",
        preview: "/images/Mockups/portfolio/3.webp",
        alt: "Digital marketing portfolio 5",
        type: "image",
    },
    {
        id: "marketing-6",
        image: "/images/Mockups/portfolio/4.webp",
        preview: "/images/Mockups/portfolio/4.webp",
        alt: "Digital marketing portfolio 6",
        type: "image",
    },
    {
        id: "marketing-7",
        image: "/images/Mockups/portfolio/5.webp",
        preview: "/images/Mockups/portfolio/5.webp",
        alt: "Digital marketing portfolio 7",
        type: "image",
    },
];

export const logoDesign = [
    "/images/Mockups/portfolio/logo/lg-01.jpg",
    "/images/Mockups/portfolio/logo/lg-02.jpg",
    "/images/Mockups/portfolio/logo/lg-03.jpg",
    "/images/Mockups/portfolio/logo/lg-04.jpg",
    "/images/Mockups/portfolio/logo/lg-05.jpg",
    "/images/Mockups/portfolio/logo/lg-06.jpeg",
    "/images/Mockups/portfolio/logo/lg-07.jpeg",
    "/images/Mockups/portfolio/logo/lg-08.jpeg",
    "/images/Mockups/portfolio/logo/lg-09.jpeg",
    "/images/Mockups/portfolio/logo/lg-10.jpeg",
];

export const animationVideos = [
    "https://www.youtube.com/watch?v=sAn4_KJ4Rds",
    "https://www.youtube.com/watch?v=IrCgmAIB4Yg",
    "https://www.youtube.com/watch?v=4Xk22hadb-c",
    "https://www.youtube.com/watch?v=Ng_xiB89ISQ",
    "https://www.youtube.com/watch?v=FRRxCCIAQiw",
    "https://www.youtube.com/watch?v=O8x9uMFUIHE",
    "https://www.youtube.com/watch?v=FoKXreN5rvk",
    "https://www.youtube.com/watch?v=1TnnJR9n7Jg",
    "https://www.youtube.com/watch?v=BsXs-tR6iS4",
    "https://www.youtube.com/watch?v=1SqMcd43X4I",
];

export const application = Array.from({ length: 5 }, (_, index) => ({
    id: `application-${index + 1}`,
    image: `/images/Mockups/portfolio/website/webApp${index + 1}.png`,
    preview: `/images/Mockups/portfolio/website/webApp${index + 1}.png`,
    alt: `Website design portfolio ${index + 1}`,
    type: "image",
}));


export const animationPortfolio = animationVideos.map((video, index) => ({
    id: `animation-${index + 1}`,
    image: `/images/Mockups/portfolio/website/webApp${String(
        index + 1
    ).padStart(2, "0")}.webp`,
    preview: video,
    alt: `Video animation portfolio ${index + 1}`,
    type: "video",
}));


export const logoDesigns = Array.from({ length: 10 }, (_, index) => ({
  id: `logo-${index + 1}`,
  image: `/images/Mockups/portfolio/logo/lg-${String(index + 1).padStart(2, "0")}.webp`,
  preview: `/images/Mockups/portfolio/logo/lg-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Logo design portfolio ${index + 1}`,
  type: "image",
}));