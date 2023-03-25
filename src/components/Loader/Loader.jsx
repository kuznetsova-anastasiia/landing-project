import '../../styles/components/loader.scss';
import preloader from '../../img/preloader.gif';
import classNames from 'classnames';

export const Loader = ({ isLoaded }) => {
  return (
    <div className={classNames(
      'preloader',
      { 'preloader-hidden': isLoaded },
    )}>
      <img src={preloader} alt="Preloader" />
    </div>
  );
}