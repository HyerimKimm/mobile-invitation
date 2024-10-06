import Image from "next/image";
import mainImage from "@assets/images/mainImage.png";
import classes from "./TitleContents.module.scss";
import { Invitation } from "types/invitation";

interface TitleContentsPropsType {
    invitation: Invitation
}

/* Todo : 나중에 이미지는 서버에서 가져와야 함 */
export default function TitleContents({ invitation } : TitleContentsPropsType) {
  return (
    <section className={classes.content_wrapper}>
      <Image src={mainImage} alt="" className={classes.image} priority />
      <div className={classes.text_wrapper}>
        <p className={classes.name_wrapper}>
          <span>{invitation.bride_name}</span>
          <span className={classes.patition} />
          <span>{invitation.groom_name}</span>
        </p>
        <p className={classes.location_wrapper}>
          <span>{`${invitation.start_date} ${invitation.start_time}`}</span>
          <span>엄청난 웨딩홀 2층 Marcy Hall</span>
        </p>
      </div>
    </section>
  );
}
