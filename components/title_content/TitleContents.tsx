import Image from "next/image";
import mainImage from "@assets/images/mainImage.png";
import classes from "./TitleContents.module.scss";

/* Todo : 나중에 이미지는 서버에서 가져와야 함 */
export default function TitleContents() {
  return (
    <section className={classes.content_wrapper}>
      <Image src={mainImage} alt="" className={classes.image} priority />
      <div className={classes.text_wrapper}>
        <p className={classes.name_wrapper}>
          <span>홍길순</span>
          <span>홍길동</span>
        </p>
        <p className={classes.location_wrapper}>
          <span>2030년 9월 12일 오후 1시 30분</span>
          <span>엄청난 웨딩홀 2층 Marcy Hall</span>
        </p>
      </div>
    </section>
  );
}
