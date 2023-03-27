import '../../styles/components/form.scss';
import '../../styles/components/modal.scss';
import logo from '../../img/logo.png';
import { useState } from 'react';
import { Modal,ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input, Textarea } from '@chakra-ui/react';

export const TryForm = ({ active, setActive, setMessage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const clear = () => {
    setName('');
    setEmail('');
    setTextarea('');
    setActive(false);
  }
  const handleSubmit = (event) => {
    if (name && email && email.includes('@')) {
      event.preventDefault();
      setActive(false);
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 2000);
      setName('');
      setEmail('');
      setTextarea('');
    } else if (!name) {
      setIsInvalidName(true);
    } else if (!email || !email.includes('@')) {
      setIsInvalidEmail(true);
    }
  }

  return (
    <Modal isOpen={active} onClose={setActive}>
      <ModalOverlay />
      <ModalContent bg="#181818" color="#e9e9e9">
        <ModalHeader>
          <img className='form__logo' src={logo} alt="logo" />
        </ModalHeader>
        <ModalCloseButton margin="10px 5px 0 0" />
        <ModalBody>
          <form className="form" onSubmit={handleSubmit}>
            <h3 className='form__title'>Let us help you!</h3>
            <p className='form__info'>Please, fill the form below so we can contact with you and help.</p>
            <label htmlFor='name' className='form__label'>
              <Input 
                variant='outline' 
                value={name} 
                onChange={(e) => {
                  setName(e.target.value);
                  setIsInvalidName(false);
                }}
                isInvalid={isInvalidName}
              />
              Your name
            </label>
            
            <label htmlFor='email' className='form__label'>
              
              <Input 
                type="email"
                variant='outline' 
                value={email} 
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsInvalidEmail(false);
                }}
                isInvalid={isInvalidEmail}
              />
              Your email
            </label>
            
            <label htmlFor='questions' className='form__label'>
              
              <Textarea
                variant='outline'
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
                resize="none"
              />
              Your questions
            </label>
            
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                Send
              </Button>
              <Button colorScheme="whiteAlpha" variant='outline' onClick={clear}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}