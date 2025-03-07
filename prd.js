//selecting sidenavbar,
var sideNav = document.getElementById('sidenav');
var menuicon = document.getElementById('menuicon');
var closenav = document.getElementById('closenav');

//adding click event listener to menuicon
menuicon.addEventListener('click', function () {
    sidenav.style.right = 0
});
//adding click event listener to closenav
closenav.addEventListener('click', function () {
    sidenav.style.right = '-50%'
});
//product container
var productContainer = document.getElementById('Productcontainer');
var search = document.getElementById('Search');
var productlist = productContainer.querySelectorAll('div');

search.addEventListener('keyup', function () {
    var searchvalue = event.target.value.toUpperCase();

    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector('h1').textContent

        if (productname.toUpperCase().indexOf(searchvalue) < 0) {
            productlist[count].style.display = "none";
        }
        else {
            productlist[count].style.display = "block";
        }
    }

});  