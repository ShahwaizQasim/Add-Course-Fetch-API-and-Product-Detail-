

import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        title: String,
        duration: String,
        isCompleted: Boolean,
    },
    { timestamps: true }
);

export const CourseModel = mongoose.models.Course || mongoose.model("Course", courseSchema);
