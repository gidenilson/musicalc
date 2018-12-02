var vm = new Vue({
  el: '#app',
  data: {
    note_a: null,
    note_b: null,
    note_c: null,
    notes: ["A", "B", "C", "D", "E", "F", "G"],
    isMoving: false
  }

})

$(function() {

  vm.note_b = 0
  setNotes()


  $(".note").on("swipeleft", function(data) {
    //event.preventDefault()
    console.log(data)
    vm.note_b += 1
    setNotes()
  })
  $(".note").on("swiperight", function(data) {
    //event.preventDefault()
    //console.log(data)
    vm.note_b -= 1
    setNotes()
  })
  $(".note").on("vmousemove", function(data) {
      vm.isMoving = true
    })
    $(".note").on("vmouseout", function(data) {
        vm.isMoving = false
      })
  })

function setNotes() {
  if (vm.note_b > 6) {
    vm.note_b = 0
  } else if (vm.note_b < 0) {
    vm.note_b = 6
  }
  vm.note_a = vm.note_b - 1
  vm.note_c = vm.note_b + 1
  if (vm.note_a > 6) {
    vm.note_a = 0
  } else if (vm.note_a < 0) {
    vm.note_a = 6
  }
  if (vm.note_c > 6) {
    vm.note_c = 0
  } else if (vm.note_c < 0) {
    vm.note_c = 6
  }

}
