import './App.css'

function App() {

  return (
      <div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
          </div>
          <div >
            <div className="text-xl font-medium">ChitChat</div>
            <p className='text-base'>You have a new message!</p>
          </div>
        </div>
      </div>
  )
}

export default App
