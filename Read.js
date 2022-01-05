AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "Super Man",
          title: "Super Man",
          url: "./assets/thumbnails/book1.jpg",
        },
        {
          id: "Spider Man",
          title: "Spider Man",
          url: "./assets/thumbnails/book2.jpg",
        },
  
        {
          id: "Captain Aero",
          title: "Captain Aero",
          url: "./assets/thumbnails/book3.jpg",
        },
        {
          id: "Outer Space",
          title: "Outer Space",
          url: "./assets/thumbnails/book4.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderel = this.createborder(position,item.id)
        
        // Thumbnail Element
       const thumbnail = this.createthumbnail(item)
       borderel.appendChild(thumbnail)
        // Title Text Element
        const titleel = this.createTitleEl(position,item)
        borderel.appendChild(titleel)
  
        this.placesContainer.appendChild(borderel);
      }
    },

    createborder:function(position,id){
      const entityel = document.createElement("a-entity")
      entityel.setAttribute("id",id)
      entityel.setAttribute("visible", true)
      entityel.setAttribute("geometry",{
        primitive:"plane",
        width:22,
        height:40
      })
      entityel.setAttribute("position",position)
      entityel.setAttribute("material",{
        color:"white",
        opacity:1
      })
      return entityel
    }, 

    createthumbnail:function(item){
      const entityel = document.createElement("a-entity")
      entityel.setAttribute("visible",true)
      entityel.setAttribute("geometry",{
        primitive:"plane",
        width:20,
        height:28
      })
      entityel.setAttribute("material",{
        src: item.url
      })
      return entityel
    },
  
    createTitleEl:function(position,item){
      const entityel = document.createElement("a-entity")
      entityel.setAttribute("visible",true)
      entityel.setAttribute("text",{
        font:"exo2bold",
        color:"black",
        width:70,
        align:"center",
        value:item.title
      })
      const elposition = position
      elposition.y = -20
      entityel.setAttribute("position",elposition)
      return entityel
    }
  });
  