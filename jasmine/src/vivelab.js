function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

Item.prototype.update_quality = function(){
  if (this.is("Sulfuras"));
  else  {
    (this.valuingItem()) ? this.increaseQuality() : this.decreaseQuality();
    this.capItemQuality();
  }
  this.sell_in -= 1;
}

Item.prototype.increaseQuality = function(){
  var increment = 1;
  if(this.is("Backstage passes")) increment = this.backStageValue();
  this.quality += increment;
}

Item.prototype.decreaseQuality = function(){
  var decrement = 1;
  if(this.is("Conjured")) decrement = 2;
  (this.sell_in > 0) ? this.quality -= decrement : this.quality -= decrement * 2;
}

Item.prototype.capItemQuality = function(){
  if(this.quality < 0) this.quality = 0;
  else if(this.quality > 50) this.quality = 50;
}

Item.prototype.is = function(name){
  return this.name.indexOf(name) == 0;
}

Item.prototype.backStageValue = function(){
    if(this.sell_in < 11 && this.sell_in > 5) return 2;
    else if (this.sell_in <= 5 ) return 3;
    else return 1;
}

Item.prototype.valuingItem = function(){
  return this.is ("Aged Brie") || this.is("Backstage passes");
}