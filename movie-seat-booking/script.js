const container = document.querySelector(".container");

const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");

const total = document.getElementById("total");

const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

function updateSelecetedCount(){
  const selectedSeat = document.querySelectorAll(".row .seat.selected")
  const selectedSeatsCount = selectedSeat.length;
  
  count.innerText=selectedSeatsCount;
  total.innerText=selectedSeatsCount * ticketPrice
}

movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  updateSelecetedCount();
})

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") &&
  !e.target.classList.contains("occupied") 
  ) {
    e.target.classList.toggle("selected")
    updateSelecetedCount();
  }
});
