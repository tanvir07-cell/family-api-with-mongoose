import mongoose from "mongoose";
import { Me } from "../../me/model/me.js";

const parentsSchema = new mongoose.Schema(
  {
    name: {
      father: {
        type: String,
        required: true,
      },
      mother: {
        type: String,
        required: true,
      },
    },
    age: {
      father: {
        type: Number,
        required: true,
      },
      mother: {
        type: Number,
        required: true,
      },
    },
    profession: {
      father: {
        type: String,
        enum: ["businessman", "workHolder", "others"],
        default: "businessman",
      },
      mother: {
        type: String,
        enum: ["housewife", "workHolder", "others"],
        default: "housewife",
      },
    },
  },
  { timestamps: true }
);

// ekhon ami chaitesi je ekti parents remove hole tar under e joto gula child ase sob gulay jate remove hoye jay:

// parentsSchema.pre("deleteOne", async (doc, next) => {
//   // Remove all the assignment docs that reference the removed person.
//   await Me.deleteOne({ parents: doc._id });
// });
parentsSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    const parentId = this._id;
    try {
      // Delete all referencing books
      await Me.deleteMany({ parents: parentId });
      next();
    } catch (error) {
      next(error);
    }
  }
);

export const Parents = mongoose.model("parent", parentsSchema);
