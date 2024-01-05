import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from './Dice'
import LuckyN from './LuckyN'
import { sum } from './utils'
import BoxGrid from './BoxGrid'
import UsernameForm from './UsernameForm'
import SignupForm from './SignupForm'
import BetterSignupForm from './BetterSignupForm'
import ShoppingList from './ShoppingList'
import ShoppingListForm from './ShoppingListForm'
import Counter from './Counter'
import QuoteFetcher from './QuoteFetcher'
import QuoteFetcherLoader from './QuoteFetcherLoader'
import ProfileSearchForm from './ProfileSearchForm'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'

function lessThanFour(dice) {
  console.log(dice)
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((num) => num == dice[0])
}

function App() {
  return (
    <>
      {/* <Die val={2} />
      <Die val={3} /> */}
      {/* <Dice dice={[1,3,6]}/>
      <Dice dice={[8,10,12]} color="wheat"/> 
      <Dice dice={[7,7,7]}/>      */}
      {/* <LuckyN /> */}
      {/* <LuckyN numDice={3} goal={8} /> */}
      {/* <LuckyN winCheck={lessThanFour} title="Here comes the pain !" />
      <LuckyN winCheck={allSameValue} numDice={3} title='Roll the same number!'/> */}
      {/* <BoxGrid/> */}
      {/* <UsernameForm /> */}
      {/* <SignupForm /> */}
      {/* <BetterSignupForm/> */}
      {/* <ShoppingList/> */}
      {/* <Counter /> */}
      {/* <QuoteFetcherLoader /> */}
      <ProfileViewerWithSearch />

    </>
  )
}

export default App;
