describe("item", function(){
	var item;

	function createItem(sell_in,quality){
		return new Item("test Item",sell_in,quality);
	}

	function createAgedBrie(sell_in,quality){
		return new Item("Aged Brie",sell_in,quality);
	}

	function createAndUpdateItem(sell_in,quality){
		item = createItem(sell_in,quality);
		item.update_quality();
	}

	it("should have set name, sellIn and quality values", function(){
		item = createItem(0,0);
		expect(item.name).toEqual("test Item");
		expect(item.sell_in).toEqual(0);
		expect(item.quality).toEqual(0);
	});

	it("should lose quality and reduce sellIn time when a day passed", function(){
		createAndUpdateItem(1,1);
		expect(item.sell_in).toEqual(0);
		expect(item.quality).toEqual(0);
	});

	it("should lose quality at twice the speed when sellIn time is 0", function(){
		createAndUpdateItem(0,2);
		expect(item.quality).toEqual(0);
	});

	it("should never have less than 0 quality", function(){
		createAndUpdateItem(0,0);
		expect(item.quality).toEqual(0);
	});

	it("should increase its quality if is an Aged Brie", function(){
		item = createAgedBrie(5,5);
		item.update_quality();
		expect(item.quality).toEqual(6);
	});

	it("should never have a quality over 50", function(){
		item = createAgedBrie(5,50);
		item.update_quality();
		expect(item.quality).toEqual(50);
	});
});