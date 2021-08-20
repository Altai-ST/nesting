import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


export function NestingExample() {
  return <Router>
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>

    <hr />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/topics">
        <Topics />
      </Route>
    </Switch>
  </div>
</Router>

  function Home() {
    return <div>
        <h2>Home</h2>
    </div>
  }

  function Topics() {
      let {path, url} = useRouteMatch();

    return <div>
        <h2>Topics</h2>
        <ul>
            <Link to={`${url}/para`}>
                <li>para</li>
            </Link>
            <Link to={`${url}/para2`}>
                <li>para2</li>
            </Link>
            <Link to={`${url}/para3`}>
                <li>para3</li>
            </Link>
        </ul>

        <Switch>
            <Route exact path={path}>
                <h3>Topics</h3>
            </Route>
            <Route path={`${path}/:topicsId`}>
                <Topic/>
            </Route>
        </Switch>
    </div>
    function Topic() {
        let {topicsId} = useParams()
        return <div>
            <h2>{topicsId}</h2>
        </div>
    }
  }


}