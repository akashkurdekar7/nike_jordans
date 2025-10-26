import React, {useState, useEffect, useRef} from "react";
import NavBar from "./components/NavBar";
import gsap from "gsap";
import blue from "./assets/images/blue.png";
import orange from "./assets/images/orange.png";
import red from "./assets/images/red.png";
import yellow from "./assets/images/yellow.png";
import {BiPlus, BiMinus} from "react-icons/bi";
import {IoIosArrowForward} from "react-icons/io";
import SplitText from "gsap/SplitText";
import Loader from "./components/Loader";

const App = () => {
  const [count, setCount] = useState(1);
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const handlePlus = () => setCount((prev) => prev + 1);

const handleMinus = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));


  const jordans = [
    {
      id: 1,
      name: "Air Jordan Red Edition",
      price: [120, 180],
      image: red,
      size: [38, 39, 40, 41, 42],
      bg: "bg-red-500",
      description:
        "The Air Jordan Red Edition combines bold color with classic comfort. Designed with premium materials and superior cushioning for all-day wear.",
    },
    {
      id: 2,
      name: "Air Jordan Orange Blaze",
      price: [110, 170],
      image: orange,
      size: [38, 39, 40, 41, 42],
      bg: "bg-orange-500",
      description:
        "The Orange Blaze brings energy and flair to your step. Lightweight and durable, perfect for both street style and performance.",
    },
    {
      id: 3,
      name: "Air Jordan Blue Wave",
      price: [130, 190],
      image: blue,
      size: [38, 39, 40, 41, 42],
      bg: "bg-blue-500",
      description:
        "Ride the Blue Wave of style and comfort. Featuring breathable mesh and responsive cushioning, ideal for every move.",
    },
    {
      id: 4,
      name: "Air Jordan Yellow Strike",
      price: [100, 160],
      image: yellow,
      size: [38, 39, 40, 41, 42],
      bg: "bg-yellow-500",
      description:
        "Stand out with the Yellow Strike’s vibrant design and smooth performance. A true fusion of fashion and function.",
    },
  ];

  const nextSlide = () => {
    animateOut(() =>
      setCurrent((prev) => (prev === jordans.length - 1 ? 0 : prev + 1))
    );
  };

  const animateOut = (onComplete) => {
    const tl = gsap.timeline({
      onComplete,
    });
    tl.to(imageRef.current, {
      x: -200,
      opacity: 0,
      rotate: -20,
      duration: 0.5,
      ease: "power2.inOut",
    }).to(
      contentRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "<"
    );
  };

  useEffect(() => {
    // Set loading to false when component mounts
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 second loading time

    gsap.fromTo(
      imageRef.current,
      {x: 200, opacity: 0, rotate: 20},
      {x: 0, opacity: 1, rotate: 0, duration: 0.8, ease: "power3.out"}
    );

    // Cleanup function to clear the timer if component unmounts
    return () => clearTimeout(timer);
    gsap.fromTo(
      contentRef.current,
      {y: 50, opacity: 0},
      {y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1}
    );
    const words = new SplitText(descriptionRef.current, {
      type: "words",
      wordsClass: "word",
    });
    gsap.fromTo(
      words.words,
      {opacity: 0, y: 20},
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
        delay: 0.3,
      }
    );

    gsap.fromTo(
      priceRef.current,
      {y: 100},
      {
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
      }
    );
  }, [current]);

  const jordan = jordans[current];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <NavBar />
      <main
        className={`${jordan.bg} h-[100vh] flex flex-col justify-between pt-[8vw] px-[4vw] relative overflow-hidden`}>
        {/* Top Content */}
        <div ref={contentRef} className="flex justify-between items-end">
          <h1 className="text-[2.5vw] longshot capitalize w-[30vw] text-white">
            {jordan.name}
          </h1>
          <div className="flex items-start gap-2 flex-col">
            <h4 className="text-[1vw] tracking-[.2vw] uppercase text-white">
              size
            </h4>
            <ul className="flex gap-2">
              {jordan.size.map((size) => (
                <li key={size}>
                  <button className="px-[1vw] py-[.5vw] rounded-full text-[1vw] uppercase backdrop-blur-[10px] bg-white/20 text-black border border-white/30 flex items-center justify-center cursor-pointer">
                    {size}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Shoe Image */}
        <img
          ref={imageRef}
          src={jordan.image}
          alt={jordan.name}
          className="w-[35vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        />

        {/* Bottom Content */}
        <div className="flex items-end gap-2 justify-between pb-[3vw] text-white">
          <div className="w-[20vw]">
            <div className="flex items-center gap-2 mb-2 overflow-hidden">
              <div ref={priceRef} className="flex items-center gap-2">
                <h4 className="text-[1vw] uppercase">quality favor</h4>
                {jordan.price.map((price, i) => (
                  <span key={i} className="text-[1vw] uppercase">
                    ${price}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[1vw] lufgamedium " ref={descriptionRef} >{jordan.description}</p>
           
          </div>

          <div className="flex items-center gap-[4vw]">
            <div className="flex items-center gap-2 rounded-full text-white">
              <div className="border border-white p-[.3vw]">
                <BiMinus
                  className="text-[1vw] cursor-pointer"
                  onClick={handleMinus}
                />
              </div>
              <span className="text-[1vw]">{count}</span>
              <div className="border border-white p-[.3vw]">
                <BiPlus
                  className="text-[1vw] cursor-pointer"
                  onClick={handlePlus}
                />
              </div>
            </div>
            <button className="bg-white text-black px-[2.5vw] py-[.5vw] rounded-full text-[1vw] capitalize">
              add to cart
            </button>
          </div>
        </div>

        <div className="absolute bottom-[2vw] left-1/2 -translate-x-1/2 flex gap-[2vw] z-30 ">
          <button
            onClick={nextSlide}
            className="px-[1vw] py-[1vw] rounded-full text-[1vw] uppercase backdrop-blur-[10px] bg-white/20 text-black border border-white/30 flex items-center justify-center cursor-pointer">
            <IoIosArrowForward className="text-[1vw] text-white" />
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
