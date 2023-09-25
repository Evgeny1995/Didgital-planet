import React from "react";
import image from "./../../../assets/img/page4/deskVrGlass.png";
import styles from "./deskVrTehnology.module.css";

function DeskVrTehnology() {
  const vrTehnologySliderData = [
    {
      id: "1",
      title: "Masters Glass VR-iii",
      text: "Используем только оригинальные импортные VR-очки. Технологии протестированы и безопасны для глаз. Напряжение во время просмотра — как при прогулке за счёт качественного обёъмного  изображения.",
      selector: "box1",
    },
    {
      id: "4",
      title: "Безопасность",
      text: "Зритель всегда находится в центре зала, и четко зафиксирован в пространстве, что делает просмотр понятным и комфортным. Технология виртуальной реальности не портит зрение, а эффект присутсвтия развивает креативность и пространственное мышление. ",
      selector: "box4",
    },
    {
      id: "3",
      img: image,
      selector: "box3",
    },
    {
      id: "2",
      title: "Оборудование",
      text: "Все фильмы воспроизводятся при помощи встроенных в очки экранов мобильных телефонов ведущих брендов. Наши техники привезут всё обордуование с собой: от вас нужно лишь помещение для урока.",
      selector: "box2",
    },
    {
      id: "5",
      title: "Система крепления",
      text: "подходит под любой размер головы, даже для первоклассника. Во время просмотра не получится навредить голове ребёнка за счёт тщательно проработанной конструкции очков.",
      selector: "box5",
    },
  ];

  return (
    <ul className={styles.gridWrap}>
      {vrTehnologySliderData.map((item, index) => (
        <li key={`ex-${index}`} className={item.img ? styles.box3 : styles.box}>
          <h4 className={item.title ? styles.title : styles.title_none}>
            {item.title}
          </h4>
          <p className={item.text ? styles.texst : styles.text_none}>
            {item.text}
          </p>
          <img src={item.img} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default DeskVrTehnology;

{
  /* <div className={styles.gridWrap}>
<div className={[styles.box1 ,styles.position].join(' ')}>1</div>
<div className={[styles.box2 ,styles.position].join(' ')}>2</div>
<div className={[styles.box3 ,styles.position].join(' ')}><img className={styles.center} src={deskVrimg} alt="" /></div>
<div className={[styles.box4 ,styles.position].join(' ')}>4</div>
<div className={[styles.box5 ,styles.position].join(' ')}>5</div>
</div> */
}
