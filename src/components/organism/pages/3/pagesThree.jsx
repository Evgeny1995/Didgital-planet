import React from "react";
import styles from "./pagesThree.module.css";
import HowItWorkDesk from "../../../atoms/howItsWork/howItsWork";
import HowItWorkSlider from "../../../molecules/howItWorkSlider/howItWorkSlider";
import image1 from "./../../../../assets/img/page3/photo1.png";
import image2 from "./../../../../assets/img/page3/photo2.png";
import image3 from "./../../../../assets/img/page3/photo3.png";
import image4 from "./../../../../assets/img/page3/photo4.png";

const PagesThree = () => {
 
    const howItWorkListData = [
      {
        id: "1",
        img: image1,
        title: "Готовим инвентарь",
        text: "Наши специалисты готовят каждые VR-очки к использованию, обрабатывая устройства специальным средством для ухода после каждого сеанса.",
      },
      {
        id: "2",
        img: image2,
        title: "Выбираем фильм",
        text: "В нашем архиве есть образовательные фильмы по теме космоса, астрологии и обществознания. Мы работаем с самым крупным производителем мультимедиа продуктов в РФ.",
      },
      {
        id: "3",
        img: image3,
        title: "Надеваем VR-очки",
        text: "Ученики получают VR-очки, наш техник помогает им разобраться как правильно надеть очки и закрепить их на голове.Для ребят со зрением, отличным от 100%,техник настраивает диоптрии.",
      },
      {
        id: "4",
        img: image4,
        title: "Исследуем галактики!",
        text: "Ребята окунаются в виртуальные миры и с удовольствием изучают все вокруг. После показа остаются яркие эмоции и запоминаются важные моменты о планетах, звёздах и галактике.",
      },
    ];


  return (
    <div className={styles.deskPagesthreeContainer}>
      <div className={styles.deskPagesthreeContent}>
        <div className={styles.titleBodrer}>
          <h2 className={styles.title}>Как это работает?</h2>
        </div>
        <HowItWorkSlider howItWorkListData={howItWorkListData}/>
        <HowItWorkDesk howItWorkListData={howItWorkListData}/>
      </div>
    </div>
  );
};

export default PagesThree;
