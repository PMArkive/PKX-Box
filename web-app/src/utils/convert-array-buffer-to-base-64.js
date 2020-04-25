export const convertArrayBufferToBase64 = (buffer) => {
  const str = new Uint8Array(buffer).reduce(
    (result, byte) => (result += String.fromCharCode(byte)),
    '',
  );

  return window.btoa(str);
};
