interface Props {
  list: {
    name: string
    category: string
    id: number
  }[]
}

const List: React.FC<Props> = ({ list }) => {
  return (
    <div>
      <div>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
