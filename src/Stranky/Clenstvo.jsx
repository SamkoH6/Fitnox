import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import ClenstvoSection from "../components/ClenstvoSection";
import "./Clenstvo.css";

import headerImage from "../images/bg2.jpeg";
import sectionImage1 from "../images/jednorazovy_vstup.jpeg";
import sectionImage2 from "../images/personal-vert.jpeg";
import sectionImage3 from "../images/box-vert.jpeg";

const Clenstvo = () => {
  return (
    <div>
      <Header
        title={"Členské benefity"}
        description={
          "Fitnox je k dispozícii vždy a kdekoľvek chcete, s bezproblémovým integrovaním fyzických a digitálnych možností. Preskúmajte výhody, ktoré získate s členstvom v Fitnox nižšie."
        }
        imageUrl={headerImage}
      />
      <Table />
      <ClenstvoSection
        title={"Jednorazový Vstup"}
        description={
          "Vstup do fitka na jedno cvičenie stojí iba 10 €. Táto cenová ponuka umožňuje každému vyskúšať naše fitness vybavenie a služby bez záväzkov. Pridajte sa k nám a vychutnajte si jedinečný tréningový zážitok za dostupnú cenu."
        }
        imageUrl={sectionImage1}
      />
      <ClenstvoSection
        title={"Osobný Tréning"}
        description={
          "Silnejší. Všetky triedy v Fitnoxu sú vytvorené a vyvinuté najlepšími odborníkmi v odvetví a vyučované talentovanými fitness inštruktormi, ktorí testujú vaše limity a inšpirujú k výsledkom. Každá trieda je rezervovaná vopred a je pre vás ako člena zdarma. Využite svoju exkluzívnu ponuku a vyskúšajte si triedu vo Fitnoxe."
        }
        imageUrl={sectionImage2}
      />
      <ClenstvoSection
        title={"Box"}
        description={
          "Kondička. Všetky boxerské kurzy v Fitnoxu sú vytvorené a vyvinuté skúsenými odborníkmi v oblasti a vedené talentovanými boxerskými trénermi, ktorí vás budú motivovať a posúvať vaše limity. Rezervujte si svoje miesto vopred a ako člen získate bezplatný prístup ku každej hodine. Využite exkluzívnu ponuku a ochutnajte svet boxu vo Fitnoxe."
        }
        imageUrl={sectionImage3}
      />
    </div>
  );
};

export default Clenstvo;
