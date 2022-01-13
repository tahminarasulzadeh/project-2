new Vue({
    el : "#app",
    data : {
        monsterHeal : 100,
        userHeal : 100,
        show : false
    },

methods : {
    attack(){
        let point = Math.round(Math.random() * 10 );
        this.monsterHeal -= point;

        let point2 = Math.round(Math.random() * 15 );
        this.userHeal -= point2;

    },
    strongAttack(){
        let point = Math.round(Math.random() * 25 );
        this.monsterHeal -= point;
        let point2 = Math.round(Math.random() * 15 );
        this.userHeal -= point2;
    },
    heart(){
        if(this.userHeal>=2){
          document.getElementById("btn").disabled = true;
          alert("you finished your jokers")
        }else{
          let point2 = Math.round(Math.random() * 10 );
          this.userHeal += point2;
        
         
        }
    
        
    },
    leave(){
        this.userHeal = 0;
    }
},

watch : {
    monsterHeal(value){
       if(value <= 0){
           this.monsterHeal = 0;
           Swal.fire({
            title: 'Siz Uddunuz',
            text: "Yeni oyuna baslamaq isteyirsinizmi?",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Beli, Yeni Oyun!',
            cancelButtonText: "Xeyr"
          }).then((result) => {
            if (result.isConfirmed) {
                this.userHeal = 100;
                this.monsterHeal = 100;
              Swal.fire(
                'Okey!',
                'Yeni Oyun Basladi',
                'success'
              )
            }
          })
       }
    },
    userHeal(value){
        if(value <= 0){
            this.userHeal = 0;
            Swal.fire({
                title: 'Siz Uduzdunuz',
                text: "Yeni oyuna baslamaq isteyirsinizmi?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Beli, Yeni Oyun!',
                cancelButtonText: "Xeyr"
              }).then((result) => {
                if (result.isConfirmed) {
                    this.userHeal = 100;
                    this.monsterHeal = 100;
                  Swal.fire(
                    'Okey!',
                    'Yeni Oyun Basladi',
                    'success'
                  )
                }
              })
            
        }else if(value >= 100){
            this.userHeal = 100;
        }
    }
   
},

  Time(){

    if(heart()>=2){
      document.getElementById("btn").disabled= true;
    }
  }



})

