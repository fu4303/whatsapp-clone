import GlobalStyle from './globalStyles';
import Home from './Pages/Home/Home';
import Chats from './Pages/Chats/Chats';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProfileDrawerToggleProvider } from './contexts/ProfileDrawerContext';
import { AuthProvider } from './contexts/AuthContext';
import { ChatProvider } from './contexts/CurrentChat';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProfileDrawerToggleProvider>
          <ChatProvider>
            <GlobalStyle />
            <Switch>
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/chats" component={Chats} />
            </Switch>
          </ChatProvider>
        </ProfileDrawerToggleProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
