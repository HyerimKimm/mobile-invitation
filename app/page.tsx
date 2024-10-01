import classes from "@app/page.module.scss";
import TitleContents from "@components/title_content/TitleContents";

export default function Home() {
  return (
    <div className={classes.page_wrapper}>
      <TitleContents />
    </div>
  );
}
