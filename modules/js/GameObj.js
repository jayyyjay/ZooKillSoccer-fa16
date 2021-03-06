export default class GameObj {

	//inherits from generic JS Object;

	constructor ( name ) {

		console.log('in GameObj');

		this.name = name;

		this.id = this.setId();

	} //end of constructor

	/**
	*get the unique ID value for an object.
	*@returns {strings} the unique id, in uuid format.
	*/
	getId() {
		return this .id;
	}

	/**
	*get the name assigned to this object
	*@returns {strings} the name.
	*/
	getName() {
		return this.name;
	}

	/**
	*set the objects name to a new value.
	*@returns {strings} newName the new name to use.
	*/
	setName( newName ) {
		this.name = newName;
	}

	show () {

			this.dom.style.display = "block";


	}

	hide () {

		this.dom.style.display = "none";

	}

	/**
	*Load image
	*css background image
	*@param {string} imgPath the path to image
	*/
	setBackgroundImage( imgPath ) {

		this.dom.style.backgroundImage = "url('" + imgPath + "')";

	}

	setForegroundImage( imgPath ) {

		let img = new Image();

		img.src = imgPath;

		this.dom.appendChild( img );
	}

	//set size in pixels

	setSize( width, height ) {

		this.dom.style.width = width + 'px';
		this.dom.style.height = height + 'px';


	}

	//set position relative to screen

	setPosition( top, left ) {

		this.dom.style.top = top + 'px';
		this.dom.style.left = left + 'px';

	}

	/** 
     * Generate a unique ID for every game object.
     * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     *@returns {strings} the unique id in uuid format.
     */
    setId () {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;

    } //end of set ID

}//end of class