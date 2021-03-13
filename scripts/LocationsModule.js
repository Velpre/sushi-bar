const LocationsModule = (function(){
  const loc = [
    {image:"sushi-chef.jpg", location:"Majorstua"},
    {image:"sushi-chef.jpg", location:"Grønnland"},
    {image:"sushi-chef.jpg", location:"Bislet"},
    {image:"sushi-chef.jpg", location:"Torshov"}
  ];

  const getLoc = () => loc;
  return{getLoc};

}());

export default LocationsModule;
