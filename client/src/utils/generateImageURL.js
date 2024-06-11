import axios from "axios";

const generateImageURL = async (image) => {
  const publicId = "";
  const cloudName = "";
  const uploadPreset = "";

  const cld = new Cloudinary({})

  const file = new FormData();
  file.append("file", image);
  file.append("upload_preset", "ml_default");

  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/495528856755222:yrLPuSK_snTCKawoJ9XhcqtbK8Y@dt6k5lgow/image/upload`,
    file
  );
  return data;
};

export default generateImageURL;
