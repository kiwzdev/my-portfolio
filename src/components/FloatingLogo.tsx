import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const logos = [
  "https://raw.githubusercontent.com/github/explore/master/topics/react/react.png",
  "https://raw.githubusercontent.com/github/explore/master/topics/nextjs/nextjs.png",
  "https://raw.githubusercontent.com/github/explore/master/topics/javascript/javascript.png",
  "https://raw.githubusercontent.com/github/explore/master/topics/typescript/typescript.png",
  "https://raw.githubusercontent.com/github/explore/master/topics/html/html.png",
  "https://raw.githubusercontent.com/github/explore/master/topics/css/css.png",
  "https://raw.githubusercontent.com/github/explore/master/topics/vue/vue.png",
  "https://raw.githubusercontent.com/github/explore/master/topics/vite/vite.png",
  "https://raw.githubusercontent.com/github/explore/master/topics/flutter/flutter.png",
];

export default function FloatingLogoMarqueeSlow() {
  // ตรวจสอบขนาดจอ
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ปรับค่า responsive
  const logoWidth = isMobile ? 150 : 250; // ระยะห่างโลโก้
  const duration = isMobile ? 30000 : 60000; // ความเร็ว animation (จอเล็กเร็วขึ้น)

  const trackWidth = logos.length * logoWidth;

  const spring = useSpring({
    from: { x: 0 },
    to: { x: -trackWidth },
    loop: true,
    config: { duration },
  });
  return (
    <div className="w-full py-8 overflow-hidden md:overflow-visible">
      <div className="relative h-32">
        {[...logos, ...logos].map((logo, i) => (
          <animated.div
            key={i}
            style={{
              position: "absolute",
              transform: spring.x.to(
                (x) => `translateX(${x + i * logoWidth}px)`
              ),
              top: "0px",
            }}
          >
            <img
              src={logo}
              className="
    w-28 h-28 mx-10 object-contain drop-shadow-xl md:drop-shadow-xl
    transition-transform duration-200 hover:scale-110
    dark:brightness-[0.85]
  "
              alt="logo"
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}
