function preview(){
    var x = document.getElementsByClassName("example");
    fetch("http://openlibrary.org/search.json?title=indonesia") //panggil API
          .then(Response => Response.json())
          .then(data => {
            console.log(data.docs);
            for(var i=0; i<6; i++){ //ngatur banyaknya loop
              document.getElementById("hasil").innerHTML+= //hasilnya
              "<div class='col-md-6 col-lg-4'><a class='d-block mx-auto portfolio-item' data-bs-toggle='modal'></a>"+
                  "<div class='card' style='height: 35rem;'>"+
                      "<img src='http://covers.openlibrary.org/b/olid/"+data.docs[i].cover_edition_key+"-M.jpg' class='example' width='259' height='259' ><br>"+
                      "<div class='card-body'>"+
                          "<h4 class='card-title'>"+data.docs[i].title+"</h4>"+
                          "<h6 class='text-muted card-subtitle mb-2'>"+data.docs[i].author_name+"</h6>"+
                          "<p class='card-text'>"+data.docs[i].publisher[0]+"</p>"+
                          "<p class='card-text'>"+data.docs[i].first_publish_year+"</p>"+
                          "<p class='card-text'>"+data.docs[i].isbn[0]+"</p>"+
                          "<a href='https://openlibrary.org/"+data.docs[i].key+"' class='card-link'>Detail</a>"+
                      "</div>"+
                  "</div>"+
              "</div>";
              if (x[i].src == "http://covers.openlibrary.org/b/olid/undefined-M.jpg"){
                x[i].src = "assets/img/noimage.png";
              }
            }                
            })
}
