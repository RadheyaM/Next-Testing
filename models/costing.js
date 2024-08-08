import mongoose, { Schema } from 'mongoose';

const costingSchema = new Schema(
    {
        name: String,
        description: String,
        date: Date,
        overview: Map,
        ingredients: Map,
        packaging: Map,
        labour: Map,
        Distribuition: Map,
        
    },
    {
        timestamps: true,
    }
);

const Costing = mongoose.models.Costing || mongoose.model("Costing", costingSchema);

export default Costing;