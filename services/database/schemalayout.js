var mongoose = require ('mongoose');

var PlacesSchema = new mongoose.Schema ({
  name:String,
  address:String
});

mongoose.model('Places',PlacesSchema);
