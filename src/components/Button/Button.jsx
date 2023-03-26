import '../../styles/components/button.scss';
import classNames from 'classnames';

export const Button = ({ text, isPrimary = false, setFormActive }) => {
  return (
    <a 
      href="#home" 
      className={classNames(
        'button',
        { 'button--primary': isPrimary },
      )}
      onClick={(e) => {
        e.preventDefault();
        setFormActive(true);
      }}
    >
      {text}
    </a>
  );
}