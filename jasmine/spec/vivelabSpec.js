describe("item", function(){
	it("should have set name, sellIn and quality values", function(){
		var item = new Item("test Item",0,0);
		expect(item.name).toEqual("test Item");
		expect(item.sell_in).toEqual(0);
		expect(item.quality).toEqual(0);
	});

	it("should lose quality and reduce sellIn time when a day passed", function(){
		var item = new Item("test Item",1,1);
		item.update_quality();
		expect(item.sell_in).toEqual(0);
		expect(item.quality).toEqual(0);
	});
});