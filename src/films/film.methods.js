const Film =require('./film.model');

exports.addMovie= async (newFilm)=>{
    try{
        const movie = new Film(newFilm)
        await movie.save()
    }catch(error){
        console.log(error)
    }
}

//Film.updateOne()

exports.updateMovie = async(name, newName)=>{
    try {
        const update=await Film.updateOne({name}, {name:newName})
        console.log("update User : ", update);
    }catch(error){
        console.log(error)
    }
}
exports.deleteMovie = async(name)=>{
    try {
        const del=await Film.deleteOne({name:name})
        console.log("Deleted User : ", del);
    }catch(error){
        console.log(error)
    }
}

exports.listMovies = async () => {
    try{
            await Film.find({}).then((newList)=>
            {
                console.log(newList);
            }
        )
        }
        catch(error){
        console.log(error)
    }
    
};

