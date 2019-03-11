// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-drank").on("click", function(event) {
    let id = $(this).data("id");
    
    let hasDrank = $(this).data("drank");
    if(hasDrank === false){
        hasDrank = true;
    } else{ hasDrank = false};
    let newDrankState = {
      drank: hasDrank
    };

    // Send the PUT request.
    $.ajax("/api/beers/" + id, {
      type: "PUT",
      data: newDrankState
    }).then(
      function() {
        console.log("The beer has been consumed");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

//   $(".change-note").on("click", function(event) {
//     let id = $(this).data("id");
//     console.log(id);
//       $("#notes"+id).append(`<form class="note-form">
//         <div class="form-group">
//         <label for="notes">Notes</label>
//         <textarea type="text" class="form-control" id="noteUpdate" placeholder="Way smooth and silky with a nice wheatly-esque-ish-ness. A truly unique style featuring a strong hop finish on a silky body."></textarea>
//         </div>
//         <button type="submit">Add Note</button>
//         <button id="cancel-note" class="btn btn-outline-danger">Cancel</button></form>`);
//         $("#cancel-note").on("click", (event) =>{
//             $("#notes"+id+":first-child").remove();
//             return
//         });

//         $(".note-form").on("submit", (event)=>{
//             event.preventDefault();
//             let text = $("#noteUpdate").val().trim();
//             let newNote = {
//                 notes: text
//             };
//                // Send the PUT request.
//             $.ajax("/api/beers/" + id, {
//                 type: "PUT",
//                 data: newNote
//             }).then(
//             function() {
//           console.log("The notes have been updated");
//           // Reload the page to get the updated list
//           location.reload();
//             });
//         });
//   });

  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBeer = {
      beer_name: $("#beer_name").val().trim(),
      beer_type: $("#beer_type").val().trim(),
      brewery: $("#brewery").val().trim(),
      notes: $("#notes").val().trim()
    };
    console.log(newBeer);
    // Send the POST request.
    $.ajax("/api/beers", {
      type: "POST",
      data: newBeer
    }).then(
      function() {
        console.log("added new beer to list");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});