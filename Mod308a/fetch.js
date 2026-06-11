// fetch with await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: "hello world"
        });
        console.log(response);
    
        //parse the response with json() method
        const data = await response.json()
        console.log(data);
    } catch (error) {
    }
}
fetchData()

//fetch with then method
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => {
// console.log(res); 
// return res.json()})
// .then(data => 
// console.log(data))

// Dog API
const dog = document.getElementById('dog');
dog.addEventListener('click', getNewDog);

async function getNewDog() {
    dog.style.cursor = 'wait';
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const jsonData = await response.json();
    const url = jsonData.message;

    dog.src = url;
    dog.style.cursor = 'pointer';
}

getNewDog();