import '../../styles/components/contents.scss';
import macbook from '../../img/macbook.png'
import notifications from '../../img/notifications.png';
import { ContentElement } from "../ContentElement";

export const Contents = () => {
  return (
    <div className="contents" id="contents">
      <h2 className="contents__title">
        Contents
      </h2>
      <p className="contents__info">
        We focus on ergonomics and meeting you where you work. 
        <br />
        It's only a keystroke away.
      </p>

      <div className="contents__list">
        <ContentElement title="Work" img={macbook} />
        <ContentElement title="Design with real data" img={notifications} />
      </div>
    </div>
  );
}