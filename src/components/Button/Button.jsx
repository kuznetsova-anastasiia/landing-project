import '../../styles/components/button.scss';
import classNames from 'classnames';

export const Button = ({ text, isPrimary = false }) => {
  return (
    <a href="#home" className={classNames(
      'button',
      { 'button--primary': isPrimary },
    )}>
      {text}
    </a>
  );
}