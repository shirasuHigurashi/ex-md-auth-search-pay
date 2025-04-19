const threadSectionDOM = document.querySelector(".thread-section")
const inputTextDOM = document.getElementById("inputTitle")
const inputContentDOM = document.getElementById("inputContent")

const formDOM = document.querySelector(".form-section")
let inputText = "";
let inputContentText =""
const getAllTreads = async(req,res) => {
    try {
        let allThreads = await axios.get("/api/v1/threads")
        console.log(allThreads)
        let {data} = allThreads
        console.log(data)
        allThreads = data.map((thread)=>{
            const {title,content} = thread
            console.log(title,content)
    
            return `
            <div class="single-thread">
                 <h3>${title}</h3>
                    <p>${content}</p>
            </div>`;

        
        }
    )
    
        formDOM.innerHTML = allThreads

        }
     catch (error) {
        console.log(error)
        
    }



}


getAllTreads()

//post

inputTextDOM.addEventListener("change",(e)=>{
    inputText = e.target.value
    console.log(inputText)
    console.log(e)

})

inputContentDOM.addEventListener("change",(e)=>{
    inputContentText = e.target.value

})


threadSectionDOM.addEventListener("submit",async(e)=>{
    e.preventDefault()
    if(inputText && inputContentText){
        console.log("add data")
    }
    try {
        await axios.post("/api/v1/thread",{
            title:inputText,
            content:inputContentText,
        })
        getAllTreads()

    } catch (error) {
        console.log(error)
        
    }
}
)



