var movies = [
    {title: "Bond1", 
    hasWatched: true,
    rating: 5
    },
    {title: "Bond2", 
    hasWatched: false,
    rating: 3
    }
]
function haveWatched(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    }
    else{
        result += "not watched ";
    }
    result += "\"" +movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function(movie){
    console.log(haveWatched(movie));
})