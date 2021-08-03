import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import GetUsers from "./Components/GetUsers";
import Form from "./Components/Form";
import { onError } from "@apollo/client/link/error";

// Voir le tutoriel youtube : https://youtu.be/YyUWW04HwKY

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});



function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      <GetUsers />
      <Form />
    </ApolloProvider>
  );
}

export default App;
