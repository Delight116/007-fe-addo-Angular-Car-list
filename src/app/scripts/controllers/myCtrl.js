'use strict'

app.controller('ViewCarCTRL', function ($scope, CarFactory) {
  this.bClass = {
    class: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
    listActive: 'active',
    tileActive: '',
    type: 'views--list',
  };

  this.setViewList = function(){
    this.bClass = {
      class: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
      listActive: 'active',
      tileActive: '',
      type: 'views--list',
    };
  };
  this.setViewTile = function(){
    this.bClass = {
      class: 'col-lg-4 col-md-4 col-sm-6 col-xs-12',
      listActive: '',
      tileActive: 'active',
      type: 'views--tile',
    };
  }
  this.showButton = true;
  this.show = false;
  this.showForm = function(){
    this.show = !this.show;
    this.showButton = !this.showButton;
  };

  this.specification = {
          name: '',
          val: null,
          tile: '',
          icon: ''
        };
  this.array = [];
  this.array.push(this.specification);
      this.newCar = {
          images: '',
          name: '',
          price: null,
          year: '',
          specification: this.array,

      }
  this.addCar = function () {
    CarFactory.addCar(this.newCar);
    this.show = !this.show;
    this.showButton = !this.showButton;
    this.newCar= {
        images: '',
        name: '',
        price: null,
        specification: []
    };
    this.specification = {
            name: '',
            val: null,
            tile: '',
            icon: ''
          };


    }
  this.sortedProperty = 'name';
  this.properties = {
    name: 'Name',
    price: 'Price',
    specification: 'Specification',
    year: 'Year'
  };
  this.carList = [];

  this.SortedBy = function(){
    this.carList = CarFactory.getCars(this.sortedProperty);

  };
  this.minYear = null;
  this.maxYear = null;
  this.minPrice = null;
  this.maxPrice = null;
  this.rangeYear = function(){
    this.rangeProperties(this.minYear, this.maxYear, 'year');
  }
  this.rangePrice = function(){
    this.rangeProperties(this.minPrice, this.maxPrice, 'price');
  }
  this.rangeProperties = function(min, max, prop){
    this.carList = CarFactory.filtredProp(min, max, prop);
    this.totalPages = Math.ceil(this.carList.length / this.itemInPage);
  }

  this.removeCar = function(car){
    CarFactory.removeCar(car);
  };
  this.SortedBy();


  this.itemInPage = 2;
  this.currentPage = 0;
  this.totalPages =function(){
    return Math.ceil(this.carList.length / this.itemInPage);
  };
  this.pages = function(){
    return _.range(0, this.totalPages());
  }
  this.firstPage = function(){
    this.currentPage = 0;
  };
  this.lastPage = function(){
    this.currentPage = this.totalPages;
  };
  this.BeginFrom = function(){
    return this.currentPage * this.itemInPage;
  };
  this.nextPage = function(){
    this.currentPage = this.currentPage + 1;
  };
  this.prevPage = function(){
    this.currentPage = this.currentPage - 1;
  };
  this.goToPage = function(page){
    page = +page;
    this.currentPage = page;
  }
});
