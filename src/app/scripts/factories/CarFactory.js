app.factory('CarFactory', function(){
  var cars = {};

  var carList = [
    {
            id: 1,
            images: 'auto1.jpg',
            name: 'LADA 2110',
            price: 6000,
            year: 2010,
            specification:[
              {
                name: 'year',
                val: 2011,
                tile: 'in_tile',
                icon: 'ico.png'
              },
              {
                name: 'mileage',
                val: 210,
                tile: 'in_tile',
                icon: 'ico.png'
              }
            ],
        },
        {
            id: 2,
            images: 'auto1.jpg',
            name: 'TOYOTA',
            price: 8500,
            year: 2007,
            specification:[
              {
                name: 'year',
                val: 2011,
                tile: 'in_tile',
                icon: 'ico.png'
              },
              {
                name: 'mileage',
                val: 210,
                tile: 'in_tile',
                icon: 'ico.png'
              }
            ],
        },
        {
            id: 3,
            images: 'auto1.jpg',
            name: 'DEAWOO Lanos',
            price: 12000,
            year: 2001,
            specification:[
              {
                name: 'year',
                val: 2011,
                tile: 'in_tile',
                icon: 'ico.png'
              },
              {
                name: 'mileage',
                val: 210,
                tile: 'in_tile',
                icon: 'ico.png'
              }
            ],
        },
        {
            id: 4,
            images: 'auto1.jpg',
            name: 'DEAWOO Sens',
            price: 16300,
            year: 2005,
            specification:[
              {
                name: 'year',
                val: 2011,
                tile: 'in_tile',
                icon: 'ico.png'
              },
              {
                name: 'mileage',
                val: 210,
                tile: 'in_tile',
                icon: 'ico.png'
              }
            ],
        },
        {
            id: 5,
            images: 'auto1.jpg',
            name: 'DEAWOO Lanos v16',
            price: 3200,
            year: 2001,
            specification:[
              {
                name: 'year',
                val: 2011,
                tile: 'in_tile',
                icon: 'ico.png'
              },
              {
                name: 'mileage',
                val: 210,
                tile: 'in_tile',
                icon: 'ico.png'
              }
            ],
        },
        {
            id: 6,
            images: 'auto1.jpg',
            name: 'Nissan GTR',
            price: 9300,
            year: 2009,
            specification:[
              {
                name: 'year',
                val: 2011,
                tile: 'in_tile',
                icon: 'ico.png'
              },
              {
                name: 'mileage',
                val: 210,
                tile: 'in_tile',
                icon: 'ico.png'
              }
            ],
        },
        {
            id: 7,
            images: 'auto1.jpg',
            name: 'BMW X6 sport',
            price: 2600,
            year: 2001,
            specification:[
              {
                name: 'year',
                val: 2011,
                tile: 'in_tile',
                icon: 'ico.png'
              },
              {
                name: 'mileage',
                val: 210,
                tile: 'in_tile',
                icon: 'ico.png'
              }
            ],
        },
        {
            id: 8,
            images: 'auto1.jpg',
            name: 'Opel Astra Classik',
            price: 5900,
            year: 2015,
            specification:[
              {
                name: 'year',
                val: 2011,
                tile: 'in_tile',
                icon: 'ico.png'
              },
              {
                name: 'mileage',
                val: 210,
                tile: 'in_tile',
                icon: 'ico.png'
              }
            ],

        }
  ];
  var uniqueId = function (id) {
    carList.filter(function(item){
      if(item.id == id){
        id++;
      }else{

      }
    })
    return id;
  };
  cars.getCars = function(sortBy){
    carList = _.sortBy(carList, sortBy);
    return carList
  };
  cars.removeCar = function(car){
    carList = _.pull(carList, car);
  };
  cars.addCar = function(car){
    car.id = uniqueId(carList.length+1);
    car.images = car.images.name;
    car.price != null ?  car.price: car.price = 0;
    for(sp in car.specification){
      car.specification[sp].tile ? car.specification[sp].tile='in_tile' : car.specification[sp].tile = '';
    }
    carList.push(car);

  };
  cars.filtredProp = function(min, max, prop){
    var filtred = null;
    if(min != null && max!=null){
      filtred = _.filter(carList, function(item){
        return item[prop] >= min && item[prop] <= max;
      });
    }
    return filtred;
  }


  return cars;
});
