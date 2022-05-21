const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/PictureCats-Test-DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//CREATE SCHEMA
const PhotoSchema = new Schema({
    title: String,
    desription: String
});

const Photo = mongoose.model('Photo', PhotoSchema);

/*create a photo

Photo.create({
    title:"Photo Ttile",
    desription:"phtoto desc",
});

/*read a photo
Photo.find({},(err,data)=>{
    console.log(data);
});
*/

const id = "6288b19e77b3d6937b31541e";
//update a photo
/*
Photo.findByIdAndUpdate(id,
    { title: "Photo 2 ", desription: "Photo 1 converted 2 " },
    { new: true }, //güncellenmiş kaydı getirtiyor 
    (err,data)=>{
        console.log(data);
    }
)
 */

//delete a photo

Photo.findByIdAndDelete(id,(err,data)=>{
    console.log("removed succesfuly");
});