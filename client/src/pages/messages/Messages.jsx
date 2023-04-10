import React from 'react'
import './Messages.scss';
import { Link } from 'react-router-dom';


const Messages = () => {

  const currentUser = {
    id: 1,
    username: 'Daneils',
    isSeller: true
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>

        </div>

        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>
              Daneils John
            </td>
            <td><Link to='/message/123' className='link' >
              {message.substring(0, 100)}...
            </Link></td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark as Read</button>
            </td>

          </tr>

          <tr className='active'>
            <td>
              Daneils John
            </td>
            <td><Link to='/message/123' className='link' >
              {message.substring(0, 100)}...
            </Link></td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark as Read</button>
            </td>

          </tr>

          <tr>
            <td>
              Daneils John
            </td>
            <td><Link to='/message/123' className='link' >
              {message.substring(0, 100)}...
            </Link></td>
            <td>1 Day Ago</td>


          </tr>

          <tr>
            <td>
              Daneils John
            </td>
            <td><Link to='/message/123' className='link' >
              {message.substring(0, 100)}...
            </Link></td>
            <td>1 Day Ago</td>


          </tr>

          <tr>
            <td>
              Daneils John
            </td>
            <td><Link to='/message/123' className='link' >
              {message.substring(0, 100)}...
            </Link></td>
            <td>1 Day Ago</td>


          </tr>

          <tr>
            <td>
              Daneils John
            </td>
            <td><Link to='/message/123' className='link' >
              {message.substring(0, 100)}...
            </Link></td>
            <td>1 Day Ago</td>
          </tr>
        </table>


      </div>
    </div>
  )
}

export default Messages