import User from "../models/users.model.js";
import createError from "../utils/createError.js";

// To Delete A User Based On Id
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (req.userId !== user._id.toString()) {
      return next(createError(403, "You Can Delete Only Your Account!"));
    }
    await User.findByIdAndDelete(req.params.id);

    res.status(200).send("Deleted Successfully");
  } catch (error) {
    next(error);
  }
};
