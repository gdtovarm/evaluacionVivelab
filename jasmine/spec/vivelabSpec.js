describe("item", function(){
	function createItem(quality,sell_in){
		return new Item("test Item",quality,sell_in);
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
});