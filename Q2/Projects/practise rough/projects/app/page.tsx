'use client'
import AdilLecture from '@/component/AdilLecture'
import NewTodo from '@/component/NewTodo'
import TodoList from '@/component/TodoList'
import Wheel from '@/component/Wheel'
import React from 'react'

export default function Home() {
  return (
    <>
    <div className='bg-blue-900'></div>
    <div  className = 'flex'>
      <h1 className='text-3xl font font-extrabold underline'>Welcome to Todo App</h1>
    </div>
    <br/>
    <div className='bg transition-colors'>
    {/* <NewTodo/> */}
    <div>
      {/* <TodoList/> */}
      <AdilLecture/>
      <Wheel/>
      <div className='bg-red-900 h-12 w-12 hover:scale-150 '>
      <Wheel/>
      <Wheel/>
      <Wheel/>
      </div>
    </div>
   </div>
   
    </>
  )
}
