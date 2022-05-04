// in a stateful component render a simple navigation bar and an element which depends on which link is active
class App extends React.Component {

  
    // when the component is updated (which also occurs as the new routes are included)
    // consider the text of the main header and alter the CSS custom property to style the background of the header in the navigation bar and the color of the header according to which route is included
    componentDidUpdate() {
      let header = document.querySelector("h1");
      let text = header.textContent.toLowerCase();
      let color;
      switch(text) {
        case 'home':
          color = "#16A085";
          break;
        case 'form':
          color = "#E74C3C";
          break;
        case 'survey':
          color = "#2980B9";
          break;
        default:
          color = "#F1C40F";
          break;
      }
      // update the custom property for the root element and have it cascade on the header as well
      let root = document.querySelector(":root");
      root.style.setProperty("--color-home", color);
    }
  
    /* render 
    - a nav with a header and three anchor links elements
      in the nav, include Links from the routing library, directing toward differents paths
    - a header displaying the path of the application
      through a switch, include routes which exclude one another 
      render a simple element in the route to visualize the change in the URL path
    */
    render() {
      return (
        
              <div className="App">
          
                <div class="iphone-x">
          
                  <i>Speaker</i>
                  <b>Camera</b>
          
                  <div className="Nav">    
                    <Link to="/">Home</Link>
                    <Link to="/form">Sign Up</Link>
                    <Link to="/survey">Survey</Link>       
                  </div>
          
                  <Routes>    
                    <Route path='/' element={<Home/>}/>  
                    <Route path='/form' element={<Form/>}/>  
                    <Route path='/survey' element={<Survey/>}/>  
          
                  </Routes>
                </div>
              </div>
          
            );
        
        // <div className="App">
  
        //   <nav className="Navbar">
        //     <ul>
        //       <li>
        //         <Link to="/form">form</Link>
        //       </li>
        //       <li>
        //         <Link to="/survey">survey</Link>
        //       </li>
        //     </ul>
        //   </nav>
  
        //   <Routes>
        //     <Route exact path="/">
        //       <h1>Home</h1>
        //     </Route>
        //     <Route path="/form">
        //       <h1>form</h1>
        //     </Route>
        //     <Route path="/survey">
        //       <h1>survey</h1>
        //     </Route>
        //   </Routes>
  
        // </div>
      // );
    }
      
  }
  
  
  // render the single component responsible for the navigation bar, wrapped in the router element
  ReactDOM.render(
    <Router>
      <App />
    </Router>
    , document.getElementById('root'));

export default NewApp;