import React from 'react'
import { fetchUsers } from '@/utils/actions'
import DeleteButton from './DeleteButton'

async function UsersList() {
  const users = await fetchUsers()
  return (
    <div className='mt-4'>
      {users.length ? <div>
        {users.map((user)=>{
          return <h4 key={user.id} className='flex justify-between items-center border-b py-4'>
            {user.firstName} {user.lastName} <DeleteButton id={user.id} />
          </h4>
        })}
      </div> : <p>No users found</p>}
    </div>
  )
}

export default UsersList