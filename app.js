const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelectorAll('.hand')


const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    const minDegrees = ((minutes/60) * 360) +90;
    const hourDegrees= ((hours/12) * 360) +90 ;
    secondHand.style.transform =`rotate(${secondsDegrees}deg)`
    minHand.style.transform = `rotate(${minDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    console.log(secondsDegrees)

    if (secondsDegrees >= 444 || minDegrees >= 444 || hourDegrees >= 444) {
        secondHand.style.transition = '0s';
        minHand.style.transition = '0s';
        hourHand.style.transition = '0s';
    } else {
        // Restore the original transition value after the reset
        secondHand.style.transition = '';
        minHand.style.transition = '';
        hourHand.style.transition = '';
    }
    
}

setInterval(setDate, 1000);