const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['academic', 'coding'],
    required: true
  },
  content: [{
    title: String,
    type: String, // 'lecture', 'assignment', 'quiz'
    content: String,
    attachments: [String],
    dueDate: Date
  }],
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', courseSchema);