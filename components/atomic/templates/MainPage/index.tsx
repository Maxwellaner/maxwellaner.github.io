import Particles from "react-tsparticles";

import { AboutmeSection } from "../AboutmeSection";
import { InfoSection } from "../InfoSection";
import { SkillSection } from "../SkillSection";
import { MainContainer } from "./styled";
import { PortfolioSection } from "../PortfolioSection";
import { FooterSection } from "../FooterSection";
import LeftContactBar from "../../molecules/LeftContactBar";
import RightName from "../../molecules/RightName";
import ScrollDown from "../../atoms/ScrollDown";
import { useCallback, useEffect, useState } from "react";

export function MainPage() {
  const [scroll, setScroll] = useState(0);
  const [animateProgressbar, setAnimateProgressbar] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);

  let userAreScrolling: NodeJS.Timeout;

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      listenScroll(e);
      clearTimeout(userAreScrolling);
      userAreScrolling = setTimeout(() => {
        setIsScrolling(false);
      }, 1000)
    });

    return () => {
      window.removeEventListener('scroll', (e) => listenScroll(e));
    }
  }, [])

  function listenScroll(e: Event) {
    setIsScrolling(true);
    if (process.browser) {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      setScroll(scrollTop);
    }
  }

  useEffect(() => {
    const skillsOffset = document.getElementById("skills")?.offsetTop;

    if (scroll >= (skillsOffset as number * 0.8)) setAnimateProgressbar('anime-progressbar');
    else if (scroll < (skillsOffset as number * 0.5)) setAnimateProgressbar('');

  }, [scroll])

  const getAnimationTime = useCallback(
    (id: number) => {
      const animationTime = {
        childNumber: id,
        duration: 2 + (id * 0.2),
      }

      return animationTime;
    },
    []
  )

  return (
    <>
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            line_linked: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1
            },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 600 },
              bounce: false,
              direction: "bottom-right",
              enable: true,
              out_mode: "out",
              random: true,
              speed: 0.3,
              straight: false
            },
            number: { density: { enable: true, value_area: 800 }, value: 600 },
            opacity: {
              anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
              random: {
                enable: true,
                minimumValue: 0.3
              },
              value: 0.6
            },
            shape: {
              type: "circle"
            },
            size: {
              anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
              random: false,
              value: 1
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onclick: { enable: false, mode: "repulse" },
              onhover: {
                enable: true,
                mode: "bubble",
                parallax: { enable: false, force: 2, smooth: 10 }
              },
              resize: true
            },
            modes: {
              bubble: { distance: 200, duration: 2, opacity: 0, size: 0 },
              grab: { distance: 400, line_linked: { opacity: 1 } },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
              repulse: { distance: 400, duration: 0.4 }
            }
          },
          retina_detect: true
        }}
      />
      <MainContainer>
        <LeftContactBar />
        <RightName />
        <ScrollDown isScrolling={isScrolling} />
        <InfoSection />
        <AboutmeSection />
        <SkillSection animateProgressbar={animateProgressbar} getAnimationTime={getAnimationTime} />
        <PortfolioSection />
        <FooterSection />
      </MainContainer>
    </>
  );
}