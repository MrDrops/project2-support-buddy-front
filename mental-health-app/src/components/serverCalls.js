//all server call functions

async function fetchCommitment() {
    //get
    let url = 'http://localhost:3000/commitments'
    let response = await fetch(url)
    let body = await response.json();
    //console.log(body);
    const res = JSON.stringify(body);
    return res
}

//get all commitments where user id =1
//return array(date where completed = true)
  
  function addCommitment() {
    //  post/edit with commitment id and get values
    let url = 'http://localhost:3000/commitments'
    // const user_id = getElementById('user_id').value;
    // const activity_id = somewhere('activity_id').value;
    // const commit_time = somewhere('commit_time').value;
    // const completion = somewhere('completion').value;
    // const journal = somewhere('journal').value;
  
    let data = '';
    //{
    //   user_id: user_id,
    //   activity_id: activity_id,
    //   commit_time: commit_time,
    //   completion: completion,
    //   journal: journal
    // };
  
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
    fetchCommitment,
    addCommitment
}