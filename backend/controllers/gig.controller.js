import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only Sellers Can Create A Gig"));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();

    res.status(201).json(savedGig);
  } catch (error) {
    next(error);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    // To get Gig Data Based on ID
    const gig = await Gig.findById(req.params.id);

    // Check If Gig UserId and requested userID Not Equal --> Can't Delete Gig
    if (gig.userId !== req.userId)
      return next(createError(403, "You Can Delete Only Your Gig"));

    await Gig.findByIdAndDelete(req.params.id);

    res.status(200).send("Gig Had Been Deleted Successfully!");
  } catch (error) {
    next(error);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const singleGig = await Gig.findById(req.params.id);

    if (!singleGig) return next(createError(404, "Gig Not Found"));

    res.status(200).json(singleGig);
  } catch (error) {
    next(error);
  }
};

export const getAllGig = async (req, res, next) => {
  const q = req.query;
  const filters = {
    // Based On Category
    ...(q.cat && { cat: q.cat }),

    // Based On userId
    ...(q.userId && { userId: q.userId }),

    // Based On Min And Max Prices
    ...((q.min || q.max) && {
      price: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) },
    }),

    // Based On Search Term --> With Case Sensitivity
    ...(q.search && {
      title: {
        $regex: q.search,
        $options: "i", // To Check Case Sensitivity
      },
    }),
  };

  try {
    const allGigs = await Gig.find(filters);
    res.status(200).json(allGigs);
  } catch (error) {
    next(error);
  }
};
