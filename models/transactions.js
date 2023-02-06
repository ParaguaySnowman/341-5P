module.exports = (mongoose) => {
    const Transaction = mongoose.model(
      'transactions',
      mongoose.Schema(
        {
          transactions_id: Number,
          amount: Number,
          date: String,
          merchant: String,
          category: String,
          description: String,
          account: Number,
          taxRelated: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Transaction;
  };