const searchBox = document.getElementById("search")

// https://stackoverflow.com/questions/8746882/jquery-contains-selector-uppercase-and-lower-case-issue
jQuery.expr[":"].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0
}

function filterFoods(e) {
  const searchText = searchBox.value

  // Show all foods that match what is in the search box
  $("table tbody tr td:nth-child(2)")
    .filter(`:icontains(${searchText})`)
    .parent()
    .show()

  // Hide all foods that don't match what is in the search box
  $("table tbody tr td:nth-child(2)")
    .filter(`:not(:icontains(${searchText}))`)
    .parent()
    .hide()

  // Unhide any items that are checked
  $("table tbody tr td:nth-child(1) input.checkbox:checked")
    .parent()
    .parent()
    .show()
}

if (searchBox) {
  searchBox.addEventListener("keyup", filterFoods)
}
