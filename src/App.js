import dataJSon from './contacts.json'
import './App.css';
import { useState } from 'react';
let newData = dataJSon.slice(0,5)

function App() {
  const [contacts,setContacts] = useState(newData)

  function AddRandomContact () {
    const randomContact = Math.floor(Math.random()*dataJSon.length)
    const newContact = dataJSon[randomContact]
    setContacts([...contacts, newContact])
  }
  function sortByName() {
    const sortContactList = [...contacts].sort((a,b) => a.name.localeCompare(b.name))
    setContacts(sortContactList)
  }
  function sortByPopularity() {
    const sortPopularity = [...contacts].sort((a,b) => b.popularity - a.popularity)
    setContacts(sortPopularity)
  }
  const  deleteContact =(id) =>{
    console.log(id)
    // contacts.splice(contacts.indexOf(id), 1);
    // setContacts([...contacts]);
    
   const filteredContact =  contacts.filter((contact)=> contact.id !== id)
   setContacts(filteredContact)
  }
  return (
    <div className="App">
      <div className='contactList'>
        <h2>IronContacts</h2>
      <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>WonOscar</th>
                <th>WonEmmy</th>
                <th>DeleteContact</th>
              </tr>
            </thead>
            <tbody>
    {contacts.map((contact)=> {
      return ( <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt='imgContact' className='contactImg'></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && <p>trophy</p>}</td>
                <td>{contact.wonEmmy && <p>trophy</p>}</td>
                <td><button onClick={()=> deleteContact(contact.id)}>Delete</button></td>
              </tr>
              )
            })}
            </tbody>
           </table>
           <div className="buttons">
           <button onClick={AddRandomContact}>Add Random Contact</button>
           <button onClick={sortByName}>Sort by Name</button>
           <button onClick={sortByPopularity}>Sort By Popularity</button>
           </div>
    </div>
    </div>
  );
}

export default App;
