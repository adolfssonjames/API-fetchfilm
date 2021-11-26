/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
*
*/
let inputMovie = document.getElementById('input-movie');
let buttonMovie = document.getElementById('button-movie');
let containerMovie = document.getElementById('container-movie');
let errorMsg = document.createElement('p');

buttonMovie.addEventListener('click', () => {



    fetch ('http://www.omdbapi.com/?apikey=593712e3&t=' + inputMovie.value)
        .then((response) => {
             console.log(response);
             console.log(response.ok);
    
            return response.json();
    
    })
    
         .then((data) => {
             console.log(data);
            console.log(containerMovie);
       
    
        
            containerMovie.innerHTML = `
            <ul>
            <li> <img src="${data.Poster}">
            </li>
            <li> Title - ${data.Title} </li> 
            <li> Year - ${data.Year} </li> 
            <li> Type - ${data.Type} </li>
            <li> Genre - ${data.Genre} </li>
            <li> Rating - ${data.imdbRating}</li> 
            <li>  ${data.Plot} </li>
            </ul>
            `;  
        
    })
    
        .catch((error) => {
            console.log(error)
             errorMsg.innerHTML = "Error! Something went wrong.";
    
    })
    
   
})
    