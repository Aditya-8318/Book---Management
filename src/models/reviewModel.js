const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema(
    {
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            refs: "Book",
            required: true
        },
        reviewedBy: {
            type: String,
            required: true,
            default: "Guest",
            
        },
        reviewedAt: {
            type: Date,
            required: true

        },
        rating: {
            type: Number,
            required: true,
            

        },
        review: {
            type: String,

        },
        isDeleted: {
            type: boolean,
            default: false
        },
    },
    { timetamps: true }
)
module.exports = mongoose.model("Review", reviewSchema)






// bookId: {ObjectId, mandatory, refs to book model},
//   reviewedBy: {string, mandatory, default 'Guest', value: reviewer's name},
//   reviewedAt: {Date, mandatory},
//   rating: {number, min 1, max 5, mandatory},
//   review: {string, optional}
//   isDeleted: {boolean, default: false},
// }