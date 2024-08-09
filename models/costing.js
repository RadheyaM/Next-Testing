import mongoose, { Schema } from 'mongoose';

const costingSchema = new Schema(
    {
        name: String,
        cutomerId: mongoose.Types.ObjectId,
        customerName: String,
        description: String,
        componentCount: Number,
        overviewComponents: Array,
        overviewSubtotals: Map,
        componentIngs: Array,
        componentIngQty: Array,
        Packaging: Map,
        labour: Map,
        Distribution: Map,
        CAPAX: Map,
        
    },
    {
        timestamps: true,
    }
);

const Costing = mongoose.models.Costing || mongoose.model("Costing", costingSchema);

export default Costing;