const handleData =async ()=>{
    let data =await fetch("https://kontests.net/api/v1/all").then((res)=>{
        console.log(res)
        return res.json()
    }).then((val)=>{
        console.log(val)
        console.log(val.length)

       


        let myCard = ""
        val.forEach(element => {
            // let start_time = element.start_time.toLocaleTimeString('en-US')
                myCard += `
                <div class="card" style="width: 18rem;" id="card-item">
    <img src="https://t3.ftcdn.net/jpg/01/99/37/54/360_F_199375425_I4aGAf7KLt9TtwFJzktwZyo5TPamgJDo.webp" class="card-img-top" alt="..."> 
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.start_time}</p>
      <p class="card-text">${element.end_time}</p>
      <a href=${element.url} class="btn btn-primary">Visit Site</a> 
    </div>
  </div>
                `
        //    console.log(element) 
           document.getElementsByClassName("card-container")[0].innerHTML = myCard
        });
    })
}
handleData()