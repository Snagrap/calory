const ItemController = (function(){
	let data = []

	function add(item){
		data.push(item)
		console.log("item is added and lol")
	}
	function get(id){
		return data.find(item => {
			return item.id === id
		})
	}
	return {
		add: add,
		get: get
	}

})();

ItemController.add({id: 1, name: 'KArl KArilaid ihihihaaaa'})
console.log(ItemController.get(1))