const gifContainer = document.querySelector('.js-gif-container');




function goDark(){
    console.log("test");
}

//Jquery code:

$(document).ready(()=> {

    $("#submit").click(()=>{
        gifs='';
        let userInput = $("#search").val();
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=w1pLVcm1vcpIjgSq0NnfUaR62KVjTfBq&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        })
        .done((response)=>{
            let data = ("response", response.data);
            $.each(data, (i,e)=>{
                gifs += `<img src = "${e.images.original.url}" alt = "${e.title}" class = "gif">`;
            })
            gifContainer.innerHTML=gifs;
        })
    })

    $("#reset").click(()=>{
        gifContainer.innerHTML='';
    })

    // $("#darkButton").click(goDark());

})