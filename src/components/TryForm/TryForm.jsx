import '../../styles/components/form.scss';
import '../../styles/components/modal.scss';
import close from '../../img/icons/cancel.svg';
import classNames from 'classnames';
import { useState } from 'react';

export const TryForm = ({ active, setActive, setMessage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setActive(false);
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 2000);
    setName('');
    setEmail('');
    setTextarea('');
  }

  return (
    <div 
      className={classNames(
        'modal',
        { 'modal--active': active }
      )} 
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img
          onClick={() => setActive(false)}
          className="modal__close-icon" 
          src={close} 
          alt={close} 
        />
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor='name' className='form__label'>
            Your name:
            <input 
              name='name'
              placeholder='Name'
              className="form__input" 
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          
          <label htmlFor='email' className='form__label'>
            Your email:
            <input 
              name='email'
              placeholder='Email'
              className="form__input" 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          
          <label htmlFor='questions' className='form__label'>
            Your questions:
            <textarea 
              name="questions"
              placeholder='Your message'
              className="form__textarea"
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
              
            />
          </label>
          
          <button className="form__button button">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}