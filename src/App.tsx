import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostEdit } from "./posts/PostEdit";
import { PostShow } from "./posts/PostShow";
import { PostList } from "./posts/PostList";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} show={PostShow} />
  </Admin>
);

export default App;