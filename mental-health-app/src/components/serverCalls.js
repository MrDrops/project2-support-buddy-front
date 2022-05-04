//all server call functions

async function fetchData(url) {
    //get request
    let response = await fetch(url)
    let body = await response.json();
    //console.log(body);
    const res = JSON.stringify(body);
    return res
}

function sendData(url, data) {
//  post/edit with commitment id and get values
//input: url:string, data:object {colname: value}


    let reqOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    };

    fetch(url, reqOptions
        ).then(response => {
        console.log('activity created', response)
    })
}

function itworks() {
    console.log('yes, it works');
}

// --------------------------


export {
    fetchData,
    sendData,
    itworks
}

//example
// async function fetchCommitment() {
//     //get
//     let url = 'http://localhost:3000/commitments'
//     let response = await fetch(url)
//     let body = await response.json();
//     //console.log(body);
//     const res = JSON.stringify(body);
//     return res
// }