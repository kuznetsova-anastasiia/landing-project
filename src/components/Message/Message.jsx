import '../../styles/components/message.scss';
import classNames from "classnames"

export const Message = ({ active }) => {
  return (
    <div className={classNames(
      'message',
      { 'message--active': active },
    )}>
      <p className="message__text">
        Your form was successfully sent
      </p>
    </div>
  )
}