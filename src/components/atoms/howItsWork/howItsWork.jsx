import React from "react";
import styles from "./howItsWork.module.css";
import image1 from "./../../../assets/img/page3/photo1.png";
import image2 from "./../../../assets/img/page3/photo2.png";
import image3 from "./../../../assets/img/page3/photo3.png";
import image4 from "./../../../assets/img/page3/photo4.png";

const HowItWorkDesk = () => {
  const HowItWorkListData = [
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
    <ul className={styles.howItsWorkList}>
      {HowItWorkListData.map((item) => (
        <li key={item.id} className={styles.howItsWorkItem}>
          <div className={styles.howItsWorkImgContainer}>
            <div className={styles.greenBorder}></div>
            <div className={styles.imgNumber}>{item.id}</div>
            <img
              className={styles.howItsWorkImg}
              src={item.img}
              alt={item.title}
            />
          </div>
          <div className={styles.howItsWorkTextContainer}>
            <h4 className={styles.howItsWorkTitle}>{item.title}</h4>
            <p className={styles.howItsWorkText}>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HowItWorkDesk;
//  <ul className={[styles.mobMenuList, props.className].join(" ")}>
//       {menuMobLinks.map((menuMobLink) => (
//         <li key={menuMobLink.index} className={styles.mobMenuItems}>
//           <a className={styles.mobMenuLinks} href={menuMobLink.href}>
//             {menuMobLink.value}
//           </a>
//         </li>
//       ))}
//     </ul>
