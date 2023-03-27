import '../../styles/components/message.scss';
import classNames from "classnames"
import { Alert, AlertIcon, Box, AlertTitle, AlertDescription } from '@chakra-ui/react';

export const Message = ({ active }) => {
  return (
    <div className={classNames(
      'message',
      { 'message--active': active },
    )}>
      <Alert status='success'>
        <AlertIcon />
        <Box>
          <AlertTitle color="#000">Success!</AlertTitle>
          <AlertDescription color="#000">
            Your application has been received.
          </AlertDescription>
        </Box>
      </Alert>
    </div>
  )
}