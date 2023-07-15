

function distanceFromHqInBlocks(pickup=50) {
  const hq = 42; 
  return Math.abs (pickup- hq); 
}


function distanceFromHqInFeet(pickup=50) {
  const blocks = distanceFromHqInBlocks(pickup);
  const feetPerBlock = 264; 
  return blocks * feetPerBlock;
}


function distanceTravelledInFeet(startBlock, endBlock) {
  const blocks = Math.abs(endBlock - startBlock); 
  const feetPerBlock = 264; 
  return blocks * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
  const startStreet = Math.min(startBlock, endBlock); 
  const endStreet = Math.max(startBlock, endBlock);

  const distance = distanceTravelledInFeet(startStreet, endStreet);

  if (distance <= 400) {
    
    return 0;
  } 
  else if (distance > 400 && distance <= 2000) {
    
    const pricePerFoot = 0.02;
    return (distance - 400) * pricePerFoot;
  } 
  else if (distance > 2000 && distance < 2500) {
    
    return 25;
  } else if (distance >= 2500) {
  
    return 'cannot travel that far';
  }
  }




