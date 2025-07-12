import { model, Schema } from 'mongoose';

const paymentSchema = new Schema({
    razorpay_payment_id: {
        type: String,
        required: true
    },
    razorpay_subscription_id: {
        type: String,
        required: true
    },
    razorpay_signature: {
        type: String,
        required: true
    }
}, {
    timestamps: true // ✅ Adds createdAt and updatedAt fields automatically
});

const Payment = model('Payment', paymentSchema); // ✅ Removed extra space before model name

export default Payment;
