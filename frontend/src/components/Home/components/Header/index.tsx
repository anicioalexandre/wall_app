import React, { FC } from 'react'

import LogoutButton from '../LogoutButton'

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-20 px-8 py-4 w-full">
      <h1 className="text-primary font-bold text-4xl">Wall App</h1>
      <LogoutButton />
    </header>
  )
}

export default Header
