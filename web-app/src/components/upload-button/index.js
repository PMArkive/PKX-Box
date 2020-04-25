import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    display: 'none',
  },
});

const readFile = (file) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => resolve(fileReader.result);
    fileReader.readAsArrayBuffer(file);
  });
};

export const UploadButton = ({ id, children, onUpload, multiple }) => {
  const classes = useStyles();
  const ref = React.useRef();

  const onClick = () => ref?.current?.click();
  const onChange = async (event) => {
    const files = event.target.files;

    if (multiple) {
      // Can't map FileList
      const reads = [];

      for (let i = 0; i < files.length; i++) reads.push(readFile(files[i]));

      const results = await Promise.all(reads);
      onUpload(results);
    } else {
      const result = await readFile(files[0]);
      onUpload(result);
    }
  };

  return (
    <>
      <input
        type="file"
        id={id}
        className={classes.input}
        onChange={onChange}
        ref={ref}
        multiple={multiple}
      />
      <div onClick={onClick}>{children}</div>
    </>
  );
};
