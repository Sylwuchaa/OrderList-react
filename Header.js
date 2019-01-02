const Header = (props) => {
  const activeItems = props.items.filter(item => item.active)
  const number = activeItems.length
  return (
    <header>
      <h3>Your order summary {number}</h3>
      <h3>To pay: {number ? `${number*10} zł`: `not buy so nothing to pay`}</h3>
    </header>
  )

}