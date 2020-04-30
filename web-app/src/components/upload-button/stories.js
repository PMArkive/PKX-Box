import React from 'react';
import { UploadButton } from './index';
import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'UploadButton',
  decorators: [withKnobs],
};

export const withMaterialButton = () => {
  return (
    <UploadButton
      id="test"
      onUpload={action('onUpload')}
      multiple={boolean('multiple', false)}
    >
      <Button variant="contained" color="primary">
        Upload!
      </Button>
    </UploadButton>
  );
};
