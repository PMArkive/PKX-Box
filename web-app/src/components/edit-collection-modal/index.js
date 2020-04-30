import React from 'react';
import { TitleCard } from '../title-card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  modalRoot: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  modalCard: {
    margin: 'auto',
    width: '50%',
    maxWidth: 700,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

export const EditCollectionModal = ({
  open,
  onClose,
  onSave,
  onDelete,
  isPublic,
  isDeleteable,
  collectionName = '',
}) => {
  const classes = useStyles();
  const [hasClickedDelete, setHasClickedDelete] = React.useState(false);
  const onClickDelete = () => setHasClickedDelete(true);
  const nameTextFieldRef = React.useRef();
  const privateSwitchRef = React.useRef();
  const saveForm = () =>
    onSave({
      name: nameTextFieldRef?.current?.value,
      isPublic: !privateSwitchRef?.current?.checked,
    });
  const deleteButton = hasClickedDelete ? (
    <Button variant="outlined" color="secondary" onClick={onDelete}>
      Are you sure?
    </Button>
  ) : (
    <Button variant="outlined" color="secondary" onClick={onClickDelete}>
      Delete
    </Button>
  );
  const modalActions = (
    <>
      <Button variant="outlined" color="primary" onClick={saveForm}>
        Save
      </Button>
      {isDeleteable && deleteButton}
    </>
  );

  return (
    <Modal
      aria-labelledby="edit-collection"
      aria-describedby={`edit-${collectionName}`}
      open={open}
      onClose={onClose}
      className={classes.modalRoot}
    >
      <TitleCard
        title="Edit Collection"
        className={classes.modalCard}
        cardActions={modalActions}
      >
        <FormGroup>
          <TextField
            inputRef={nameTextFieldRef}
            id="collection-name"
            label="Collection Name"
            variant="outlined"
            defaultValue={collectionName}
            inputProps={{ maxLength: 40 }}
          />
          <FormControlLabel
            control={
              <Switch
                inputRef={privateSwitchRef}
                defaultChecked={!isPublic}
                name="is-private"
                color="primary"
              />
            }
            label="Private"
          />
        </FormGroup>
      </TitleCard>
    </Modal>
  );
};
