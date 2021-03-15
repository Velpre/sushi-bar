const DishModule = (function(){
  const meny = [
    {name:"Dryfish", image:"dry-fish.jpg", price:"100.-"},
    {name:"Flyfish sushi", image:"flyfish-sushi.jpg", price:"150.-"},
    {name:"Salmon maki", image:"salmon-maki.jpg", price:"80.-"},
    {name:"Sushi plate big", image:"sushi-plate-big.jpg", price:"200.-"},
    {name:"Sushi plate small", image:"sushi-plate-small.jpg", price:"110.-"},
    {name:"Tempura plat", image:"tempura-plate.jpg", price:"80.-"},
    {name:"Wrap", image:"wrap.jpg", price:"60.-"},
    {name:"Locations", image:"location.png", price:"click"},
  ];
  const getMeny = () => meny;

  return{getMeny};

}());

export default DishModule;
