import cloudinary from "cloudinary";
import { configuracion } from "../config.js";

cloudinary.config({
  cloud_name: configuracion.clouconfig.CLOUDINARY_NAME,
  api_key: configuracion.clouconfig.CLOUDINARY_KEY,
  api_secret: configuracion.clouconfig.CLOUDINARY_API_SECRET,
});
export const uploadImage = async (filepath) => {
  return await cloudinary.v2.uploader.upload(filepath, {
    folder: "post",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.v2.uploader.destroy(id);
};
