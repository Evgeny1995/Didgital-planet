import React from "react";
import styles from "./blockThree.module.css";
import HowItWorkDesk from "../../../molecules/howItsWork/howItsWork";
import HowItWorkSlider from "../../../molecules/howItWorkSlider/howItWorkSlider";
import image1 from "./../../../../assets/img/page3/photo1.png";
import image2 from "./../../../../assets/img/page3/photo2.png";
import image3 from "./../../../../assets/img/page3/photo3.png";
import image4 from "./../../../../assets/img/page3/photo4.png";

const BlockThree = () => {
  const howItWorkListData = [
    {
      id: "1",
      img: image1,
      title: "Готовим инвентарь",
      text: "Наши специалисты готовят каждые VR-очки к использованию, обрабатывая устройства специальным средством для ухода после каждого сеанса.",
      // styles: {
      //   backgroundColor: "#f3f3f3",
      // },
      // classNames: [styles.class_1],
    },
    {
      id: "2",
      img: image2,
      title: "Выбираем фильм",
      text: "В нашем архиве есть образовательные фильмы по теме космоса, астрологии и обществознания. Мы работаем с самым крупным производителем мультимедиа продуктов в РФ.",
      // styles: {
      //   backgroundColor: "red",
      // },
      // classNames: [styles.class_2],
    },
    {
      id: "3",
      img: image3,
      title: "Надеваем VR-очки",
      text: "Ученики получают VR-очки, наш техник помогает им разобраться как правильно надеть очки и закрепить их на голове.Для ребят со зрением, отличным от 100%,техник настраивает диоптрии.",
      // styles: {
      //   backgroundColor: "#f3f3f3",
      // },
      // classNames: [styles.class_3],
    },
    {
      id: "4",
      img: image4,
      title: "Исследуем галактики!",
      text: "Ребята окунаются в виртуальные миры и с удовольствием изучают все вокруг. После показа остаются яркие эмоции и запоминаются важные моменты о планетах, звёздах и галактике.",
      // styles: {
      //   backgroundColor: "#f3f3f3",
      // },
      // classNames: [styles.class_4],
    },
  ];

  return (
    <div className={styles.deskPagesthreeContainer}>
      <div className={styles.deskPagesthreeContent}>
        <div className={styles.titleBodrer}>
          <h2 className={styles.title}>Как это работает?</h2>
        </div>
        <HowItWorkSlider howItWorkListData={howItWorkListData} />
        <HowItWorkDesk howItWorkListData={howItWorkListData} />
      </div>
    </div>
  );
};

export default BlockThree;
