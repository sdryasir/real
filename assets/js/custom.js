
function displaySearch()
{
    document.getElementById('search').classList.toggle('hide');
    document.getElementById('search').classList.toggle('show');
    document.getElementById('searchBtn').classList.toggle('hide');
    document.getElementById('searchBtn').classList.toggle('show');
    document.querySelector('#search-link').classList.toggle('triangle');
}

function overGreen(e)
{
    e.firstElementChild.firstElementChild.style.backgroundImage="url('./assets/img/back-hover2.jpg')";
    e.firstElementChild.firstElementChild.style.backgroundSize='300px';
    e.firstElementChild.style.backgroundColor='#509407'
    e.firstElementChild.firstElementChild.nextElementSibling.style.color="white";
    e.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.color="#caced6";
}

function hideGreen(e)
{
    e.firstElementChild.firstElementChild.style.backgroundImage="";
    e.firstElementChild.style.backgroundColor='white'
    e.firstElementChild.firstElementChild.nextElementSibling.style.color="#07153a";
    e.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.color="#637cad";
}

function showVideo()
{
    console.log('function triggered');
    document.querySelector('#video').classList.toggle('hide');
    document.querySelector('#video').classList.toggle('show');
    document.querySelector('#black').classList.toggle('hide');
}

function stopVideo()
{
    document.querySelector('#player').src='';
    document.querySelector('#player').src="https://www.youtube.com/embed/9Y9wuCyMkFk";
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    singleItem:true,
    navText:[
        '<img width="45px" src="./assets/img/bracket-ro.svg">',
        '<img width="45px" src="./assets/img/bracket-lo.svg">'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.blog-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    singleItem:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


function convertSymbol(e)
{
    console.log('converting symbol');
    var symbol=e.firstElementChild.classList;
    symbol.toggle('fa-plus');
    symbol.toggle('plus-icon');
    symbol.toggle('fa-minus');
}

function removeSymbol(e)
{
    var symbol=e.firstElementChild.classList;
    if(symbol.contains('fa-plus') && symbol.contains('plus-icon'))
    {
        console.log('not removing symbol haha')
    }
    else
    {
        console.log('removing symbol yeet');
        symbol.toggle('fa-plus');
        symbol.toggle('plus-icon');
        symbol.toggle('fa-minus');
    }

}
function scrollTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}


function reactHeart(e)
{
    var likeIcon=e.nextElementSibling;
    likeIcon.classList.toggle('like-effect');
    likeIcon.classList.toggle('d-none');
}
function unreactHeart(e)
{
    e.classList.toggle('like-effect');
    e.classList.toggle('d-none');
}












function clear()
        {
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('phone').value="";
            document.getElementById('subject').value="";
           /* document.getElementById('category').value="";*/
            document.getElementById('user-message').value="";
        }


        var user={
                'name':[],
                'email':[],
                'phone':[],
                'subject':[],
                'category':[],
                'userMessage':[],
                'show':function()
                {
                    console.log(user)

                },
                'store':function()
                {
                    console.log('pushing values');
                    user.name.push(document.getElementById('name').value);
                    user.email.push(document.getElementById('email').value);
                    user.phone.push(document.getElementById('phone').value);
                    user.subject.push(document.getElementById('subject').value);
                    /*user.category.push(document.getElementById('category').value);*/
                    user.userMessage.push(document.getElementById('user-message').value);
                }
                

            }

            function validateAll()
            {
                if(document.getElementById('name').value!="" && document.getElementById('subject').value!="" && document.getElementById('email').value!="" && document.getElementById('phone').value!="" && document.getElementById('category').value!="" && document.getElementById('user-message').value!="")
                {
                user.store();
                console.log(user);
                clear();
                }
                else{
                    alert('Complete the Form');
                }
            }

        





