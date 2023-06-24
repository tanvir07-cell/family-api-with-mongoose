import mongoose from "mongoose";

const meSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    parents: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "parent",
      required: true,
    },
  },
  { timestamps: true }
);

// ekti parents er under e ekoi name er matro ekti son thakbe:
meSchema.index(
  {
    parents: 1,
    name: 1,
  },
  { unique: true }
);

export const Me = mongoose.model("me", meSchema);
