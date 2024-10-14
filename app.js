/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>"i am h1 tag"</h1>
 *          <h2>"i am h2 tag"</h2>
 * <div>
 * 
 * <div id="parent">
 *      <div id="child2">
 *          <h1>"i am h1 tag"</h1>
 *          <h2>"i am h2 tag"</h2>
 * <div>
 * the below structure is same like as the above dev strcuture 
 */ 



const parent = React.createElement("div",{id:"parent"},
    [
       React.createElement("div",{id:"child"},
       [
       React.createElement("h1",{},"I am in a h1 tag"),      /** it has the three parameters tag,attributes,and the data you want display on the web page */
       React.createElement("h1",{},"I am in a h2 tag"),
       ]),
            
        
        React.createElement("div",{id:"child2"},
        [  
        React.createElement("h1",{},"I am in a h1 tag"),
        React.createElement("h1",{},"I am in a h2 tag"),
        ]),
    ]);
              
    const root = ReactDOM.createRoot(document.getElementById("root"));     <!--acess with the div tag-->

    root.render(parent);      <!-- insert heading into div tag-->






//const heading=React.createElement("h1",{id:"heading"},"Hello world from React");    <!-- create the tags in react-->
//const root = ReactDOM.createRoot(document.getElementById("root"));     <!--acess with the div tag-->
//root.render(heading); <!-- insert heading into div tag-->