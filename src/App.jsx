import { Sidebar, DirectMessages, FriendsList } from "./components"

function App() {

  return (
    <>
    <div className="w-full h-full bg-gray-700">
    <DirectMessages />
    <FriendsList />
    <Sidebar />
    
    </div>
    
    </>
  )
}

export default App
