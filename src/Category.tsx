interface Props {
  category: string[]
  filter: Function
}

const Category: React.FC<Props> = ({ category, filter }) => {
  return (
    <div>
      <div>
        {category.map((item, index) => {
          return (
            <button
              type='button'
              key={index}
              onClick={() => {
                filter(item)
              }}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Category
