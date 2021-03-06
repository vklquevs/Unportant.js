(function()
{
	checkForFunctionBind();

	var unportant = {};

	// Extensions
	/*
	Array.prototype.forSome = function(callback)
	{

	}
	Array.prototype.forMost = function(callback)
	{

	}
	Array.prototype.forEveryOther = function(callback)
	{
		
	}
	Array.prototype.forEachButNotInOrder = function(callback)
	{
		forEachButNotInOrder(this, callback);
	}*/
	Array.prototype.dropAFewAtRandom = function()
	{
		var numberToDrop = getRandomNumber(1, this.length);
		for (var i = 0; i < numberToDrop; i++)
		{
			this.splice(getRandomNumber(0, this.length-1),1);
		}
		return this;
	}
	Array.prototype.jumble = function()
	{
		var newArray = this.slice(0);
		for (var i = 0; i < this.length; i++)
		{
			this[i] = newArray.splice(getRandomNumber(0, newArray.length-1), 1)[0];
		}
		return this;
	}

	// Iterator Methods
	/*function forEachButNotInOrder(iteratable, callback)
	{
		var length = iteratable.length;

	}*/

	// String Methods
	String.prototype.throwVowels = function()
	{
		throw this.match(/[aeiou]/ig).join("")
	}
	String.prototype.addJam = function()
	{
		return this + " and jam"
	}

	// Utility Methods
	function getRandomNumber(minNo, maxNo)
	{
		return Math.floor(Math.random()*Number(maxNo)+Number(minNo));
	}

	function checkForFunctionBind()
	{
		//Shim from MDN
		if (!Function.prototype.bind)
		{
			Function.prototype.bind = function( oThis ) 
			{ 
				if (typeof this !== "function") 
				{
					// closest thing possible to the ECMAScript 5 internal
					// IsCallable function
					throw new TypeError( "Function.prototype.bind - what is trying to be bound is not callable" );
				}
		 
				var fSlice = Array.prototype.slice,
					aArgs = fSlice.call( arguments, 1 ),
					fToBind = this,
					fNOP = function() {},
					fBound = function() 
					{
						return fToBind.apply( this instanceof fNOP
							? this
							: oThis || window,
							aArgs.concat( fSlice.call( arguments ) ) );
					};
		 
				fNOP.prototype = this.prototype;
		 
				fBound.prototype = new fNOP();
		 
				return fBound;
			};
		}
	}

	window.unportant = unportant;
})();
