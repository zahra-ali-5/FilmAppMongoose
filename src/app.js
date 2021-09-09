require("./db/connection");
const mongoose=require("mongoose");
const {addMovie,listMovies, deleteMovie, updateMovie}=require("./films/film.methods");

const command =process.argv[2];

const app = async ()=>{
    if (command==="add"){
        await addMovie({
            name:process.argv[3],
            actor:process.argv[4],
            like:process.argv[5],
        })
    }else if(command==="list") {
        await listMovies();
    }   
    else if (command==="update"){
        const name=process.argv[3];
        const newName=process.argv[4];
        await updateMovie(name, newName);
    }    
    else if (command==="delete"){
        const name=process.argv[3];
        await deleteMovie(name);
    }
    mongoose.disconnect()
}

app();