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
movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    }
    else{
        result += "not watched ";
    }
    result += "\"" +movie.title + "\" - ";
    result += movie.rating + " Stars";
    console.log(result);
})