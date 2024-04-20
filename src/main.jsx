import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql/',
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
