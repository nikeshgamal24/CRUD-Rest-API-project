// Standardized Response Function

import {
  createUserService,
  deleteUserService,
  getAllUserService,
  getUserByIdService,
  updateUserService,
} from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createUserService(name, email);
    handleResponse(res, 201, "User Created SuccessFully", newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUserService();
    handleResponse(res, 200, "Fetched All Users SuccessFully", users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(id);
    if (!user) return handleResponse(res, 404, "User Not Found");
    handleResponse(res, 200, "Fetched All Users SuccessFully", user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await updateUserService(id, name, email);
    handleResponse(res, 200, "Fetched All Users SuccessFully", updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedUser = await deleteUserService(id);
    if (!deletedUser) return handleResponse(res, 404, "User Not Found");

    handleResponse(res, 200, "Fetched All Users SuccessFully", updatedUser);
  } catch (err) {
    next(err);
  }
};
