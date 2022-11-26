import { useState } from "react"
import Category from "./Category"
import items from "./data"
import List from "./List"

const uniqueCategories = ["all", ...new Set(items.map((item) => item.category))]

function App() {
  const [list, setList] = useState(items)
  const [category, setCategory] = useState(uniqueCategories)

  const filter = (categories: string) => {
    if (categories === "all") {
      setList(items)
      return
    }
    const newList = items.filter((item) => item.category === categories)
    setList(newList)
  }

  return (
    <div className='App'>
      <div>
        <Category category={category} filter={filter} />
        <div>
          <List list={list} />
        </div>
      </div>
    </div>
  )
}

export default App
