import Input from "./Input";
import CardList from "./Card";
import { AppContextProvider } from "./context/AppContext";
import Layout from "./Layout";

const Chat = () => {
  return (
    <AppContextProvider>
      <Layout>
        <Input/>
        <CardList/>
      </Layout>
    </AppContextProvider>
  )
}

export default Chat;