import mongoose, {Schema} from 'mongoose';

const ingSchema = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        rmc: Number,
        ingredient: String,
        euro: mongoose.Types.Decimal128,
        gbp: mongoose.Types.Decimal128,

    }
)

const IngCosts = mongoose.models.ings || mongoose.model("ings", ingSchema);

export default IngCosts;