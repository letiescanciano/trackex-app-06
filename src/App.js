import logo from "./logo.svg";
import "./App.css";

import styled from 'styled-components'

const List = styled.ul`
  list-style-type: none;
  padding: 32px 0;
  margin: 0;
`

const Item = styled.li`
  padding: 8px 16px;
  margin-bottom: 8px;
  color: white;
  font-weight: bold;
`
const Link = styled.a`
  text-decoration: none;
  color: inherit;
`
function App() {
  const links = [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Calendar', to: '/calendar' },
    { label: 'Transactions', to: '/' },
    { label: 'Settings', to: '/settings' },
  ]
  return (
    <div className='layout'>
      <nav>
        <img src={logo} />
        <List>
          {links.map(item => (
            <Item>
              <Link href={item.to}>{item.label}</Link>
            </Item>
          ))}
        </List>
      </nav>
      <main>Main content</main>
    </div>
  )
}

export default App;
