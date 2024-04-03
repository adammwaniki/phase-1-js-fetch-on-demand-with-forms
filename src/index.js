const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener( "submit", (event) => { //adding an event listener to the form
        event.preventDefault( ); //preventing the default behaviour of the form refreshing the page when it's given input
        //event.target.children[1].value; // accessing the elememt via its index
                                            /*
                                            look at what the html looks like to determine the index
                                            <form>
                                                <label for="searchByID">Search By ID</label>
                                                <input id="searchByID" type="text" placeholder="Enter ID here" />
                                                <input type="submit" />
                                            </form>
                                            */
        const input = document.querySelector("input#searchByID"); // accesing the element directly
        console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`) //using interpolation so that we can now search for individual movies
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector("section#movieDetails h4"); 
            const summary = document.querySelector("section#movieDetails p");
            title.innerText = data.title; //replacing the text on the page
            summary.innerText = data.summary; //replacing the text on the page
            console.log(data);
            // LOG: (3) [{…}, {…}, {…}]
        });
    });
};

document.addEventListener('DOMContentLoaded', init);