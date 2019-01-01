class App extends React.Component {

  state = {
    items: [
      { id: 1, name: "tea", active: true },
      { id: 2, name: "potatoes", active: false },
      { id: 3, name: "groats", active: false },
      { id: 4, name: "water soup", active: true },
      { id: 5, name: "boilng water", active: false },
      { id: 6, name: "bred", active: false },
    ],
  }

  render() {
    return (
      <>
      <Header  items={this.state.items}/>
      <ItemList />
      </>
    )
  }


}