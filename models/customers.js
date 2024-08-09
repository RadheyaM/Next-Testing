import mongoose, {Schema} from 'mongoose';

const customerSchema = new Schema(
    {
        sageSGCode: String,
        name: String,
    },
    {
        timestamps: true,
    }
);

const Customers = mongoose.models.Customers || mongoose.model("customers", customerSchema);

export default Customers;