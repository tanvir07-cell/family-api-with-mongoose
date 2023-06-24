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

parentsSchema.pre("deleteOne", function (next) {
  Me.deleteOne({ parents: this._id }, next);
});

export const Parents = mongoose.model("parent", parentsSchema);
