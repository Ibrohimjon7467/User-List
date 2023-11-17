import { useState } from "react"
import Birthdays from "./data"
import CardList from "./components/CardList"
import Title from "./components/Title"

function App() {
  const birthdays = Birthdays
  const [birthday, setBirthday] = useState(birthdays)

  const handleDelete = (id) => {
    const updatedBirthdays = birthday.filter((user) => user.id !== id)
    setBirthday(updatedBirthdays)
  }

  const handleReset = () => {
    setBirthday(birthdays)
  }

  const handleClear = () => {
    setBirthday([])
  }

  return (
    <div className="font-sans flex justify-center items-center">
      <div className="mt-12 bg-white w-96">
        <Title userCount={birthday.length} />
        <CardList birthday={birthday} onDelete={handleDelete} />
        <div>
          {birthday.length > 0 ? (
            <button onClick={handleClear} className="w-full bg-slate-500 text-white">
              Clear All
            </button>
          ) : (<button onClick={handleReset} className="w-full bg-slate-400 text-white">
            Reset
          </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App