import Post from "../models/Post.js";
import { uploadImage, deleteImage } from "../libs/cloudynary.js";
import fse from "fs-extra";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.send(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image;

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);

      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
      await fse.remove(req.files.image.tempFilePath);
    }

    const newPost = new Post({ title, description, image });

    await newPost.save();

    return res.json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send(updatePost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postRemove = await Post.findByIdAndDelete(req.params.id);

    if (!postRemove) return res.sendStatus(404);

    if (postRemove.image.public_id) {
      await deleteImage(postRemove.image.public_id);
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.sendStatus(404);

    return res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
