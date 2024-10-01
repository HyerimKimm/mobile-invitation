import Image from "next/image";
import mainImage from "@assets/images/mainImage.png";
import classes from "./TitleContents.module.scss";

/* Todo : 나중에 이미지는 서버에서 가져와야 함 */
export default function TitleContents() {
  return (
    <section className={classes.content_wrapper}>
      <div className={classes.text_wrapper}>
        <div>안녕하세요</div>
        <div>반가워요</div>
      </div>
    </section>
  );
}
