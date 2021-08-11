import { AboutmeSection } from "../AboutmeSection";
import { InfoSection } from "../InfoSection";
import { SkillSection } from "../SkillSection";
import { MainContainer } from "./styled";
import Head from 'next/head';
import { PortfolioSection } from "../PortfolioSection";

export function MainPage() {
  return (
    <MainContainer>
      <Head>
        <title>Maxwell Laner</title>
      </Head>
      <InfoSection />
      <AboutmeSection />
      <SkillSection />
      <PortfolioSection />
    </MainContainer>
  );
}