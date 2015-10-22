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
  (this.sell_in > 0) ? this.quality -= 1 : this.quality -= 2;
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
/*
var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}
*/