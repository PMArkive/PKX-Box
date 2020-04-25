import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_TOAST } from '../../graphql/queries/get-toast-props';
import { SET_TOAST } from '../../graphql/mutations/set-toast';

export const useToast = () => {
  const [setToast] = useMutation(SET_TOAST);

  return (text, severity, isOpen) =>
    setToast({ variables: { input: { text, severity, isOpen, __typename: 'Toast' } } });
};

export const Toast = () => {
  const { data } = useQuery(GET_TOAST);
  const setToast = useToast();

  const handleClose = () => setToast(data.toast.text, data.toast.severity, false);

  return (
    <Snackbar open={data.toast.isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert elevation={6} variant="filled" onClose={handleClose} severity={data.toast.severity}>
        {data.toast.text}
      </Alert>
    </Snackbar>
  );
};
