import React from "react";
// import axios from "axios";
// import callApi from "../_functions/callApi";

// callApi()
//     .then(responseData => {
//         console.log('response received');
//         console.log(responseData);
//     });

// const values = callApi()
//     .then(responseData => {
         
//         console.log([responseData.user.id, responseData.title]);
//     })

    



  
const API = "https://api.github.com/repos/stadline/js-technical-test/issues/2";

class HeaderIssue extends React.Component {   


// callApi(apiUrl) {

//     if (!apiUrl) {
//         apiUrl = API;
//     }

//     console.log('fetch ...');
//     return fetch(apiUrl, { method: "get" })
//       .then(response => response.json())

// }

    state = {id: ''} 

    componentDidMount() {
        // callApi().then(data => {
        //   let val = data.map(val => {
        //     return <a key={val.id}>{val.title}</a>;
        //   })
        //   this.setState({id : val})
        // });

        fetch(API, {
          method: "get"
        }).then(response => response.json())
            .then(data => {
                let val = Array.from(data).map(v => {
                    return <a key={v.id}>{v.title}</a>;
                })
                this.setState({id : val})
            })
    }

  render() {

    return (
        <div>{this.state}</div>
    )


    // return 
    //     <header>
    //     <h1>
    //       <a>
            
    //         {callApi()
    //             .then(data =>{
    //                 data.map((val) => {

    //                     return
    //                         {val.title}
                        
    //                 })
    //             })}

    //         {/* Titre de l'issue <span>#2</span> */}
    //       </a>
    //     </h1>
    //   </header>;
  }
}

export default HeaderIssue;
