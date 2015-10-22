describe("item", function(){
	function createItem(sell_in,quality){
		return new Item("test Item",sell_in,quality);
	}

	it("should have set name, sellIn and quality values", function(){
		var item = createItem(0,0);
		expect(item.name).toEqual("test Item");
		expect(item.sell_in).toEqual(0);
		expect(item.quality).toEqual(0);
	});

	it("should lose quality and reduce sellIn time when a day passed", function(){
		var item = createItem(1,1);
		item.update_quality();
		expect(item.sell_in).toEqual(0);
		expect(item.quality).toEqual(0);
	});

	it("should lose quality at twice the speed when sellIn time is 0", function(){
		var item = createItem(0,2);
		item.update_quality();
		expect(item.quality).toEqual(0);
	});

	it("should never have less than 0 quality", function(){
		var item = createItem(0,0);
		item.update_quality();
		expect(item.quality).toEqual(0);
	});
});