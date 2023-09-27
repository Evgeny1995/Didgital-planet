import React from "react";
import styles from "./blockFour.module.css";
import VrTehnilogySlider from "../../../molecules/vrTehnilogySlider/vrTehnilogySlider";
import image1 from "./../../../../assets/img/page4/vrGlass1.png";
import image2 from "./../../../../assets/img/page4/vrGlass2.png";
import image3 from "./../../../../assets/img/page4/vrGlass3.png";
import image4 from "./../../../../assets/img/page4/vrGlass4.png";
import deskVrimg from "./../../../../assets/img/page4/deskVrGlass.png";
import DeskVrTehnology from "../../../molecules/deskVrTehnology/deskVrTehnology";

function BlockFour() {
  const vrTehnologySliderData = [
    {
      id: "1",
      img: image1,
      title: "Masters Glass VR-iii",
      text: "Используем только оригинальные импортные VR-очки. Технологии протестированы и безопасны для глаз. Напряжение во время просмотра — как при прогулке за счёт качественного обёъмного  изображения.",
    },
    {
      id: "2",
      img: image2,
      title: "Оборудование",
      text: "Все фильмы воспроизводятся при помощи встроенных в очки экранов мобильных телефонов ведущих брендов. Наши техники привезут всё обордуование с собой: от вас нужно лишь помещение для урока.",
    },
    {
      id: "3",
      img: image3,
      title: "Безопасность",
      text: "Зритель всегда находится в центре зала, и четко зафиксирован в пространстве, что делает просмотр понятным и комфортным. Технология виртуальной реальности не портит зрение, а эффект присутсвтия развивает креативность и пространственное мышление. ",
    },
    {
      id: "4",
      img: image4,
      title: "Система крепления",
      text: "подходит под любой размер головы, даже для первоклассника. Во время просмотра не получится навредить голове ребёнка за счёт тщательно проработанной конструкции очков.",
    },
  ];

  return (
    <div className={styles.pagesFourContainer}>
      <div className={styles.pagesFourContent}>
        <div className={styles.titleBorder}>
          <h2 className={styles.title}>VR-технология</h2>
        </div>
        <VrTehnilogySlider vrTehnologySliderData={vrTehnologySliderData} />
        <DeskVrTehnology />
      </div>
    </div>
  );
}

export default BlockFour;
