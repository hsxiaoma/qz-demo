import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const IdsSchema = new Schema({
  admin_id: Number
});

const Ids = mongoose.model('Ids', IdsSchema);

Ids.findOne((err, data) => {
  if (!data) {
    const newIds = new Ids({
      admin_id: 1
    });
    newIds.save();
  }
});

export default Ids;