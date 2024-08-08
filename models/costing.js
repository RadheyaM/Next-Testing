import mongoose, { Schema } from 'mongoose';

const costingSchema = new Schema(
    {
        name: String,
        description: String,
        date: Date,
    },
    {
        timestamps: true,
    }
);

const Costing = mongoose.models.Costing || mongoose.model("Costing", costingSchema);

export default Costing;