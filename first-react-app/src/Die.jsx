function Die({diceFace=6 ,name="there"}){
    const number= Math.floor(Math.random()*diceFace)+1;
    return <p>{diceFace} Faced Dice Roll: {number} , for {name}</p>
}

export default Die;