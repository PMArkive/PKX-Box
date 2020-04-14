import axios from 'axios';
import FormData from 'form-data';
import { generalConfig } from '../config/general';

export const parsePKX = async base64PKX => {
  const formData = new FormData();
  formData.append('pkx', base64PKX);

  const result = await axios.post(generalConfig.pkhexAPIUrl, formData);
  return result.data || null;
};
