// local reviews data
const reviews = [
  {
    id: 1,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const img_area=document.querySelector("img");
const nextbtn=document.querySelector(".right");
const prevbtn=document.querySelector(".left");
const info=document.querySelector(".info");
//set starting item
let currentItem=0;


function showPerson(person){
  const item = reviews[person];// in here we write reviews[person] in order to we use index of array
  img_area.src=item.img;
  info.textContent=item.text;
}

// show next person
nextbtn.addEventListener("click",function(){
  currentItem++
  if (currentItem>reviews.length-1) {
    currentItem=0;
  }
  showPerson(currentItem);
})
// show prev person
prevbtn.addEventListener("click",function(){
  currentItem--
  if (currentItem<0) {
    currentItem=reviews.length-1;
  }
  showPerson(currentItem);
})
