import Image from "next/image";
import mainImage from "@assets/images/mainImage.png";
import classes from "./TitleContents.module.scss";
import { Invitation, Location } from "types/invitation.module";

interface TitleContentsPropsType {
  invitation: Invitation;
  location: Location;
}

/* Todo : 나중에 이미지는 서버에서 가져와야 함 */
export default function TitleContents({
  invitation,
  location,
}: TitleContentsPropsType) {
  return (
    <section className={classes.content_wrapper}>
      <Image
        src={mainImage}
        alt="웨딩 사진"
        className={classes.image}
        priority
      />
      <div className={classes.text_wrapper}>
        <p className={classes.name_wrapper}>
          <span>{invitation.bride_name}</span>
          <span className={classes.patition} />
          <span>{invitation.groom_name}</span>
        </p>
        <p className={classes.location_wrapper}>
          <span>{`${invitation.start_date} ${invitation.start_time}`}</span>
          <span>{location.title}</span>
        </p>
      </div>
    </section>
  );
}
