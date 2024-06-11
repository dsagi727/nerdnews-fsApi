const mongoose = require('mongoose');

const SourceSchema = mongoose.Schema(
  {
    sourceName: {
      type: String,
      required: true,
    },
    sourceType: {
      type: String,
      enum: ['RSS', 'RDF'],
      default: 'RSS',
      required: true,
    },
    sourceLink: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Category',
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Source', SourceSchema);
